import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../config/envConfig.js";

export const generateToken = (payload) => {
	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
	return token;
};
