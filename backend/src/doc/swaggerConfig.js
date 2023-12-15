import swaggerJsdoc from "swagger-jsdoc";
import { routesPetsControllerAPIValue } from "./api/pets.js";
import { routesUsersControllerAPIValue } from "./api/users.js";
import { routesAlertControllerAPIValue } from "./api/alert.js";
import { components } from "./api/schemas.js";

const paths = {
  ...routesPetsControllerAPIValue,
  ...routesUsersControllerAPIValue,
  ...routesAlertControllerAPIValue
};

const options = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "API de Rastrea Patitas", 
      version: "1.0.0", 
      description: "Documentación de la API de Rastrea Patitas", 
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
    components
  },
  apis: ["../src/routes/*.js"], 
};

const specs = swaggerJsdoc(options);
export { specs };