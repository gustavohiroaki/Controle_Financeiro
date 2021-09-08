import { Connection, Migration } from 'typeorm';
import Database from './database';

let connection: Connection;
let migrations: Migration[];

const db = new Database();

global.beforeAll(async () => {
    connection = await db.connectDB();
    migrations = await connection.runMigrations(); // Run migrations and return list of all migrations
});

global.afterAll(async () => {
    for (const migration of migrations) {
        await connection.undoLastMigration();
    }

    await db.disconnectDB();
});
