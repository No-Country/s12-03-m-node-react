import express from 'express';
import { createPet, deletePetById, getPetById, getPets, updatePetById } from '../controllers/pets.controller';

const petsRouter = express.Router();

petsRouter
    .get('/pets', getPets)
    .get('/pets/:id', getPetById)
    .post('/pets', createPet)
    .put('/pets/:id', updatePetById)
    .delete('/pets/:id', deletePetById)

export default petsRouter;