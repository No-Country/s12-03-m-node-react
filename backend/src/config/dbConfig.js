import mongoose from "mongoose";
import {MONGODB_URI} from "./envConfig.js";


export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Conexión a la base de datos exitosa");
  } catch (err) {
    throw new Error(err);
  }
};
