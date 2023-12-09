import Pets from "../models/Pets.js";
import Users from "../models/Users.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import { handleImageDelete, handleImageUpload } from "../utils/imageHandle.js";

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
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id).lean()
        if(!user) {
            return res.status(HttpCodes.CODE_NOT_FOUND).send('user not found')
        }
        const pets = await Pets.find({ user_id: id }).lean()
        user.pets = [...pets]
        res.status(HttpCodes.CODE_SUCCESS).send(user)
    } catch (error) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
    }
}

export const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const userPayload = req.body
        if(Object.keys(userPayload).length === 0 && req.files.length === 0) {
            return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "empty payload" });
        }
        if (req.files) {
            const uploadedImage = await handleImageUpload(req.files.profile_img);
            userPayload.profile_img = uploadedImage[0]
        }
        const user = await Users.findById(id);
        if (!user) {
            return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "user not found" });
        }
        const updatedUser = await Users.findByIdAndUpdate(id, userPayload, { new: true, overwrite: false });
        return res.status(HttpCodes.CODE_SUCCESS).json(updatedUser);
    } catch (error) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
    }
}

export const deleteImageFromUserById = async (req, res) => {
    try {
        const { id, image_id } = req.params;
        const user = await Users.findById(id);

        if (!user) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "El usuario no ha sido encontrado" });

        if (Object.keys(user.profile_img).length > 2) return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "La imagen no ha sido encontrada" });
        
        await handleImageDelete(image_id);

        await Users.findByIdAndUpdate(id, { profile_img: {} });

        return res.status(HttpCodes.CODE_SUCCESS).json({ message: "La imagen ha sido eliminada" });
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedUser = await Users.findByIdAndDelete(id)
        if (!deletedUser) {
            return res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "user not found" });
        }
        res.status(HttpCodes.CODE_SUCCESS).send(deletedUser)
    } catch (error) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
    }
}


