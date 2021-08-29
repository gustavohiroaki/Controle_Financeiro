import { Request, Response } from 'express';

class TestController {
    public async create(req: Request, res: Response) {
        return res.json(req.body);
    }
}

export default new TestController();
