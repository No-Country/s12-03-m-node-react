const petImageSchema = {
  type: "object",
  properties: {
    url: {
      type: "string",
      example: "https://res.cloudinary.com/dg44k5xxq/image/upload/v1701800774/test/vlnxij2rnmto4wknqib9.jpg",
    },
    public_id: {
      type: "string",
      example: "test/vlnxij2rnmto4wknqib9",
    },
  },
};
  
const qrCodeSchema = {
  type: "object",
  properties: {
    url: {
      type: "string",
      example: "https://res.cloudinary.com/dg44k5xxq/image/upload/v1701800777/test/qzr6dzajgeg2ethbxosk.png",
    },
    public_id: {
      type: "string",
      example: "test/qzr6dzajgeg2ethbxosk",
    },
  },
};
  
const petsComponents = {
  schemas: {
    Pet: {
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
        name: {
          type: "string",
          example: "Rako",
        },
        age: {
          type: "string",
          example: "senior",
        },
        species: {
          type: "string",
          example: "perro",
        },
        breed: {
          type: "string",
          example: "salchi",
        },
        main_color: {
          type: "string",
          example: "azul",
        },
        hair: {
          type: "string",
          example: "corto",
        },
        sex: {
          type: "string",
          example: "male",
        },
        eyes: {
          type: "string",
          example: "oscuros",
        },
        size: {
          type: "string",
          example: "toy",
        },
        pet_img: {
          type: "array",
          items: petImageSchema,
        },
        qr: qrCodeSchema,
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
        },
      },
    },
  },
};

export {petsComponents}
