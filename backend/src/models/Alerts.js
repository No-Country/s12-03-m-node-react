import mongoose from 'mongoose'
import { alertsSchemaValidator } from '../utils/schemasValidators.utils.js';
import validateSchemas from '../middlewares/schemasValidators.middlewares.js';


const alertsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    pet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pets'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    alert_description: {
        type: String,
    },
    status: {
        type: String,
    },
    geo_point: {
        type: Array,
    }
}, {
    timestamps: true
})

validateSchemas(alertsSchema, alertsSchemaValidator)

const Alerts = mongoose.model('Alerts', alertsSchema)

export default Alerts
