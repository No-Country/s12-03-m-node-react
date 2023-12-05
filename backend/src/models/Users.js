import mongoose from "mongoose";
import { usersSchemaValidator } from "../utils/schemasValidators.utils.js";
import validateSchemas from "../middlewares/schemasValidators.middlewares.js";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        trim: true,
    },
    registration_method: {
        type: String,
    },
    registration_date: {
        type: Date,
        default: Date.now()
    },
    phone: {
        type: String,
    },
    profile_img: {
        type: String,
    },
    age: {
        type: Number,
    },
    last_connection: {
        type: Date,
    },
    location: {
        type: Object,
    },
    geo_point: {
        type: Array,
    },
    facebook_id: {
        type: Number
    }
}, {
    timestamps: true,
})

validateSchemas(userSchema, usersSchemaValidator)

const Users = mongoose.model("Users", userSchema)

export default Users