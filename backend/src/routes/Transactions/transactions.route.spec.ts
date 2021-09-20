import request from 'supertest';
import { Express } from 'express';
import {
    buildTestAppInstance,
    closeAppInstance,
    clearDb,
    undoMigrations,
} from '../../config/testConfigBuilder';

let server: Express;
describe('Transaction Routes Testing', () => {
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
    it('should return 200 on get root route', async () => {
        const response = await request(server).get('/transactions');
        expect(response.status).toBe(200);
    });

    it.each(['income', 'outcome'])(
        `should return all %s transactions`,
        async (entity) => {
            const foo = {
                name: 'foo',
                value: 123,
            };

            const bar = {
                name: 'bar',
                value: 123,
            };

            await request(server).post(`/${entity}`).send(foo);
            await request(server).post(`/${entity}`).send(bar);

            const response = await request(server).get('/transactions');
            expect(response.status).toBe(200);
            expect(response.body[entity]).toEqual(
                expect.arrayContaining([
                    expect.objectContaining(foo),
                    expect.objectContaining(bar),
                ])
            );
        }
    );
});
