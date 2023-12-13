import express from 'express';
import { getAllAlerts, getAlertById,  createAlert, updateAlertById, deleteAlertById, } from '../controllers/alerts.controller.js';

const alerRouter = express.Router();


alerRouter
         .post('/alerts', createAlert)         
         .get('/alerts', getAllAlerts)
         .get('/alerts/:id', getAlertById)
         .put('/alerts/:id', updateAlertById)
         .delete('/alerts/:id', deleteAlertById)

export default alerRouter;
