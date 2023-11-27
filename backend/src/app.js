import cookieParser from 'cookie-parser';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import {specs} from './doc/swaggerConfig.js';
import routes from './routes/index.js';


const app = express();

//cors

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


// Ruta para la documentación

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

app.use("/api", routes)


export default app


