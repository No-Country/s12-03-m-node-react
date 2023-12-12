export const routesPetsControllerAPIValue = {
    "/pets": {
        get: {
          summary: "Obtener una lista de todas las mascotas",
          description: "Devuelve un array de todas las mascotas disponibles.",
          tags: ["Pet"],
          responses: {
            "200": {
              description: "Lista de mascotas obtenida con éxito",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Pet"
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
            summary: "Crear una nueva mascota",
            description: "Crea una nueva mascota y devuelve los detalles de la mascota creada.",
            tags: ["Pet"],
            requestBody: {
              required: true,
              content: {
                "multipart/form-data": {
                  schema: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "Firulais"
                      },
                      age: {
                        type: "number",
                        example: 3
                      },
                      species: {
                        type: "string",
                        example: "Perro"
                      },
                      breed: {
                        type: "string",
                        example: "Labrador"
                      },
                      main_color: {
                        type: "string",
                        example: "Negro"
                      },
                      secondary_color: {
                        type: "string",
                        example: "Blanco"
                      },
                      sex: {
                        type: "string",
                        example: "Macho"
                      },
                      description: {
                        type: "string",
                        example: "Un perro muy amigable"
                      },
                      user_id: {
                        type: "string",
                        description: "ID único del usuario, referenciando a la colección Users",
                        example: "507f1f77bcf86cd799439011"
                      },
                      pet_img: {
                        type: "array",
                        items: {
                          type: "string",
                          format: "binary"
                        },
                        description: "Imágenes de la mascota (máximo 3)"
                      }
                    }
                  }
                }
              }
            },
            responses: {
              "201": {
                description: "Mascota creada con éxito",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Pet"
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
                              "El campo 'name' es requerido",
                              "El campo 'age' es requerido y debe ser numérico",
                              "El campo 'species' es requerido",
                              "El campo 'breed' es requerido",
                              "El campo 'main_color' es requerido",
                              "El campo 'sex' es requerido",
                              "No se pueden subir más de 3 imágenes",
                            ]
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
      "/pets/{id}": {
        get: {
          summary: "Obtener detalles de una mascota específica",
          description: "Devuelve los detalles de la mascota especificada por el ID.",
          tags: ["Pet"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID único de la mascota",
              schema: {
                type: "string"
              }
            }
          ],
          responses: {
            "200": {
              description: "Detalles de la mascota obtenidos con éxito",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Pet"
                  }
                }
              }
            },
            "404": {
              description: "Mascota no encontrada",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "La mascota no ha sido encontrada"
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
            summary: "Eliminar una mascota específica",
            description: "Elimina la mascota especificada por el ID, junto con sus imágenes asociadas.",
            tags: ["Pet"],
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                description: "ID único de la mascota a eliminar",
                schema: {
                  type: "string"
                }
              }
            ],
            responses: {
              "200": {
                description: "Mascota eliminada con éxito",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "La mascota ha sido eliminada"
                        }
                      }
                    }
                  }
                }
              },
              "404": {
                description: "Mascota no encontrada",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "La mascota no ha sido encontrada"
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
      "/pets/update-info/{id}": {
        put: {
          summary: "Actualizar información de una mascota específica",
          description: "Actualiza los detalles de la mascota especificada por el ID.",
          tags: ["Pet"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID único de la mascota a actualizar",
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
                    name: {
                      type: "string",
                      example: "Firulais"
                    },
                    age: {
                      type: "number",
                      example: 3
                    },
                    species: {
                      type: "string",
                      example: "Perro"
                    },
                    breed: {
                      type: "string",
                      example: "Labrador"
                    },
                    main_color: {
                      type: "string",
                      example: "Negro"
                    },
                    secondary_color: {
                      type: "string",
                      example: "Blanco"
                    },
                    sex: {
                      type: "string",
                      example: "Macho"
                    },
                    description: {
                      type: "string",
                      example: "Un perro muy amigable y juguetón"
                    }
                  }
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Información de la mascota actualizada con éxito",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Pet"
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
            "404": {
              description: "Mascota no encontrada",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "La mascota no ha sido encontrada"
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
      "/pets/add-image/{id}": {
        put: {
          summary: "Agregar imágenes a una mascota específica",
          description: "Agrega nuevas imágenes a la mascota especificada por el ID.",
          tags: ["Pet"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID único de la mascota a la cual se le agregarán imágenes",
              schema: {
                type: "string"
              }
            }
          ],
          requestBody: {
            required: true,
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  properties: {
                    pet_img: {
                      type: "array",
                      items: {
                        type: "string",
                        format: "binary"
                      },
                      description: "Imágenes de la mascota (máximo 3)"
                    }
                  }
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Imágenes agregadas con éxito a la mascota",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Pet"
                  }
                }
              }
            },
            "400": {
              description: "Solicitud incorrecta, por ejemplo, no se han subido imágenes o se ha superado el límite de imágenes",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "No se han subido imágenes o se ha superado el límite de imágenes"
                      }
                    }
                  }
                }
              }
            },
            "404": {
              description: "Mascota no encontrada",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "La mascota no ha sido encontrada"
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
      "/pets/delete-image/{id}/{image_id}": {
        delete: {
          summary: "Eliminar una imagen específica de una mascota",
          description: "Elimina la imagen especificada de la mascota dada por el ID.",
          tags: ["Pet"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID único de la mascota",
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
              description: "Mascota o imagen no encontrada",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        examples: {
                          petNotFound: {
                            summary: "Mascota no encontrada",
                            value: "La mascota no ha sido encontrada"
                          },
                          imageNotFound: {
                            summary: "Imagen no encontrada",
                            value: "La imagen no ha sido encontrada"
                          }
                        }
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