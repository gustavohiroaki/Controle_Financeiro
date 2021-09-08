import request from 'supertest';
import app from '../../app';
import { IncomeRepository, OutcomeRepository } from '../../repositories';

const transactions = [
    {
        name: 'Transaction 1',
        value: 99.9,
    },
    {
        name: 'Transaction 2',
        value: 199.9,
    },
];

describe('Balance Routes Testing', () => {
    it('should show balance 0', async () => {
        let incomeTotal: number = 0;
        let outcomeTotal: number = 0;
        let incomePromises: any = [];
        let outcomePromises: any = [];

        transactions.map((transaction) => {
            incomePromises.push(request(app).post('/income').send(transaction));
        });

        transactions.map((transaction) => {
            outcomePromises.push(
                request(app).post('/outcome').send(transaction)
            );
        });

        const incomePromisesResponse = await Promise.all(incomePromises);
        const outcomePromisesResponse = await Promise.all(outcomePromises);

        incomePromisesResponse.map((response: any) => {
            incomeTotal = response.body.value + incomeTotal;
        });

        outcomePromisesResponse.map((response: any) => {
            outcomeTotal = response.body.value + outcomeTotal;
        });

        const response = await request(app).get('/balance');

        expect(response.body).toEqual(
            expect.objectContaining({
                incomeTotal,
                outcomeTotal,
                remaining: 0,
            })
        );
    });

    afterEach(async () => {
        const incomeRepository = new IncomeRepository();
        const outcomeRepository = new OutcomeRepository();
        await incomeRepository.clear();
        await outcomeRepository.clear();
    });
});
