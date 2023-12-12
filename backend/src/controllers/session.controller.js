import Users from "../models/Users.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import HttpError from "../utils/error.util.js";
import { handleImageUpload } from "../utils/imageHandle.js";
import { generateToken } from "../utils/session.util.js";

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
        res.status(HttpCodes.CODE_SUCCESS_CREATED).send(user)
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
        res.status(HttpCodes.CODE_SUCCESS).send(response)
    } catch (error) {
        next(error)
    }
}