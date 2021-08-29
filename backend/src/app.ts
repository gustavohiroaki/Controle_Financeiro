import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response } from 'express';
import connectDB from './database';

import routes from './routes';

const app = express();

connectDB().then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(routes);
});

export default app;
