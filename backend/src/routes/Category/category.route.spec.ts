import request from 'supertest';
import { Express } from 'express';
import {
    buildTestAppInstance,
    closeAppInstance,
    clearDb,
    undoMigrations,
} from '../../config/testConfigBuilder';

let server: Express;
describe('Category routes testing', () => {
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
    it('should create an category', async () => {
        const response = await request(server)
            .post('/category')
            .send({ name: 'penga' });

        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('penga');
    });

    it('should list all categories', async () => {
        const { body: sundaCategory } = await request(server)
            .post('/category')
            .send({ name: 'sunda' });
        const { body: bobraCategory } = await request(server)
            .post('/category')
            .send({ name: 'bobra' });

        const expectedCategories = [sundaCategory, bobraCategory];

        const response = await request(server).get('/category');

        expect(response.body.length).toBe(2);
        expect(response.body).toEqual(
            expect.arrayContaining(expectedCategories)
        );
    });
});
