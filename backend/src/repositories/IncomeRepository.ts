import { Connection, getConnectionManager, Repository } from 'typeorm';
import { Income } from './entities/Income';

class IncomeRepository {
    connection: Connection;
    repository: Repository<Income>;

    constructor(env?: string) {
        const environment = env || process.env.NODE_ENV || 'test';
        this.connection = getConnectionManager().get(environment);
        this.repository = this.connection.getRepository(Income);
    }

    public async findAll(): Promise<Income[]> {
        const response = await this.repository.find();
        return response;
    }

    public async save(income: Income) {
        const response = await this.repository.save(income);
        return response;
    }

    public async clear() {
        await this.repository.clear();
    }
}

export default IncomeRepository;
