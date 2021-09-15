import serverConfig from './config/server.config';
import app from './app';
import { startDb } from './database';

startDb();

app.listen(serverConfig.port, () => {
    console.log(`Server is listening on port ${serverConfig.port}`);
});
