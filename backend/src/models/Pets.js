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
    pet_img: [{
        url: {
            type: String,
            trim: true,
            required: true
        },
        public_id: {
            type: String,
            required: true
        }
    }],
    qr: {
        
        url: {
            type: String,
            trim: true,
        },
        public_id: {
            type: String,
        }
    }
},{
    timestamps: true,
})

const Pets = mongoose.model('Pets', petsSchema);

export default Pets