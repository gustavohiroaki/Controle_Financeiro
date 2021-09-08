import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Outcome } from '../../../repositories/entities/Outcome';
import { OutcomeRepository } from '../../../repositories';

class OutcomeController {
    public async index(req: Request, res: Response) {
        const outcomeRepository = new OutcomeRepository();
        const outcomeTransactions = await outcomeRepository.findAll();
        return res.json(outcomeTransactions);
    }

    public async create(req: Request, res: Response) {
        const { name, value } = req.body;
        const outcomeRepository = new OutcomeRepository();
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
