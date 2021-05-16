import supertest from 'supertest';
import {
    Connection,
    createConnection,
    getConnection,
    Migration,
} from 'typeorm';
import app from '../../app';

interface TransactionType {
    name: string;
    value: number;
}

let transactions: TransactionType[];
let connection: Connection;
let migrations: Migration[];

describe('Balance Routes Testing', () => {
    beforeAll(async () => {
        transactions = [
            {
                name: 'Transaction 1',
                value: 99.9,
            },
            {
                name: 'Transaction 2',
                value: 199.9,
            },
        ];

        connection = await createConnection('test');

        await connection.dropDatabase();

        migrations = await connection.runMigrations(); // Run migrations and return list of all migrations
    });

    it('should show balance 0', async () => {
        let incomeTotal: number = 0;
        let outcomeTotal: number = 0;
        let incomePromises: any = [];
        let outcomePromises: any = [];

        transactions.map((transaction) => {
            incomePromises.push(
                supertest(app).post('/income').send(transaction)
            );
        });

        transactions.map((transaction) => {
            outcomePromises.push(
                supertest(app).post('/outcome').send(transaction)
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

        const response = await supertest(app).get('/balance');

        expect(response.body).toEqual(
            expect.objectContaining({
                incomeTotal,
                outcomeTotal,
                remaining: 0,
            })
        );
    });

    afterAll(async () => {
        const mainConnection = getConnection();

        for (const migration of migrations) {
            await connection.undoLastMigration();
        }

        await connection.close();
        await mainConnection.close();
    });
});
