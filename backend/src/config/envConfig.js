import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT || 4000
export const SESSION_KEY = process.env.SESSION_KEY
export const SECRET_KEY = process.env.SECRET_KEY