import swaggerJsdoc from "swagger-jsdoc";
import { routesPetsControllerAPIValue } from "./api/pets.js";
import { petsComponents } from "./api/petsSchemas.doc.js";
import { routesUsersControllerAPIValue } from "./api/users.js";
import { usersComponents } from "./api/usersSchemas.doc.js";

const paths = {
  ...routesPetsControllerAPIValue,
  ...routesUsersControllerAPIValue
};

const options = {
  definition: {
    openapi: "3.0.0", // Versión de Swagger
    info: {
      title: "API de Rastrea Patitas", // Título de tu API
      version: "1.0.0", // Versión de tu API
      description: "Documentación de la API de Rastrea Patitas", // Descripción de tu API
      contact: {
        name: "Rastrea Patitas",
        url: "https://github.com/No-Country/s12-03-m-node-react/tree/main",
        email: "rastreapatitas@gmail.com",
      },
    },

    servers: [
      {
        url: "http://localhost:4000", 
        description: "Entorno de desarrollo",
      },
      {
        url: "https://s12-03-m-node-react.vercel.app/",
        description: "Entorno de producción",
      }
    ],
    paths: {
      ...paths,
    },
    petsComponents,
    usersComponents,
  },
  apis: ["../src/routes/*.js"], // Ruta a tus archivos de definición de rutas
};

const specs = swaggerJsdoc(options);
export { specs };