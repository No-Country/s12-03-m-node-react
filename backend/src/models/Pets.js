import mongoose from 'mongoose'

const petsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        trim: true,
        required: true
    },
    species: {
        type: String,
        trim: true,
        required: true
    },
    breed: {
        type: String,
        trim: true,
        required: true
    },
    main_color: {
        type: String,
        trim: true,
        required: true
    },
    secondary_color: {
        type: String,
        trim: true,
    },
    sex: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    pet_img: {
        type: String,
        trim: true,
        required: true
    },
    qr: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
},{
    timestamps: true,
})

const Pets = mongoose.model('pets', petsSchema);

export default Pets