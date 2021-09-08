import { Request, Response } from 'express';

import { IncomeRepository, OutcomeRepository } from '../../../repositories';

class BalanceController {
    public async index(req: Request, res: Response) {
        const incomeRepository = new IncomeRepository();
        const outcomeRepository = new OutcomeRepository();

        const incomeTransactions = await incomeRepository.findAll();
        const outcomeTransactions = await outcomeRepository.findAll();

        let incomeTotal: number = 0;
        let outcomeTotal: number = 0;

        incomeTransactions.map((transaction) => {
            incomeTotal = Number(transaction.value) + Number(incomeTotal);
        });

        outcomeTransactions.map((transaction) => {
            outcomeTotal = Number(transaction.value) + Number(outcomeTotal);
        });

        const remaining = incomeTotal - outcomeTotal;

        res.json({ incomeTotal, outcomeTotal, remaining });
    }
}

export default new BalanceController();
