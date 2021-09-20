import request from 'supertest';
import { Express } from 'express';
import {
    buildTestAppInstance,
    closeAppInstance,
    clearDb,
    undoMigrations,
} from '../../config/testConfigBuilder';

let server: Express;

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
    it('should create a new outcome transaction and return the transaction data', async () => {
        const response = await request(server)
            .post('/outcome')
            .send(transactions[0]);

        expect(response.body).toMatchObject(transactions[0]);
    });

    it('should list some outcome transactions', async () => {
        await request(server).post('/outcome').send(transactions[0]);
        await request(server).post('/outcome').send(transactions[1]);

        const response = await request(server).get('/outcome');

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining(transactions[0]),
                expect.objectContaining(transactions[1]),
            ])
        );
    });
});
