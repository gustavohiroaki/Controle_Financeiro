import { Connection, getRepository, Repository } from 'typeorm';
import { Income } from './entities/Income';

class IncomeRepository {
    connection: Connection;
    repository: Repository<Income>;

    constructor(env?: string) {
        this.repository = getRepository(Income);
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
