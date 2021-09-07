import {
    createConnection,
    getConnectionOptions,
    ConnectionOptions,
    Connection,
} from 'typeorm';

class Database {
    config: ConnectionOptions;
    connection: Connection;
    environment: string;

    constructor(env?: string) {
        this.environment = env || process.env.NODE_ENV || 'dev';
    }

    async connectDB() {
        this.config = await getConnectionOptions(this.environment);
        this.connection = await createConnection(this.config);
        return this.connection;
    }

    async disconnectDB() {
        this.connection.close();
    }
}

export default Database;
