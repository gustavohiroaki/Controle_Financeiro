import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getConnectionManager } from 'typeorm';

import { Income } from '../../../entities/Income';
import { Outcome } from '../../../entities/Outcome';

class BalanceController {
    public async index(req: Request, res: Response) {
        const incomeRepository = getConnectionManager()
            .get(process.env.NODE_ENV)
            .getRepository(Income);

        const outcomeRepository = getConnectionManager()
            .get(process.env.NODE_ENV)
            .getRepository(Outcome);

        const incomeTransactions = await incomeRepository.find();
        const outcomeTransactions = await outcomeRepository.find();

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
