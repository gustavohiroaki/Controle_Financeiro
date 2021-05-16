import request from 'supertest';
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

describe('Outcome Routes Testing', () => {
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

    it('should create a new outcome transaction and return the transaction data', async () => {
        const response = await request(app)
            .post('/outcome')
            .send(transactions[0]);

        expect(response.body).toMatchObject(transactions[0]);
    });

    it('should list some outcome transactions', async () => {
        await request(app).post('/outcome').send(transactions[1]);

        const response = await request(app).get('/outcome');

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining(transactions[0]),
                expect.objectContaining(transactions[1]),
            ])
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
