import request from 'supertest';
import { Connection, getConnectionManager, Migration } from 'typeorm';
import Database from '../../database';
import app from '../../app';
import { IncomeRepository, OutcomeRepository } from '../../repositories';
import { Income } from '../../repositories/entities/Income';
import { Outcome } from '../../repositories/entities/Outcome';

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
let connection: Connection;
let migrations: Migration[];

describe('Balance Routes Testing', () => {
    const db = new Database();

    beforeAll(async () => {
        connection = await db.connectDB();

        migrations = await connection.runMigrations(); // Run migrations and return list of all migrations
    });

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

    afterAll(async () => {
        for (const migration of migrations) {
            await connection.undoLastMigration();
        }

        await db.disconnectDB();
    });
});
