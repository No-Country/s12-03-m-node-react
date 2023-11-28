import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
    },
    registration_method: {
        type: String,
        trim: true,
        required: true
    },
    registration_date: {
        type: Date,
        default: Date.now()
    },
    phone: {
        type: String,
        trim: true,
    },
    profile_img: {
        type: String,
        trim: true,
    },
    age: {
        type: Number,
        trim: true,
    },
    last_connection: {
        type: Date,
    },
    location: {
        type: Object,
        trim: true,
    },
    geo_point: {
        type: Array,
        trim: true,
    }
}, {
    timestamps: true,
})

const Users = mongoose.model("Users", userSchema)

export default Users