import Users from "../models/Users.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";

export const getUsers = async (req, res, next) => {
    try {
        const users = await Users.find({})
        res.status(HttpCodes.CODE_SUCCESS).send(users)
    } catch (error) {
        return res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id)
        if(!user) res.status(HttpCodes.CODE_NOT_FOUND).send('user not found')
        res.status(HttpCodes.CODE_SUCCESS).send(user)
    } catch (error) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
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
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id);
        if (!user) res.status(HttpCodes.CODE_NOT_FOUND).json({ message: "user not found" });
        const deletedUser = await Users.findByIdAndDelete(id)
        res.status(HttpCodes.CODE_SUCCESS).send(deletedUser)
    } catch (error) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
    }
}


