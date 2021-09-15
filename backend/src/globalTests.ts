import { Connection, Migration, createConnection } from 'typeorm';

let connection: Connection;
let migrations: Migration[];

global.beforeAll(async () => {
    connection = await createConnection({
        type: 'sqlite',
        database: './src/database/app.test.sql',
        synchronize: false,
        logging: false,
        entities: ['./src/repositories/entities/**/*.ts'],
        migrations: ['./src/database/migrations/*.ts'],
        cli: {
            migrationsDir: './src/database/migrations',
            entitiesDir: './src/repositories/entities',
        },
    });
    migrations = await connection.runMigrations(); // Run migrations and return list of all migrations
});

global.afterAll(async () => {
    for (const migration of migrations) {
        await connection.undoLastMigration();
    }

    await connection.close();
});
