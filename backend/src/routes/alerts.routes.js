import express from 'express';
import { getAllAlerts, getAlertById,  createAlert, updateAlertById, deleteAlertById, } from '../controllers/alerts.controller.js';
import validateSchema from '../middlewares/schemasValidators.middlewares.js';
import { alertsSchemaValidator } from '../utils/schemasValidators.utils.js';
import passport from 'passport'
import { typeConversor } from '../middlewares/typeConversor.middleware.js';


const alertsRouter = express.Router();


alertsRouter
        .get('/', getAllAlerts)
        .get('/:id', getAlertById)
        .post('/', typeConversor, validateSchema(alertsSchemaValidator), passport.authenticate('jwt'), createAlert)         
        .put('/:id', passport.authenticate('jwt'), updateAlertById)
        .delete('/:id', passport.authenticate('jwt'), deleteAlertById)

export default alertsRouter;
