 const usersComponents = {
  schemas: {
    User: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          example: "656f6b462e011c0899f069e3",
        },
        first_name: {
            type: "string",
            example: "Aureliano",
        },
        last_name: {
          type: "string",
          example: "Buendía",
        },
        email: {
          type: "string",
          example: 'cienaños@email.com',
        },
        password: {
          type: "string",
          example: "superSecurePass5341",
        },
        registration_method: {
          type: "string",
          example: "google",
        },
        registration_date: {
          type: "date",
          example: "2023-11-29T15:58:11.439+00:00",
        },
        phone: {
          type: "string",
          example: "+5491111111111",
        },
        profile_img: {
          type: "string",
          example: "https://super-cute-profile-img.example"
        },
        age: {
          type: "number",
          example: 22
        },
        last_connection: {
          type: "date",
          example: "2023-11-29T15:58:11.439+00:00"
        },
        location: {
          type: 'object',
          properties: {
            province: {
              type: 'string',
            },
            locality: {
              type: 'string',
            },
          },
          required: ['province', 'locality'],
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
        pets: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/pets'
          }
        },
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
  requestBodies: {
    updateUser: {
      type: 'object',
      properties: {
        first_name: {
          type: "string",
          example: "Aureliano",
        },
        last_name: {
          type: "string",
          example: "Buendía",
        },
        phone: {
          type: "string",
          example: "+5491111111111",
        },
        age: {
          type: "number",
          example: 22
        },
        location: {
          type: 'object',
          properties: {
            province: {
              type: 'string',
            },
            locality: {
              type: 'string',
            },
          },
          required: ['province', 'locality'],
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
};

export {usersComponents}
