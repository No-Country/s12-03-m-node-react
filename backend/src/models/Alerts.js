import mongoose from 'mongoose'

const alertsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    pet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pets'
    },
    date:{
        type: Date,
        default: Date.now()
    },
    alert_description:{
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
        trim: true,
        required: true
    },
    last_location: {
        type: Object,
        trim: true,
        required: true
    },
    geo_point: {
        type: Array,
        trim: true,
        required: true
    }
},{
    timestamps: true
})

const Alerts = mongoose.model('Alerts', alertsSchema)
