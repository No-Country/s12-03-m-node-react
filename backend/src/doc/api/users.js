export const routesUsersControllerAPIValue = {
  "/api/users": {
    get: {
      summary: "Obtener una lista de todos los usuarios",
      description: "Devuelve un array de todas los usuarios disponibles.",
      tags: ["User"],
      responses: {
        "200": {
          description: "Lista de usuarios obtenida con éxito",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
<<<<<<< HEAD
                  $ref: "#/usersComponents/schemas/User"
=======
                  $ref: "#/components/schemas/User"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                }
              }
            }
          }
        },
        "500": {
          description: "Error interno del servidor",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
<<<<<<< HEAD
                  message: {
                    type: "string",
                    example: "Internal server error"
=======
                  status:{
                    type: "number",
                    example: 500
                  },
                  message: {
                    type: "string",
                    example: "Error interno del servidor"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/api/users/{id}": {
    get: {
      summary: "Obtener detalles de un usuario específico",
      description: "Devuelve los detalles del usuario especificado por el ID.",
      tags: ["User"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID único del usuario",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        "200": {
          description: "Detalles del usuario obtenidos con éxito",
          content: {
            "application/json": {
              schema: {
<<<<<<< HEAD
                $ref: "#/usersComponents/schemas/User"
=======
                $ref: "#/components/schemas/User"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
              }
            }
          }
        },
        "404": {
          description: "Usuario no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
<<<<<<< HEAD
                  message: {
                    type: "string",
                    example: "user not found"
=======
                  status:{
                    type: "number",
                    example: 404
                  },
                  message: {
                    type: "string",
                    example: "Usuario no encontrado"
                  }
                }
              }
            }
          }
        },
        "401": {
          description: "El token de acceso no contiene el id del usuario requerido",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status:{
                    type: "number",
                    example: 401
                  },
                  message: {
                    type: "string",
                    example: "Acceso denegado"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                  }
                }
              }
            }
          }
        },
        "500": {
          description: "Error interno del servidor",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
<<<<<<< HEAD
                  message: {
                    type: "string",
                    example: "Internal server error"
=======
                  status:{
                    type: "number",
                    example: 500
                  },
                  message: {
                    type: "string",
                    example: "Error interno del servidor"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                  }
                }
              }
            }
          }
        }
      }
    },
    put: {
      summary: "Actualizar información de un usuario específico",
      description: "Actualiza los detalles del usuario especificado por el ID.",
      tags: ["User"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID único del usuario a actualizar",
          schema: {
            type: "string"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
<<<<<<< HEAD
          "application/json": {
            schema: {
              $ref: '#/usersComponents/requestBodies/updateUser'
=======
          "multipart/form-data": {
            schema: {
              type: "object",
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
                geo_point: {
                  type: 'array',
                  items: {
                    type: 'number',
                    format: 'float',
                  },
                  minItems: 2,
                  maxItems: 2,
                },
                profile_img: {
                  type: "file",
                  description: "Imagen de perfil del usuario"
                }
              }
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Información del usuario actualizada con éxito",
          content: {
            "application/json": {
              schema: {
<<<<<<< HEAD
                $ref: "#/usersComponents/schemas/User"
=======
                $ref: "#/components/schemas/User"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
              }
            }
          }
        },
        "400": {
<<<<<<< HEAD
          description: "Solicitud incorrecta, datos inválidos",
=======
          description: "Faltan datos para modificar al usuario",
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
<<<<<<< HEAD
                  message: {
                    type: "string",
                    example: "Datos proporcionados inválidos"
=======
                  status:{
                    type: "number",
                    example: 400
                  },
                  message: {
                    type: "string",
                    example: "No se ha recibido ningún dato para modificar"
                  }
                }
              }
            }
          }
        },
        "401": {
          description: "El token de acceso no contiene el id del usuario requerido",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status:{
                    type: "number",
                    example: 401
                  },
                  message: {
                    type: "string",
                    example: "Acceso denegado"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                  }
                }
              }
            }
          }
        },
        "404": {
          description: "Usuario no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
<<<<<<< HEAD
                  message: {
                    type: "string",
                    example: "user not found"
=======
                  status:{
                    type: "number",
                    example: 404
                  },
                  message: {
                    type: "string",
                    example: "Usuario no encontrado"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                  }
                }
              }
            }
          }
        },
        "500": {
          description: "Error interno del servidor",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
<<<<<<< HEAD
                  message: {
                    type: "string",
                    example: "Internal server error"
=======
                  status:{
                    type: "number",
                    example: 500
                  },
                  message: {
                    type: "string",
                    example: "Error interno del servidor"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                  }
                }
              }
            }
          }
        }
      }
    },
    delete: {
        summary: "Eliminar un usuario específico",
        description: "Elimina al usuario especificado por el ID, junto con sus imágenes asociadas.",
        tags: ["User"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID único del usuario a eliminar",
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            description: "Usuario eliminado con éxito",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "El usuario ha sido eliminado"
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Usuario no encontrado",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
<<<<<<< HEAD
                    message: {
                      type: "string",
                      example: "user not found"
=======
                    status:{
                      type: "number",
                      example: 404
                    },
                    message: {
                      type: "string",
                      example: "Usuario no encontrado"
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status:{
                      type: "number",
                      example: 500
                    },
                    message: {
                      type: "string",
                      example: "Internal server error"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/users/{id}/delete-image/{image_id}": {
      delete: {
        summary: "Eliminar imagen de un usuario específico",
        description: "Elimina la imagen especificada de un usuario dado por el ID de usuario y el ID de la imagen.",
        tags: ["User"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID único del usuario",
            schema: {
              type: "string"
            }
          },
          {
            name: "image_id",
            in: "path",
            required: true,
            description: "ID único de la imagen a eliminar",
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            description: "Imagen eliminada con éxito",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "La imagen ha sido eliminada"
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Usuario o imagen no encontrada",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Usuario no encontrado o Imagen no encontrada"
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Internal server error"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
}