import 'reflect-metadata';
import express, { Request, Response } from 'express';
import connectDB from './database';

import routes from './routes';

const app = express();

connectDB().then(() => {
    app.use(express.json());
    app.use(routes);
});

export default app;
