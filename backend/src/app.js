import cookieParser from "cookie-parser";
import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { specs } from "./doc/swaggerConfig.js";
import routes from "./routes/index.js";
import fileUpload from "express-fileupload";
import passport from "passport";
import initializePassport from "./middlewares/passport.middleware.js";
import session from "express-session";
import { SECRET_KEY, SESSION_KEY, CSS_URL } from "./config/envConfig.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//cors
app.use(
	cors({
		origin: ["https://rastreapatitas.vercel.app/", "http://localhost:5173", "https://s12-03-m-node-react.vercel.app/api-docs/"],
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true,
	})
);

app.use(express.json());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: path.join(__dirname, 'tmp'),
	})
);
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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { customCssUrl: CSS_URL }));

app.use("/api", routes);

export default app;
