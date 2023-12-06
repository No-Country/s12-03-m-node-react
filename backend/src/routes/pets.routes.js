import express from 'express';
import { addImagesToPetById, createPet, deletePetById, deletedImageFromPetById, getPetById, getPets, updatePetInfoById,  } from '../controllers/pets.controller.js';

const petsRouter = express.Router();

petsRouter
    .get('/pets', getPets)
    .get('/pets/:id', getPetById)
    .post('/pets', createPet)
    .put('/pets/update-info/:id', updatePetInfoById)
    .put('/pets/add-image/:id', addImagesToPetById)
    .delete('/pets/delete-image/:id/:image_id', deletedImageFromPetById)
    .delete('/pets/:id', deletePetById)

export default petsRouter;