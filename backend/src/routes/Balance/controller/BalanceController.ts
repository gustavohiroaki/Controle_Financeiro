import { Request, Response } from 'express';

import { IncomeRepository, OutcomeRepository } from '../../../repositories';

class BalanceController {
    private incomeRepository: IncomeRepository;
    private outcomeRepository: OutcomeRepository;

    constructor() {
        this.incomeRepository = new IncomeRepository();
        this.outcomeRepository = new OutcomeRepository();
    }

    index = async (req: Request, res: Response) => {
        const incomeTransactions = await this.incomeRepository.findAll();
        const outcomeTransactions = await this.outcomeRepository.findAll();

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
    };
}

export default new BalanceController();
