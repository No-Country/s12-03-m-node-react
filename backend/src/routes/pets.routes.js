import express from 'express';
import { addImagesToPetById, createPet, deletePetById, deletedImageFromPetById, getPetById, getPets, updatePetInfoById,  } from '../controllers/pets.controller.js';
import validateSchema from '../middlewares/schemasValidators.middlewares.js';
import { petsSchemaValidator } from '../utils/schemasValidators.utils.js';
import jwtAuth from '../middlewares/jwtAuth.middleware.js';

const petsRouter = express.Router();

petsRouter
    .get('/', getPets)
    .get('/:id', getPetById)
    .post('/', validateSchema(petsSchemaValidator), jwtAuth('jwt'), createPet)
    .put('/update-info/:id', updatePetInfoById)
    .put('/add-image/:id', addImagesToPetById)
    .delete('/:id/delete-image/:image_id', deletedImageFromPetById)
    .delete('/:id', deletePetById)

export default petsRouter;