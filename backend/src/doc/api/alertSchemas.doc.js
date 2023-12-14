const alertComponent = {
    schemas: {
        Alert: {
            type: "object",
            properties: {
                user_id: {
                    type: "string",
                    description: "ID único del usuario, referenciando a la colección Users",
                    example: "507f1f77bcf86cd799439011",
                },
                pet_id: {
                    type: "string",
                    description: "ID único del la mascota, referenciando a la colección Pets",
                    example: "507f1f77bcf86cd799439011",
                },
                _id: {
                    type: "string",
                    example: "656f6b462e011c0899f069e3",
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