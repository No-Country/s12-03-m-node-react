import { ZodError } from "zod";

export const validateSchema = (schema) =>
    (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json(error.errors.map((e) => e.message));
            } else {
                next(error);
            }
        }
    };


export default validateSchema
