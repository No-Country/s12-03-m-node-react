import { z } from "zod";
import { Age, Size, geoPointSchema } from "./constans.js";

const usersSchemaValidator = z.object({
    full_name: z.string({
        invalid_type_error: 'El nombre debe ser un String',
        required_error: 'El nombre es requerido'
    }).trim().min(1).max(50),
    email: z.string({
        invalid_type_error: 'El email debe ser un String',
        required_error: 'El email es requerido '
    }).trim().min(1).max(100).nullable(),
    password: z.string({
        invalid_type_error: 'La contraseña debe ser un String',
        required_error: 'La contraseña es requerida'
    }).trim().optional().nullable(),
    phone: z.string({
        invalid_type_error: 'El celular debe ser un String',
        required_error: 'El celular es requerido '
    }).trim(),
    profile_img: z.object().optional(),
    location: z.string({
        invalid_type_error: 'La localización debe ser un string',
    }).optional(),
    geo_point: z.array(z.number()).refine(data => data.length === 0 || data.length === 2, {
        message: 'El arreglo debe tener exactamente dos elementos'
    })
});

const alertsSchemaValidator = z.object({
    date: z.string().optional(),
    alert_description: z.string().trim().max(300).optional(),
    status: z.string({
        invalid_type_error: 'El status debe ser un String',
        required_error: 'El status requerido'
    }).trim().min(1).max(255),
    last_location: z.string({
        invalid_type_error: 'La localización debe ser un string',
    }).optional(),
    geo_point: z.array(z.number()).optional(),
    special_characteristics: z.string().trim().optional(),
});

const petsSchemaValidator = z.object({
    name: z.string({
        invalid_type_error: 'El nombre debe ser un String',
        required_error: 'El nombre es requerido'
    }).trim().min(1).max(50),
    age: z.nativeEnum(Age, {
        errorMap: (issue, _ctx) => {
            switch (issue.code) {
                case 'invalid_enum_value':
                    return { message: `La edad solo puede ser: Cachorro, Joven, Adulto, o Senior` };
                case 'invalid_type':
                    return { message: 'La edad es requerida y debe ser un valor válido' };
                default:
                    return { message: 'Error en el campo edad' };
            }
        },
    }),
    species: z.string({
        invalid_type_error: 'La especie tiene que ser un string',
        required_error: 'La especie es requerida'
    }).trim().min(1).max(50),
    breed: z.string({
        invalid_type_error: 'La raza debe ser un string',
        required_error: 'La raza es requerida'
    }).trim().min(1).max(50),
    size: z.nativeEnum(Size, {
        errorMap: (issue, _ctx) => {
            switch (issue.code) {
                case 'invalid_enum_value':
                    return { message: `El tamaño debe ser Toy, Pequeño, Mediano, Grande, o Extra grande` };
                case 'invalid_type':
                    return { message: 'El tamaño es requerido' };
                default:
                    return { message: 'Error en el campo tamaño' };
            }
        },
    }),
    main_color: z.string({
        invalid_type_error: 'El color debe ser un string',
        required_error: 'El color es requerido'
    }).trim().min(1).max(50),
    hair: z.string({
        invalid_type_error: 'El pelo debe ser un string',
        required_error: 'El pelo es requerido'
    }).trim().min(1).max(50),
    eyes: z.string({
        invalid_type_error: 'Los ojos debe ser un string',
        required_error: 'Los ojos es requerido'
    }).trim().min(1).max(50),
    sex: z.string({
        invalid_type_error: 'El sexo debe ser un string',
        required_error: 'El sexo es requerido'
    }).trim().min(1).max(20),
    pet_img: z.array().optional()
})

export {
    usersSchemaValidator,
    alertsSchemaValidator,
    petsSchemaValidator
}