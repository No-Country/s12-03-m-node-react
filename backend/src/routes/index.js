import express from 'express';
import petsRouter from './pets.routes.js';

const app = express();


app.use('/', petsRouter)

export default app;