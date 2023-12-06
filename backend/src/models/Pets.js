import mongoose from 'mongoose'
import { petsSchemaValidator } from '../utils/schemasValidators.utils.js';
import validateSchemas from '../middlewares/schemasValidators.middlewares.js';

const petsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    species: {
        type: String,
    },
    breed: {
        type: String,
    },
    main_color: {
        type: String,
    },
    secondary_color: {
        type: String,
    },
    sex: {
        type: String,
    },
    description: {
        type: String,
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

validateSchemas(petsSchema, petsSchemaValidator)

const Pets = mongoose.model('pets', petsSchema);

export default Pets