import request from 'supertest';
import { Connection, Migration, getConnectionManager } from 'typeorm';
import Database from '../../database';
import app from '../../app';
import { Outcome } from '../../entities/Outcome';

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
let connection: Connection;
let migrations: Migration[];

describe('Outcome Routes Testing', () => {
    const db = new Database();

    beforeAll(async () => {
        connection = await db.connectDB();

        migrations = await connection.runMigrations(); // Run migrations and return list of all migrations
    });

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
        await getConnectionManager()
            .get(process.env.NODE_ENV)
            .getRepository(Outcome)
            .clear();
    });

    afterAll(async () => {
        for (const migration of migrations) {
            await connection.undoLastMigration();
        }

        await db.disconnectDB();
    });
});
