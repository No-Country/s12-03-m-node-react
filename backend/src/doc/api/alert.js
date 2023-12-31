export const routesAlertControllerAPIValue = {
  "/api/alerts": {
    get: {
      summary: "Obtener una lista de todas las alertas",
      description: "Devuelve un array de todas las alertas disponibles.",
      tags: ["Alert"],
      responses: {
        "200": {
          description: "Lista de alertas obtenida con éxito",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Alert"
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
    },
    post: {
      summary: "Crear una nueva alerta",
      description: "Crea una nueva alerta y devuelve los detalles de la alerta creada.",
      tags: ["Alert"],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                pet_id: {
                  type: "ObjectId",
                  example: "24heryge4heregbe"
                },
                alert_description: {
                  type: "string",
                  example: "El perro encontrado tiene una marca en su ojo izquierdo"
                },
                date: {
                  type: "date",
                  example: "232323"
                },
                status: {
                  type: "string",
                  example: "perdido"
                },
                last_location: {
                  type: "string",
                  example: "El pais de nunca Jamás"
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
                special_characteristics: {
                  type: "string",
                  example: "Tiene una carita de milanesa"
                },
              }
            }
          }
        }
      },
      responses: {
        "201": {
          description: "Alerta creada con éxito",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Alet"
              }
            }
          }
        },
        "400": {
          description: "Solicitud incorrecta debido a errores de validación",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Errores de validación en la solicitud"
                  },
                  errors: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    example: [
                      "El campo 'alert_description' es requerido",
                      "El campo 'status' es requerido y debe ser numérico",
                      "No se pueden subir más de 3 imágenes",
                    ]
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
  },
  "/api/alerts/{id}": {
    get: {
      summary: "Obtener detalles de una alerta específica",
      description: "Devuelve los detalles de la alerta especificada por el ID.",
      tags: ["Alert"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID único de la alerta",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        "200": {
          description: "Detalles de la alarta obtenidos con éxito",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Alert"
              }
            }
          }
        },
        "404": {
          description: "Alerta no encontrada",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "La alerta no ha sido encontrada"
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
    },
    delete: {
      summary: "Eliminar una alerta específica",
      description: "Elimina la alerta especificada por el ID, junto con sus imágenes asociadas.",
      tags: ["Alert"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID único de la alerta a eliminar",
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        "200": {
          description: "Alerta eliminada con éxito",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "La alerta ha sido eliminada"
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
                  }
                }
              }
            }
          }
        },
        "403": {
          description: "El usuario no es propietario de la mascota a eliminar",
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
                  }
                }
              }
            }
          }
        },
        "404": {
          description: "Alerta no encontrada",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "La alerta no ha sido encontrada"
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
    },
    put: {
      summary: "Actualizar información de una alerta específica",
      description: "Actualiza los detalles de la alerta especificada por el ID.",
      tags: ["Alert"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID único de la alerta a actualizar",
          schema: {
            type: "string"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                alert_description: {
                  type: "string",
                  example: "El perro encontrado tiene una marca en su ojo izquierdo"
                },
                date: {
                  type: "date",
                  example: "232323"
                },
                status: {
                  type: "string",
                  example: "perdido"
                },
                last_location: {
                  type: "string",
                  example: "El pais de nunca Jamás"
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
                special_characteristics: {
                  type: "string",
                  example: "Tiene una carita de milanesa"
                },
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Información de la alerta actualizada con éxito",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Alert"
              }
            }
          }
        },
        "400": {
          description: "Solicitud incorrecta, datos inválidos",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Datos proporcionados inválidos"
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
                  }
                }
              }
            }
          }
        },
        "403": {
          description: "El usuario no es propietario de la mascota a eliminar",
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
                  }
                }
              }
            }
          }
        },
        "404": {
          description: "Alerta no encontrada",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "La alerta no ha sido encontrada"
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
  },
}
