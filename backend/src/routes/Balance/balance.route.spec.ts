import request from 'supertest';
import { Express } from 'express';
import {
    buildTestAppInstance,
    closeAppInstance,
    clearDb,
    undoMigrations,
} from '../../config/testConfigBuilder';

let server: Express;

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
    beforeAll(async () => {
        server = await buildTestAppInstance();
    });

    afterEach(async () => {
        await clearDb();
    });

    afterAll(async () => {
        await undoMigrations();
        await closeAppInstance();
    });
    it('should show balance 0', async () => {
        let incomeTotal: number = 0;
        let outcomeTotal: number = 0;
        let incomePromises: any = [];
        let outcomePromises: any = [];

        transactions.map((transaction) => {
            incomePromises.push(
                request(server).post('/income').send(transaction)
            );
        });

        transactions.map((transaction) => {
            outcomePromises.push(
                request(server).post('/outcome').send(transaction)
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

        const response = await request(server).get('/balance');

        expect(response.body).toEqual(
            expect.objectContaining({
                incomeTotal,
                outcomeTotal,
                remaining: 0,
            })
        );
    });
});
