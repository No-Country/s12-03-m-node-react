import fs from 'fs-extra'
import { deletedImage, uploadImage } from '../libs/cloudinary.js'
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { CLOUDINARY_FOLDER } from '../config/envConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handleImageUpload = async (files) => {
    if (!Array.isArray(files)) files = [files];

    let urls = [];
    for (const file of files) {
        try {
            const result = await uploadImage(file.data);
            urls.push({
                url: result.secure_url,
                public_id: result.public_id
            });
        } catch (error) {
            console.error("Error uploading image: ", error);
            throw error;
        }
    }
    return urls;
};

export const handleImageDelete = async (public_id) => {
    try {
        await deletedImage(CLOUDINARY_FOLDER + '/' + public_id);
    } catch (error) {
        console.error("Error deleting image: ", error);
        throw error; 
    }
}


export const handleQRCodeUpload = async (dataUrl) => {
    try {
        const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
            throw new Error("Invalid input string");
        }

        const buffer = Buffer.from(matches[2], 'base64');

        // const tempFilePath = path.join(__dirname, uuidv4() + '.png');
        // await fs.writeFile(tempFilePath, buffer);
        const result = await uploadImage(buffer);

        // await fs.remove(tempFilePath);

        return {
            url: result.secure_url,
            public_id: result.public_id
        };
    } catch (error) {
        console.error("Error uploading QR code: ", error);
        throw error;
    }
}