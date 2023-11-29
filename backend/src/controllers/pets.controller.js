import { PetsDTO } from "../dtos/pets.DTO";
import { generateQRCode } from "../libs/qrCode";
import Pets from "../models/Pets"
import { HttpCodes } from "../utils/HTTPCodes.util";


export const getPets = async (req, res) => {
    try {
        const pets = await Pets.find();
        return res.status(HttpCodes.CODE_SUCCESS).json(pets);
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const getPetById = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pets.findById(id);
        if (!pet) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "La mascota no ha sido encontrada" });
        return res.status(HttpCodes.CODE_SUCCESS).json(pet);
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const createPet = async (req, res) => {
    try {

        //todo Subir la imagen a Cloudinary
        //todo Obtener la URL de la imagen de Cloudinary

        // const {img} = req.files;
        // const imgUrl = await uploadToCloudinary(img);

       const petDTO = new PetsDTO({...req.body, img: null, qr: null});
       const newPet = new Pets(petDTO);
       await newPet.save();

       const qrData = 'http://localhost:3000/api/pet/' + newPet._id;
       const qrImage = await generateQRCode(qrData);

       //todo Subir la imagen del QR a Cloudinary
       //todo Obtener la URL de la imagen del QR de Cloudinary

    //    newPet.qr = qrImage;
    //    await newPet.save();

        return res.status(HttpCodes.CODE_SUCCESS_CREATED).json(newPet);
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const updatePetById = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pets.findById(id);

        if (!pet) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "La mascota no ha sido encontrada" });

        //Eliminar imagenes de la base de datos y de cloudinary
        const deleteImages = req.body.deleteImages || [];
        let remainingImages = pet.img.filter(img => !deleteImages.includes(img));

        for (const imgUrl of deleteImages) {
            if(pet.img.includes(imgUrl)){
                
                //todo Eliminar la imagen de Cloudinary
            }
        }

        // Verificar si se pueden agregar nuevas imágenes
        if (req.files && remainingImages.length + req.files.length > 2) {
            return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "No se pueden tener más de 2 imágenes en total" });
        }

        //todo Subir las nuevas imágenes a Cloudinary
        for (const file of req.files) {
            //todo Obtener la URL de la imagen de Cloudinary
            remainingImages.push(imgUrl);
        }

        const petDTO = new PetsDTO({...req.body, img: remainingImages});
        const updatedPet = await Pets.findByIdAndUpdate(id, petDTO, {new: true, overwrite: false });
        return res.status(HttpCodes.CODE_SUCCESS).json(updatedPet);
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deletePetById = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pets.findById(id);
        if (!pet) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "La mascota no ha sido encontrada" });

        //todo Eliminar las imagenes de Cloudinary

        await Pets.findByIdAndDelete(id);
        return res.status(HttpCodes.CODE_SUCCESS).json({ message: "La mascota ha sido eliminada" });
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
