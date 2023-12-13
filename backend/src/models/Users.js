import mongoose from "mongoose";

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
        url: {
            type: String,
            trim: true,
        },
        public_id: {
            type: String,
        }
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

const Users = mongoose.model("Users", userSchema)

export default Users