import Pets from "../models/Pets.js";
import Users from "../models/Users.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import { handleImageDelete, handleImageUpload } from "../utils/imageHandle.js";
import HttpError from "../utils/error.util.js";
import Alerts from "../models/Alerts.js";

export const getUsers = async (req, res, next) => {
    try {
        const users = await Users.find({})
        const usersWithPets = await Promise.all(users.map(async (user) => {
            const pets = await Pets.find({ user_id: user._id });
            const userObject = user.toObject()
            delete userObject.password
            return {
              ...userObject,
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
        if(!user) res.status(HttpCodes.CODE_NOT_FOUND).send('user not found')
        const pets = await Pets.find({ user_id: id })
        const userWithPets = { ...user, pets}
        delete userWithPets.password
        res.status(HttpCodes.CODE_SUCCESS).send(userWithPets)
    } catch (error) {
        next(error)
    }
}

export const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const userPayload = req.body
        const user = await Users.findById(id);
        if (!user) res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "user not found" });
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
        const user = await Users.findById(id);
        if (!user) {
            throw new HttpError('Usuario no encontrado', HttpCodes.CODE_NOT_FOUND)
        }
        if(req.user._id !== id){
            throw new HttpError('No se permite eliminar una cuenta ajena', HttpCodes.CODE_FORBIDDEN)
        };
        const petsToDelete = await Pets.find({ user_id: id })
        if(petsToDelete.length > 0){
            petsToDelete.forEach(async(pet) => {
                await Pets.deleteOne({ _id: pet._id })
                pet.pet_img.forEach(async(img)=>{
                    await handleImageDelete(img.public_id)
                })
                await handleImageDelete(pet.qr.public_id)
            });
        }
        const alertsToDelete = await Alerts.find({ user_id: id })
        if(alertsToDelete.length > 0){
            alertsToDelete.forEach(async(alert) => {
                await Alerts.deleteOne({ _id: alert._id })
            });
        }
        await handleImageDelete(user.profile_img.public_id);
        const deletedUser = await Users.findByIdAndDelete(id)
        res.status(HttpCodes.CODE_SUCCESS).send(deletedUser)
    } catch (error) {
        next(error)
    }
}


