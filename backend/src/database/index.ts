import {
    createConnection,
    getConnectionOptions,
    ConnectionOptions,
} from 'typeorm';

async function connectDB() {
    const config = await getConnectionOptions(process.env.NODE_ENV);

    await createConnection(config);
}

export default connectDB;
