import express from 'express';
import { addImagesToPetById, createPet, deletePetById, deletedImageFromPetById, getPetById, getPets, updatePetInfoById,  } from '../controllers/pets.controller.js';
import validateSchema from '../middlewares/schemasValidators.middlewares.js';
import { petsSchemaValidator } from '../utils/schemasValidators.utils.js';
import passport from 'passport'

const petsRouter = express.Router();

petsRouter
    .get('/', getPets)
    .get('/:id', getPetById)
    .post('', validateSchema(petsSchemaValidator), passport.authenticate('jwt'), createPet)
    .put('/update-info/:id', updatePetInfoById)
    .put('/add-image/:id', addImagesToPetById)
    .delete('/delete-image/:id/:image_id', deletedImageFromPetById)
    .delete('/:id', deletePetById)

export default petsRouter;