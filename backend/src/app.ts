import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response } from 'express';
import Database from './database';

import routes from './routes';
const db = new Database();
const app = express();

db.connectDB().then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(routes);
});

export default app;
