import swaggerJsdoc from "swagger-jsdoc";
<<<<<<< HEAD
import { routesPetsControllerAPIValue } from "./api/pets.js";
import { petsComponents } from "./api/petsSchemas.doc.js";
import { routesUsersControllerAPIValue } from "./api/users.js";
import { usersComponents } from "./api/usersSchemas.doc.js";

const paths = {
  ...routesPetsControllerAPIValue,
  ...routesUsersControllerAPIValue
};
=======
import {  paths } from "./api/index.js";
import { components } from "./api/schemas.js";
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235

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
<<<<<<< HEAD
        url: "https://s12-03-m-node-react.vercel.app/",
=======
        url: "https://s12-03-m-node-react.vercel.app",
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
        description: "Entorno de producción",
      }
    ],
    paths: {
      ...paths,
    },
<<<<<<< HEAD
    petsComponents,
    usersComponents,
=======
    components
>>>>>>> 933fea5621714dc58ba73e6a527d84727315d235
  },
  apis: ["../src/routes/*.js"], 
};

const specs = swaggerJsdoc(options);
export { specs };