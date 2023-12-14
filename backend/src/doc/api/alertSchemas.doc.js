const alertComponent = {
    schemas: {
        Alert: {
            type: "object",
            properties: {
                _id: {
                    type: "ObjectId",
                    example: "656f6b462e011c0899f069e3",
                },
                user_id: {
                    type: "ObjectId",
                    description: "ID único del usuario, referenciando a la colección Users",
                    example: "507f1f77bcf86cd799439011",
                },
                pet_id: {
                    type: "ObjectId",
                    description: "ID único del la mascota, referenciando a la colección Pets",
                    example: "507f1f77bcf86cd799439011",
                },
                date: {
                    type: "date",
                    example: "1643270173161"
                },
                alert_description: {
                    type: "string",
                    example: "Descripcion de la mascota encontrada o lugar/referencias",
                },
                status: {
                    type: "string",
                    example: "perdido"
                },
                last_location: {
                    type: "string",
                    example: "Antofagasta"
                },
                special_characteristics: {
                    type: "string",
                    example: "Tiene una carita de milanesa"
                },
                geo_point: {
                    type: 'array',
                    items: {
                        type: 'number',
                        format: 'float',
                    },
                    minItems: 2,
                    maxItems: 2,
                },
            }
        }
    }
}

export default alertComponent