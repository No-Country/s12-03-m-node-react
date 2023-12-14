import fs from 'fs-extra';

export const removeTempFiles = (petImgFiles) => {
    const files = Array.isArray(petImgFiles) ? petImgFiles : [petImgFiles];
    files.forEach(file => {
        fs.remove(file.tempFilePath).catch(err => console.error("Error removing temp file: ", err));
    });
}