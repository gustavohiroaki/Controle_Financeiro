import request from 'supertest';
import app from '../../app';
import { IncomeRepository } from '../../repositories';

let transactions = [
    {
        name: 'Transaction 1',
        value: 99.9,
    },
    {
        name: 'Transaction 2',
        value: 199.9,
    },
];

describe('Outcome Routes Testing', () => {
    it('should create a new outcome transaction and return the transaction data', async () => {
        const response = await request(app)
            .post('/outcome')
            .send(transactions[0]);

        expect(response.body).toMatchObject(transactions[0]);
    });

    it('should list some outcome transactions', async () => {
        await request(app).post('/outcome').send(transactions[0]);
        await request(app).post('/outcome').send(transactions[1]);

        const response = await request(app).get('/outcome');

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining(transactions[0]),
                expect.objectContaining(transactions[1]),
            ])
        );
    });

    afterEach(async () => {
        const incomeRepository = new IncomeRepository();
        await incomeRepository.clear();
    });
});
