import { createConnection } from 'typeorm';

function startDb() {
    return createConnection();
}

export { startDb };
