import { BASE_URL } from "../../config/envConfig.js";

export const routesSessionControllerAPIValue = {
    "/api/session/register": {
        post: {
          summary: "Registrar un nuevo usuario",
          description: "Crea un nuevo usuario en el sistema. Este endpoint también maneja la carga de una imagen de perfil si se proporciona.",
          tags: ["Session"],
          requestBody: {
            required: true,
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  properties: {
                    first_name: { 
                      type: "string",
                      maxLength: 50,
                      description: "El nombre del usuario. Máximo 50 caracteres."
                    },
                    last_name: { 
                      type: "string",
                      maxLength: 100,
                      description: "El apellido del usuario. Máximo 100 caracteres."
                    },
                    email: { 
                      type: "string",
                      maxLength: 100,
                      description: "El correo electrónico del usuario. Máximo 100 caracteres."
                    },
                    password: { 
                      type: "string",
                      description: "La contraseña del usuario."
                    },
                    phone: { 
                      type: "string",
                      description: "El número de teléfono del usuario."
                    },
                    profile_img: {
                      type: "string",
                      format: "binary",
                      description: "La imagen de perfil del usuario."
                    },
                    age: { 
                      type: "number",
                      description: "La edad del usuario."
                    },
                    location: {
                      type: "object",
                      description: "La ubicación del usuario."
                    },
                    geo_point: {
                      type: "array",
                      items: {
                        type: "number"
                      },
                      minItems: 2,
                      maxItems: 2,
                      description: "El punto geográfico del usuario, representado por un arreglo de dos números."
                    }
                    // Agrega otros campos si es necesario
                  },
                  required: ["first_name", "last_name", "email", "password", "age"]
                }
              }
            }
          },
          responses: {
            "201": {
              description: "Usuario creado con éxito",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User"
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
      "/api/session/login": {
        post: {
          summary: "Iniciar sesión",
          description: "Autentica a un usuario y devuelve un token de acceso si las credenciales son válidas.",
          tags: ["Session"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: {
                      type: "string",
                      format: "email",
                      description: "El correo electrónico del usuario",
                      example: "usuario@example.com"
                    },
                    password: {
                      type: "string",
                      description: "La contraseña del usuario",
                      example: "Contraseña123"
                    }
                  },
                  required: ["email", "password"]
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Inicio de sesión exitoso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      },
                      user: {
                        // Aquí debes describir la estructura del objeto 'user' que se devuelve
                        type: "object",
                        properties: {
                          _id: { type: "string", example: "507f1f77bcf86cd799439011" },
                          email: { type: "string", format: "email", example: "usuario@example.com" }
                          // Incluir otras propiedades relevantes del usuario
                        }
                      }
                    }
                  }
                }
              }
            },
            "401": {
              description: "Credenciales inválidas",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Usuario o contraseña incorrecta"
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
      "/api/session/auth/google": {
        get: {
          summary: "Iniciar sesión con Google",
          description: "Redirige al usuario a la autenticación de Google. Una vez autenticado y redirigido de vuelta, el usuario recibe un token de acceso y su información de perfil, según el esquema de usuario definido.",
          tags: ["Session"],
          responses: {
            "200": {
              description: "Autenticación exitosa y datos de usuario devueltos",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      },
                      user: {
                        $ref: "#/components/schemas/User"
                      }
                    }
                  }
                }
              }
            },
            "404": {
              description: "No se encuentra al usuario",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "No se encuentra al usuario"
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
      "/api/session/auth/google/callback": {
        get: {
          summary: "Callback de Google después de la autenticación",
          description: "Este endpoint maneja la respuesta de Google después de la autenticación. Si la autenticación es exitosa, crea o recupera un usuario y genera un token de acceso.",
          tags: ["Session"],
          responses: {
            "200": {
              description: "Usuario autenticado con éxito y token generado",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      },
                      user: {
                        $ref: "#/components/schemas/User"
                      }
                    }
                  }
                }
              }
            },
            "404": {
              description: "No se encuentra al usuario",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "No se encuentra al usuario"
                      }
                    }
                  }
                }
              }
            },
            "302": {
              description: "Redirección en caso de falla en la autenticación",
              headers: {
                Location: {
                  schema: {
                    type: "string",
                    example: `${BASE_URL}/iniciar-sesion`
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
      "/api/session/auth/facebook": {
        get: {
          summary: "Iniciar sesión con Facebook",
          description: "Redirige al usuario a la autenticación de Facebook. Este es el primer paso en el flujo de autenticación con Facebook.",
          tags: ["Session"],
          responses: {
            "404": {
              description: "No se encuentra al usuario",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "No se encuentra al usuario"
                      }
                    }
                  }
                }
              }
            },
            "302": {
              description: "Redirección a la autenticación de Facebook"
              // No se especifica un esquema de respuesta, ya que la respuesta es una redirección
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
      "/api/session/auth/facebook/callback": {
        get: {
          summary: "Callback de Facebook después de la autenticación",
          description: "Este endpoint maneja la respuesta de Facebook después de la autenticación. Si la autenticación es exitosa, se invoca la función 'login' para generar un token de acceso y devolver los datos del usuario.",
          tags: ["Session"],
          responses: {
            "200": {
              description: "Usuario autenticado con éxito, token generado y datos del usuario devueltos",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      },
                      user: {
                        $ref: "#/components/schemas/User"
                      }
                    }
                  }
                }
              }
            },
            "404": {
              description: "No se encuentra al usuario",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "No se encuentra al usuario"
                      }
                    }
                  }
                }
              }
            },
            "302": {
              description: "Redirección en caso de falla en la autenticación",
              headers: {
                Location: {
                  schema: {
                    type: "string",
                    example: `${BASE_URL}/iniciar-sesion`
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