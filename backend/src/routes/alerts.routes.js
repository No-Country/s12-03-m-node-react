import express from 'express';
import { getAllAlerts, getAlertById,  createAlert, updateAlertById, deleteAlertById, } from '../controllers/alerts.controller.js';

const alerRouter = express.Router();


alerRouter
        .get('/', getAllAlerts)
        .get('/:id', getAlertById)
        .post('/', createAlert)         
        .put('/:id', updateAlertById)
        .delete('/:id', deleteAlertById)

export default alerRouter;
