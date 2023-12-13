import Alerts from '../models/Alerts.js';
import { alertsSchemaValidator } from '../utils/schemasValidators.utils.js';
import validateSchemas from '../middlewares/schemasValidators.middlewares.js';

//------ Obtener todos los registros-------
export const getAllAlerts = async (req, res) => {
  try {
    const alerts = await Alerts.find();
    console.log(alerts)
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ------Obtener un registro por ID-------
export const getAlertById = async (req, res) => {
  try {
    const alert = await Alerts.findById(req.params.id);
    res.json(alert);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ------Crear un nuevo registro-----
export const createAlert = async (req, res) => {
  try {
    const newAlert = new Alerts(req.body);
    validateSchemas(newAlert, alertsSchemaValidator);
    const savedAlert = await newAlert.save();
    res.status(201).json(savedAlert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// -----Actualizar un registro por ID-------
export const updateAlertById = async (req, res) => {
  try {
    const updatedAlert = await Alerts.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAlert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ------Eliminar un registro por ID---------
export const deleteAlertById = async (req, res) => {
  try {
    await Alerts.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
