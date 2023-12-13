import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT || 4000
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET
export const SESSION_KEY = process.env.SESSION_KEY
export const SECRET_KEY = process.env.SECRET_KEY
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
export const BASE_URL = process.env.BASE_URL
export const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID
export const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET
export const CLOUDINARY_FOLDER = process.env.CLOUDINARY_FOLDER
export const CSS_URL = process.env.CSS_URL
