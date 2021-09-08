import request from 'supertest';
import app from '../../app';

describe('Transaction Routes Testing', () => {
    it('should return 200 on get root route', async () => {
        const response = await request(app).get('/transactions');
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

            await request(app).post(`/${entity}`).send(foo);
            await request(app).post(`/${entity}`).send(bar);

            const response = await request(app).get('/transactions');
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
