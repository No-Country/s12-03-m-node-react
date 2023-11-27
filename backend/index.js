import express from 'express';
import { initServer } from './src/server.js';

const app = express();
initServer(app);
