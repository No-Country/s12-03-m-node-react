import {v2 as cloudinary} from 'cloudinary'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_NAME, CLOUDINARY_FOLDER } from '../config/envConfig.js'


cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
})

export const uploadImage = async (data) =>   {
    try {
        const uploadedImg = await new Promise(
            (resolve) => {
                const transformation = {
                    height: 700,
                    width: 700,
                    crop: "limit",
                    format: 'jpg',
                    quality: 'auto:good'
                }
                cloudinary.uploader.upload_stream({ folder: CLOUDINARY_FOLDER, transformation: transformation}, (error, uploadResult) => {
                    if(error) {
                        console.log(error);
                        throw new Error(error)
                    }
                    return resolve(uploadResult);
                })
                .end(data);
            }
        );
        return uploadedImg;
        
    } catch (error) {
        console.log(error);
    }
}

export const deletedImage = async id => {
    return await cloudinary.uploader.destroy(id)
}