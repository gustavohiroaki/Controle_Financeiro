import { createConnection, getConnection, Migration } from 'typeorm';

async function buildTestAppInstance() {
    const connection = await createConnection({
        name: 'default',
        type: 'sqlite',
        database: './src/database/app.test.sql',
        synchronize: false,
        logging: false,
        entities: ['./src/repositories/entities/*.ts'],
        migrations: ['./src/database/migrations/*.ts'],
        cli: {
            migrationsDir: './src/database/migrations',
            entitiesDir: './src/repositories/entities',
        },
    });
    await connection.runMigrations();

    const app = (await import('../app')).default;

    return app;
}

async function closeAppInstance() {
    await getConnection().close();
}

async function clearDb() {
    const connection = getConnection();

    const entities = connection.entityMetadatas;

    for (const entity of entities) {
        const repository = connection.getRepository(entity.name);
        await repository.query(`DELETE FROM ${entity.tableName}`);
    }
}

async function undoMigrations() {
    const connection = getConnection();

    const migrations = connection.migrations;

    for (const migration of migrations) {
        await connection.undoLastMigration();
    }
}

export { buildTestAppInstance, closeAppInstance, clearDb, undoMigrations };
