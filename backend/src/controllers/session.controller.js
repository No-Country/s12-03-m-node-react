import Users from "../models/Users.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";
import { generateToken } from "../utils/session.util.js";

export const register = async (req, res, next) => {
    try {
        const userPayload = req.user
        const user = await Users.create(userPayload)
        res.status(HttpCodes.CODE_SUCCESS_CREATED).send(user)
    } catch (error) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
    }
}

export const login = async (req, res, next) => {
    const { user } = req;
    try {
        if (!user) {
            res.status(HttpCodes.CODE_BAD_REQUEST).send('missing user')
        }
        const access_token = generateToken(user);
        const response = {
            token: `Bearer ${access_token}`,
            user,
        };
        res.status(HttpCodes.CODE_SUCCESS).send(response)
    } catch (error) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).send(error)
    }
}