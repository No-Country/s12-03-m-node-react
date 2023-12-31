import Users from "../models/Users.js";
import Pets from "../models/Pets.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import HttpError from "../utils/error.util.js";
import { handleImageUpload } from "../utils/imageHandle.js";
import { generateToken } from "../utils/session.util.js";
import Alerts from "../models/Alerts.js";

export const register = async (req, res, next) => {
    try {
        const userPayload = req.user
        if (req.files) {
            const uploadedImage = await handleImageUpload(req.files.profile_img);
            const idSections = uploadedImage[0].public_id.split('/');
            const imgPublicId = idSections[idSections.length - 1]
            uploadedImage[0].public_id = imgPublicId
            userPayload.profile_img = uploadedImage[0]
        }
        const user = await Users.create(userPayload)
        if (!user) {
            throw new HttpError('Error al crear usuario', HttpCodes.CODE_INTERNAL_SERVER_ERROR)
        }
        const finalUser = user.toObject()
        delete finalUser.password
        const access_token = generateToken(finalUser);
        const response = {
            token: `Bearer ${access_token}`,
            user: finalUser,
        };
        res.status(HttpCodes.CODE_SUCCESS_CREATED).send(response)
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    const { user } = req;
    try {
        if (!user) {
            throw new HttpError('No se encuentra al usuario', HttpCodes.CODE_NOT_FOUND)
        }
        const access_token = generateToken(user);
        const response = {
            token: `Bearer ${access_token}`,
            user,
        };
        const pets = await Pets.find({ user_id: user._id}).lean()
        user.pets = pets
        const alerts = await Alerts.find({ user_id: user._id }).lean()
        user.alerts = alerts
        res.status(HttpCodes.CODE_SUCCESS).send(response)
    } catch (error) {
        next(error)
    }
}