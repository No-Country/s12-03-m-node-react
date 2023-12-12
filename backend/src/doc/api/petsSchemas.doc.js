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
          user_id: {
              type: "string",
              description: "ID único del usuario, referenciando a la colección Users",
              example: "507f1f77bcf86cd799439011",
          },
        _id: {
          type: "string",
          example: "656f6b462e011c0899f069e3",
        },
        name: {
          type: "string",
          example: "Rako",
        },
        age: {
          type: "number",
          example: 7,
        },
        species: {
          type: "string",
          example: "Dog",
        },
        breed: {
          type: "string",
          example: "salchi",
        },
        main_color: {
          type: "string",
          example: "azul",
        },
        sex: {
          type: "string",
          example: "male",
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