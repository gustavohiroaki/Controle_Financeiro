import { getRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './entities/Category';

class CategoryRepository {
    private repository: Repository<Category>;

    constructor(env?: string) {
        this.repository = getRepository(Category);
    }

    public async findAll(): Promise<Category[]> {
        const response = await this.repository.find();
        return response;
    }

    public async save(name: string): Promise<Category> {
        const response = await this.repository.save({
            id: uuid(),
            name,
        });
        return response;
    }

    public async clear() {
        await this.repository.clear();
    }

    public test() {
        console.log('Estou funcionando');
    }
}

export default CategoryRepository;
