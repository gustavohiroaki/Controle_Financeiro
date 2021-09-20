import { Request, Response } from 'express';

import { IncomeRepository, OutcomeRepository } from '../../../repositories';

class TransactionController {
    private incomeRepository: IncomeRepository;
    private outcomeRepository: OutcomeRepository;

    constructor() {
        this.incomeRepository = new IncomeRepository();
        this.outcomeRepository = new OutcomeRepository();
    }

    index = async (req: Request, res: Response) => {
        const income = await this.incomeRepository.findAll();
        const outcome = await this.outcomeRepository.findAll();

        return res.json({
            income,
            outcome,
        });
    };
}

export default new TransactionController();
