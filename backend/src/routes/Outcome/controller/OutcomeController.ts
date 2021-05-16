import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getConnectionManager } from 'typeorm';

import { Outcome } from '../../../entities/Outcome';

class OutcomeController {
    public async index(req: Request, res: Response) {
        const outcomeRepository = getConnectionManager()
            .get(process.env.NODE_ENV)
            .getRepository(Outcome);

        const outcomeTransactions = await outcomeRepository.find();

        return res.json(outcomeTransactions);
    }

    public async create(req: Request, res: Response) {
        const { name, value } = req.body;
        const outcomeRepository = getConnectionManager()
            .get(process.env.NODE_ENV)
            .getRepository(Outcome);

        const newTransaction = new Outcome();

        try {
            Object.assign(newTransaction, {
                id: uuidv4(),
                name,
                value,
            });

            const response = await outcomeRepository.save(newTransaction);

            return res.json(response);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}

export default new OutcomeController();
