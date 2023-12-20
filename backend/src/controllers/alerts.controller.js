import Alerts from '../models/Alerts.js';
import { alertsSchemaValidator } from '../utils/schemasValidators.utils.js';
import validateSchemas from '../middlewares/schemasValidators.middlewares.js';
import { HttpCodes } from '../utils/HTTPCodes.util.js';
import HttpError from '../utils/error.util.js';
import Pets from '../models/Pets.js';

//------ Obtener todos los registros-------
export const getAllAlerts = async (req, res, next) => {
  try {
    const { status, age, species, breed, main_color, sex, size, hair, eyes } = req.query
    const basicFilters = { age, species, breed, main_color, sex, size, hair, eyes }
    let alerts
    if(status){
      alerts = await Alerts.find({ status: status}).populate('pet_id').populate({ path: 'user_id', select: '-password'});
    }else{
      alerts = await Alerts.find().populate('pet_id').populate({ path: 'user_id', select: '-password'});
    }
    const filteredAlerts = alerts.filter(alert => {
      const pet = alert.pet_id;
      for (const field in basicFilters) {
        if (basicFilters[field] !== undefined && pet[field] !== basicFilters[field]) {
          return false;
        }
      }
    
      return true;
    });
    return res.status(HttpCodes.CODE_SUCCESS).json(filteredAlerts);
  } catch (error) {
    next(error)
  }
};

// ------Obtener un registro por ID-------
export const getAlertById = async (req, res, next) => {
  try {
    const alert = await Alerts.findById(req.params.id).populate('pet_id').populate({ path: 'user_id', select: '-password'});
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
  console.log(req.body)
  try {
    const { _id } = req.user
    const ownedPets = await Pets.find({ user_id: _id })
    if(ownedPets.length === 0){
      throw new HttpError('Este usuario no posee ninguna mascota', HttpCodes.CODE_BAD_REQUEST)
    }
    const pet = ownedPets.find((pet) => pet._id == req.body.pet_id)
    if(!pet){
      throw new HttpError('Este usuario no es propietario de esta mascota', HttpCodes.CODE_BAD_REQUEST)
    }
    const newAlert = new Alerts({...req.body, user_id: _id});
    const savedAlert = await newAlert.save();
    if (!savedAlert) {
      throw new HttpError('Error al crear alerta', HttpCodes.CODE_INTERNAL_SERVER_ERROR)
    }
  return res.status(HttpCodes.CODE_SUCCESS_CREATED).json(savedAlert);
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
    if (!updatedAlert) {
      throw new HttpError('No se ha encontrado la alerta', HttpCodes.CODE_NOT_FOUND)
    }
    return res.status(HttpCodes.CODE_SUCCESS).json(updatedAlert);
  } catch (error) {
    next(error)
  }
};

// ------Eliminar un registro por ID---------
export const deleteAlertById = async (req, res, next) => {
  try {
    const deletedAlert = await Alerts.findByIdAndDelete(req.params.id);
    if (!deletedAlert) {
      throw new HttpError('No se ha encontrado la alerta', HttpCodes.CODE_NOT_FOUND)
    }
    return res.status(HttpCodes.CODE_SUCCESS).json(deletedAlert);
  } catch (error) {
    next(error)
  }
};
