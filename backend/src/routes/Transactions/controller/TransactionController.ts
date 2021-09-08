import { Request, Response } from 'express';

import { IncomeRepository, OutcomeRepository } from '../../../repositories';

class TransactionController {
    public async index(req: Request, res: Response) {
        const incomeRepository = new IncomeRepository();
        const income = await incomeRepository.findAll();

        const outcomeRepository = new OutcomeRepository();
        const outcome = await outcomeRepository.findAll();

        return res.json({
            income,
            outcome,
        });
    }
}

export default new TransactionController();
