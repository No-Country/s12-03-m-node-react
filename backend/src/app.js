import cookieParser from 'cookie-parser';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import {specs} from './doc/swaggerConfig.js';
import routes from './routes/index.js';
import passport from 'passport';
import initializePassport from './middlewares/passport.middleware.js';
import session from 'express-session';
import { SECRET_KEY, SESSION_KEY } from './config/envConfig.js';

const app = express();

//cors

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());
app.use(
  session({
    name: SESSION_KEY,
		secret: SECRET_KEY,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.session());

// Ruta para la documentación
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

app.use("/api", routes)


export default app


