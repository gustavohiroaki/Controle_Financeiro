import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Income } from '../../../repositories/entities/Income';
import { IncomeRepository } from '../../../repositories';

class IncomeController {
    public async index(req: Request, res: Response) {
        const incomeRepository = new IncomeRepository();
        const incomeTransactions = await incomeRepository.findAll();
        return res.json(incomeTransactions);
    }

    public async create(req: Request, res: Response) {
        const { name, value } = req.body;
        const incomeRepository = new IncomeRepository();
        const newTransaction = new Income();
        try {
            Object.assign(newTransaction, {
                id: uuidv4(),
                name,
                value,
            });

            const response = await incomeRepository.save(newTransaction);

            return res.json(response);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}

export default new IncomeController();
