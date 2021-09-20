import serverConfig from './config/server.config';

import { createConnection } from 'typeorm';

createConnection().then(async () => {
    const app = (await import('./app')).default;
    app.listen(serverConfig.port, () => {
        console.log(`Server is listening on port ${serverConfig.port}`);
    });
});
