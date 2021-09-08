import { Connection, getConnectionManager, Repository } from 'typeorm';
import { Outcome } from './entities/Outcome';

class OutcomeRepository {
    connection: Connection;
    repository: Repository<Outcome>;

    constructor(env?: string) {
        const environment = env || process.env.NODE_ENV || 'test';
        this.connection = getConnectionManager().get(environment);
        this.repository = this.connection.getRepository(Outcome);
    }

    public async findAll(): Promise<Outcome[]> {
        const response = await this.repository.find();
        return response;
    }

    public async save(outcome: Outcome) {
        const response = await this.repository.save(outcome);
        return response;
    }

    public async clear() {
        await this.repository.clear();
    }
}

export default OutcomeRepository;
