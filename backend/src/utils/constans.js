import { z } from 'zod';

export const Age = {
    Cachorro: "Cachorro",
    Joven: "Joven",
    Adulto: "Adulto",
    Senior: "Senior",
};

export const Size = {
    Toy: "Toy",
    Pequeño: "Pequeño",
    Mediano: "Mediano",
    Grande: "Grande",
    ExtraGrande: "Extra grande",
};

export const geoPointSchema = z.object({
    lat: z.number(),
    lng: z.number()
});
