import { PetsDTO, UpdatePetInfoDTO } from "../dtos/pets.DTO.js";
import { generateQRCode } from "../libs/qrCode.js";
import Pets from "../models/Pets.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import {
  handleImageDelete,
  handleImageUpload,
  handleQRCodeUpload,
} from "../utils/imageHandle.js";

export const getPets = async (req, res) => {
  try {
    const pets = await Pets.find();
    return res.status(HttpCodes.CODE_SUCCESS).json(pets);
  } catch (error) {
    return res
      .status(HttpCodes.CODE_INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pets.findById(id);
    if (!pet)
      return res
        .status(HttpCodes.CODE_NOT_FOUND)
        .json({ message: "La mascota no ha sido encontrada" });
    return res.status(HttpCodes.CODE_SUCCESS).json(pet);
  } catch (error) {
    return res
      .status(HttpCodes.CODE_INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const createPet = async (req, res) => {
  try {
    let imageUploadResults = [];
    if (req.files) {
      if (Array.isArray(req.files.pet_img) && req.files.pet_img.length > 3) {
        return res
          .status(400)
          .json({ message: "No se pueden subir más de 3 imágenes" });
      }

      imageUploadResults = await handleImageUpload(req.files.pet_img);
    }

    const petDTO = new PetsDTO({ ...req.body, pet_img: imageUploadResults });
    const newPet = new Pets(petDTO);

    await newPet.save();

    const qrData = "http://localhost:3000/api/pets/" + newPet._id;
    const qrImage = await generateQRCode(qrData);
    const qrImageUrl = await handleQRCodeUpload(qrImage);
    console.log(qrImageUrl)
    newPet.qr =  {
        url: qrImageUrl.url,
        public_id: qrImageUrl.public_id
    };

    await newPet.save();

    return res.status(HttpCodes.CODE_SUCCESS_CREATED).json(newPet);
  } catch (error) {
    return res
      .status(HttpCodes.CODE_INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const updatePetInfoById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateDTO = new UpdatePetInfoDTO(req.body);
        const updatedPet = await Pets.findByIdAndUpdate(id, updateDTO, { new: true });

        return res.status(HttpCodes.CODE_SUCCESS).json(updatedPet);
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

export const addImagesToPetById = async (req, res) => {
    try {
        if(!req.files) return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "No se han subido imágenes" });

        const { id } = req.params;
        const pet = await Pets.findById(id);

        if (!pet) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "La mascota no ha sido encontrada" });
        console.log(pet.pet_img.length)
        if (pet.pet_img.length> 3) {
            return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "No se pueden tener más de 3 imágenes en total" });
        }

        const imageUploadResults = await handleImageUpload(req.files.pet_img);

        const updatedPet = await Pets.findByIdAndUpdate(id, { $push: { pet_img: imageUploadResults } }, { new: true });

        return res.status(HttpCodes.CODE_SUCCESS).json(updatedPet);
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deletedImageFromPetById = async (req, res) => {
    try {
        const { id, image_id } = req.params;
        const pet = await Pets.findById(id);

        if (!pet) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "La mascota no ha sido encontrada" });

        const image = pet.pet_img.find(img => img._id == image_id);

        if (!image) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "La imagen no ha sido encontrada" });
        
        await handleImageDelete(image.public_id);

        await Pets.findByIdAndUpdate(id, { $pull: { pet_img: { _id: image_id } } });

        return res.status(HttpCodes.CODE_SUCCESS).json({ message: "La imagen ha sido eliminada" });
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deletePetById = async (req, res) => {
  try {
    const { id } = req.params;

    const petToRemove = await Pets.findById(id);

    if (!petToRemove)
      return res
        .status(HttpCodes.CODE_NOT_FOUND)
        .json({ message: "La mascota no ha sido encontrada" });

        for (const img of petToRemove.pet_img) {
            if (img && img.public_id) {
                await handleImageDelete(img.public_id);
            }
        }
    await handleImageDelete(petToRemove.qr.public_id);

    await Pets.findByIdAndDelete(id);
    return res
      .status(HttpCodes.CODE_SUCCESS)
      .json({ message: "La mascota ha sido eliminada" });
  } catch (error) {
    return res
      .status(HttpCodes.CODE_INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
