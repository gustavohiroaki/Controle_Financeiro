import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Income } from '../../../repositories/entities/Income';
import { IncomeRepository } from '../../../repositories';

class IncomeController {
    private incomeRepository: IncomeRepository;

    constructor() {
        this.incomeRepository = new IncomeRepository();
    }

    index = async (req: Request, res: Response) => {
        const incomeTransactions = await this.incomeRepository.findAll();
        return res.json(incomeTransactions);
    };

    create = async (req: Request, res: Response) => {
        const { name, value } = req.body;
        const newTransaction = new Income();
        try {
            Object.assign(newTransaction, {
                id: uuidv4(),
                name,
                value,
            });

            const response = await this.incomeRepository.save(newTransaction);

            return res.json(response);
        } catch (err) {
            return res.status(400).json(err);
        }
    };
}

export default new IncomeController();
