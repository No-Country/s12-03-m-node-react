import cookieParser from 'cookie-parser';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import {specs} from './doc/swaggerConfig.js';
import routes from './routes/index.js';
import passport from 'passport';
import initializePassport from './middlewares/passport.middleware.js';
import session from 'express-session';

const app = express();

//cors

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


// Ruta para la documentación
initializePassport();
app.use(passport.initialize());
app.use(
  session({
    name: 'envs.SESSION_KEY', //Crear estas variables de entorno para manejo de las sesiones
		secret: 'envs.SECRET_KEY',
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.session());
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

app.use("/api", routes)


export default app


