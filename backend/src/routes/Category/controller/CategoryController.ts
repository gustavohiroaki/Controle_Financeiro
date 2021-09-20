import { Request, Response } from 'express';
import { CategoryRepository } from '../../../repositories';

class CategoryController {
    private repository: CategoryRepository;
    constructor() {
        this.repository = new CategoryRepository();
    }

    index = async (req: Request, res: Response) => {
        const categories = await this.repository.findAll();
        return res.json(categories);
    };

    create = async (req: Request, res: Response) => {
        const { name } = req.body;

        const newCategory = await this.repository.save(name);

        return res.json(newCategory);
    };
}

export default new CategoryController();
