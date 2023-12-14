import { ZodError } from "zod";
import { removeTempFiles } from "../utils/fsDelete.js";

export const validateSchema = (schema) =>
    (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {

            if (req.files && req.files.pet_img) removeTempFiles(req.files.pet_img)

            if (error instanceof ZodError) {
                res.status(400).json(error.errors.map((e) => e.message));
            } else {
                next(error);
            }
        }
    };


export default validateSchema
