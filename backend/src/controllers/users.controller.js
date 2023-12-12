import Pets from "../models/Pets.js";
import Users from "../models/Users.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import { handleImageDelete, handleImageUpload } from "../utils/imageHandle.js";
import HttpError from "../utils/error.util.js";

export const getUsers = async (req, res, next) => {
    try {
        const users = await Users.find({})
        const usersWithPets = await Promise.all(users.map(async (user) => {
            const pets = await Pets.find({ user_id: user._id });
            return {
              ...user.toObject(),
              pets: pets.map((pet) => pet.toObject()),
            };
          }));
        res.status(HttpCodes.CODE_SUCCESS).send(usersWithPets)
    } catch (error) {
        next(error)
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id).lean()
        if(!user) {
            throw new HttpError('Usuario no encontrado', HttpCodes.CODE_NOT_FOUND)
        }
        const pets = await Pets.find({ user_id: id }).lean()
        user.pets = [...pets]
        res.status(HttpCodes.CODE_SUCCESS).send(user)
    } catch (error) {
        next(error)
    }
}

export const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const userPayload = req.body
        if(Object.keys(userPayload).length === 0 && req.files.length === 0) {
            throw new HttpError('No se ha recibido ningún dato para modificar', HttpCodes.CODE_BAD_REQUEST)
        }
        if (req.files) {
            const uploadedImage = await handleImageUpload(req.files.profile_img);
            userPayload.profile_img = uploadedImage[0]
        }
        const user = await Users.findById(id);
        if (!user) {
            throw new HttpError('Usuario no encontrado', HttpCodes.CODE_NOT_FOUND)
        }
        const updatedUser = await Users.findByIdAndUpdate(id, userPayload, { new: true, overwrite: false });
        return res.status(HttpCodes.CODE_SUCCESS).json(updatedUser);
    } catch (error) {
        next(error)
    }
}

export const deleteImageFromUserById = async (req, res) => {
    try {
        const { id, image_id } = req.params;
        const user = await Users.findById(id);

        if (!user) {
            throw new HttpError('Usuario no encontrado', HttpCodes.CODE_NOT_FOUND)
        }

        if (Object.keys(user.profile_img).length < 2) {
            throw new HttpError('Imagen no encontrada', HttpCodes.CODE_NOT_FOUND)
        }
        
        await handleImageDelete(image_id);

        await Users.findByIdAndUpdate(id, { profile_img: {} });

        return res.status(HttpCodes.CODE_SUCCESS).json({ message: "La imagen ha sido eliminada" });
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedUser = await Users.findByIdAndDelete(id)
        if (!deletedUser) {
            throw new HttpError('Usuario no encontrado', HttpCodes.CODE_NOT_FOUND)
        }
        await handleImageDelete(deletedUser.profile_img.public_id);
        const petsToDelete = await Pets.find({ user_id: id })
        console.log(petsToDelete);
        petsToDelete.forEach(async(pet) => {
            await Pets.deleteOne({ _id: pet._id })
            pet.pet_img.forEach(async(img)=>{
                await handleImageDelete(img.public_id);
            })
        });
        res.status(HttpCodes.CODE_SUCCESS).send(deletedUser)
    } catch (error) {
        next(error)
    }
}


