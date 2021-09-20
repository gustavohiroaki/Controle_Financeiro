import { Request, Response } from 'express';

class TestController {
    create = async (req: Request, res: Response) => {
        return res.json(req.body);
    };
}

export default new TestController();
