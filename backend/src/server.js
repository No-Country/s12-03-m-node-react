import { connectDB } from "./config/dbConfig.js";
import {PORT} from "./config/envConfig.js";


export const initServer = async (app) => {

    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
}