import Alerts from '../models/Alerts.js';
import { alertsSchemaValidator } from '../utils/schemasValidators.utils.js';
import validateSchemas from '../middlewares/schemasValidators.middlewares.js';
import { HttpCodes } from '../utils/HTTPCodes.util.js';
import HttpError from '../utils/error.util.js';

//------ Obtener todos los registros-------
export const getAllAlerts = async (req, res, next) => {
  try {
    const { filter } = req.query
    let alerts
    if(filter){
      alerts = await Alerts.find({ status: filter});
    }else{
      alerts = await Alerts.find();
    }
    return res.status(HttpCodes.CODE_SUCCESS).json(alerts);
  } catch (error) {
    next(error)
  }
};

// ------Obtener un registro por ID-------
export const getAlertById = async (req, res, next) => {
  try {
    const alert = await Alerts.findById(req.params.id);
    if (!alert){
      throw new HttpError('Alerta no encontrada', HttpCodes.CODE_NOT_FOUND)
    }
    return res.status(HttpCodes.CODE_SUCCESS).json(alert);
  } catch (error) {
    next(error)
  }
};

// ------Crear un nuevo registro-----
export const createAlert = async (req, res, next) => {
  try {
    const newAlert = new Alerts(req.body);
    validateSchemas(newAlert, alertsSchemaValidator);
    const savedAlert = await newAlert.save();
    res.status(201).json(savedAlert);
  } catch (error) {
    next(error)
  }
};

// -----Actualizar un registro por ID-------
export const updateAlertById = async (req, res, next) => {
  try {
    const updatedAlert = await Alerts.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAlert);
  } catch (error) {
    next(error)
  }
};

// ------Eliminar un registro por ID---------
export const deleteAlertById = async (req, res, next) => {
  try {
    await Alerts.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error)
  }
};
