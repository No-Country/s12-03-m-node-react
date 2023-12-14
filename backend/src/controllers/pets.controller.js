import { BASE_URL } from "../config/envConfig.js";
import { PetsDTO, UpdatePetInfoDTO } from "../dtos/pets.DTO.js";
import { generateQRCode } from "../libs/qrCode.js";
import Pets from "../models/Pets.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import HttpError from "../utils/error.util.js";
import {
  handleImageDelete,
  handleImageUpload,
  handleQRCodeUpload,
} from "../utils/imageHandle.js";

export const getPets = async (req, res, next) => {
  try {
    const pets = await Pets.find();
    return res.status(HttpCodes.CODE_SUCCESS).json(pets);
  } catch (error) {
    next(error)
  }
};

export const getPetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pet = await Pets.findById(id);
    if (!pet){
      throw new HttpError('Mascota no encontrada', HttpCodes.CODE_NOT_FOUND)
    }
    return res.status(HttpCodes.CODE_SUCCESS).json(pet);
  } catch (error) {
    next(error)
  }
};

export const createPet = async (req, res, next) => {
  try {
    let petImages
    if (req.files) {
      let imageUploadResults = [];
      if (Array.isArray(req.files.pet_img) && req.files.pet_img.length > 3) {
        throw new HttpError('No se pueden subir más de 3 imágenes', HttpCodes.CODE_BAD_REQUEST)
      }
      imageUploadResults = await handleImageUpload(req.files.pet_img);
      petImages = imageUploadResults.map(image =>{
        const idSections = image.public_id.split('/')
        const imgPublicId = idSections[idSections.length - 1]
        image.public_id = imgPublicId
        return image
      })
    }
    const petDTO = new PetsDTO({ ...req.body, user_id: req.user._id, pet_img: petImages });
    const newPet = new Pets(petDTO);

    await newPet.save();

    const qrData =  `${BASE_URL}/api/pets/${newPet._id}`;
    const qrImage = await generateQRCode(qrData);
    const qrImageUrl = await handleQRCodeUpload(qrImage);
    newPet.qr =  {
        url: qrImageUrl.url,
        public_id: qrImageUrl.public_id
    };

    await newPet.save();

    return res.status(HttpCodes.CODE_SUCCESS_CREATED).json(newPet);
  } catch (error) {
    next(error)
  }
};

export const updatePetInfoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateDTO = new UpdatePetInfoDTO(req.body);
        const updatedPet = await Pets.findByIdAndUpdate(id, updateDTO, { new: true });

        return res.status(HttpCodes.CODE_SUCCESS).json(updatedPet);
    } catch (error) {
      next(error)
    }
};

export const addImagesToPetById = async (req, res, next) => {
    try {
        if(!req.files) {  
          throw new HttpError('Faltan las imágenes', HttpCodes.CODE_BAD_REQUEST)
        }

        const { id } = req.params;
        const pet = await Pets.findById(id);

        if (!pet){
          throw new HttpError('Mascota no encontrada', HttpCodes.CODE_NOT_FOUND)
        }
        console.log(pet.pet_img.length)
        if (pet.pet_img.length> 3) {
          throw new HttpError('No se pueden subir más de 3 imágenes', HttpCodes.CODE_BAD_REQUEST)
        }

        const imageUploadResults = await handleImageUpload(req.files.pet_img);

        const updatedPet = await Pets.findByIdAndUpdate(id, { $push: { pet_img: imageUploadResults } }, { new: true });

        return res.status(HttpCodes.CODE_SUCCESS).json(updatedPet);
    } catch (error) {
      next(error)
    }
}

export const deletedImageFromPetById = async (req, res, next) => {
    try {
        const { id, image_id } = req.params;
        const pet = await Pets.findById(id);

        if (!pet){
          throw new HttpError('Mascota no encontrada', HttpCodes.CODE_NOT_FOUND)
        }

        const image = pet.pet_img.find(img => img.public_id == image_id);

        if (!image) {
          throw new HttpError('Imagen no encontrada', HttpCodes.CODE_NOT_FOUND)
        }
        
        await handleImageDelete(image.public_id);

        await Pets.findByIdAndUpdate(id, { $pull: { pet_img: { public_id: image_id } } });

        return res.status(HttpCodes.CODE_SUCCESS).json({ message: "La imagen ha sido eliminada" });
    } catch (error) {
      next(error)
    }
}

export const deletePetById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const petToRemove = await Pets.findById(id);

    if (!petToRemove){
      throw new HttpError('Mascota no encontrada', HttpCodes.CODE_NOT_FOUND)
    }
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
    next(error)
  }
};
