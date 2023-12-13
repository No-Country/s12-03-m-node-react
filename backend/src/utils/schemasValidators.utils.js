import { z } from "zod";

const usersSchemaValidator = z.object({
    first_name: z.string({
        invalid_type_error: 'El nombre debe ser un String',
        required_error: 'El nombre es requerida'
    }).trim().min(1).max(50),
    last_name: z.string({
        invalid_type_error: 'El apellido debe ser un String',
        required_error: 'El apellido es requerido'
    }).trim().min(1).max(100),
    email: z.string({
        invalid_type_error: 'El email debe ser un String',
        required_error: 'El email es requerido'
    }).trim().min(1).max(100).nullable(),
    password: z.string({
        invalid_type_error: 'La contraseña debe ser un String',
    }).trim().optional().nullable(),
    phone: z.string({
        invalid_type_error: 'El celular debe ser un String'
    }).trim().optional(),
    profile_img: z.object().optional(),
    age: z.number({
        invalid_type_error: 'La edad debe ser un numero',
        required_error: 'La edad es requerida'
    }).nullable(),
    location: z.object().optional(),
    geo_point: z.array(z.number()).refine(data => data.length === 0 || data.length === 2, {
        message: 'El arreglo debe tener exactamente dos elementos'
    })
});

const alertsSchemaValidator = z.object({
    date: z.date().optional(),
    alert_description: z.string({
        invalid_type_error: 'La descripcion debe ser un String',
        required_error: 'La descripcion es requerida'
    }).trim().min(1).max(300),
    status: z.string({
        invalid_type_error: 'El status debe ser un String',
        required_error: 'El status requerido'
    }).trim().min(1).max(255),
    last_location: z.object({}),
    geo_point: z.array(z.number()).refine(data => data.length === 2, {
        message: 'El Arreglo es requerido y debe tener exactamente dos elementos'
    })
});

const petsSchemaValidator = z.object({
    name: z.string({
        invalid_type_error: 'El nombre debe ser un String',
        required_error: 'El nombre es requerido'
    }).trim().min(1).max(50),
    age: z.string({
        invalid_type_error: 'La edad debe ser numerica',
        required_error: 'La edad es requerida'
    }).trim().min(1).max(20),
    species: z.string({
        invalid_type_error: 'La especie tiene que ser un string',
        required_error: 'La especie es requerida'
    }).trim().min(1).max(50),
    breed: z.string({
        invalid_type_error: 'La raza debe ser un string',
        required_error: 'La raza es requerida'
    }).trim().min(1).max(50),
    main_color: z.string({
        invalid_type_error: 'El color primario debe ser un string',
        required_error: 'El colo primario es requerido'
    }).trim().min(1).max(50),
    secondary_color: z.string({
        invalid_type_error: 'El color secundario debe ser un string'
    }).trim().min(1).max(50).optional(),
    sex: z.string({
        invalid_type_error: 'El sexo debe ser un string',
        required_error: 'El sexo es requerido'
    }).trim().min(1).max(20),
    description: z.string({
        invalid_type_error: 'La descripcion debe ser un string'
    }).trim().min(1).max(300).optional(),
    pet_img: z.array().optional(),
    qr: z.object().optional()
})

export {
    usersSchemaValidator,
    alertsSchemaValidator,
    petsSchemaValidator
}