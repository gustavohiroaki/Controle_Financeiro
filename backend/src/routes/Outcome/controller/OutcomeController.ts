import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Outcome } from '../../../repositories/entities/Outcome';
import { OutcomeRepository } from '../../../repositories';

class OutcomeController {
    private outcomeRepository: OutcomeRepository;

    constructor() {
        this.outcomeRepository = new OutcomeRepository();
    }

    index = async (req: Request, res: Response) => {
        const outcomeTransactions = await this.outcomeRepository.findAll();
        return res.json(outcomeTransactions);
    };

    create = async (req: Request, res: Response) => {
        const { name, value } = req.body;

        const newTransaction = new Outcome();

        try {
            Object.assign(newTransaction, {
                id: uuidv4(),
                name,
                value,
            });

            const response = await this.outcomeRepository.save(newTransaction);

            return res.json(response);
        } catch (err) {
            return res.status(400).json(err);
        }
    };
}

export default new OutcomeController();
