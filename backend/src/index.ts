import serverConfig from './config/server.config';
import app from './app';
import Database from './database';

const db = new Database();

db.connectDB().then(() => {
    app.listen(serverConfig.port, () => {
        console.log(`Server is listening on port ${serverConfig.port}`);
    });
});
