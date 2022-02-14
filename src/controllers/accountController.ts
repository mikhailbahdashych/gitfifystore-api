import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    try {
        res.json({
            test: 'login',
            ans: req.body
        })
    } catch {
        console.log('error')
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        res.json({
            test: 'register'
        })
    } catch {
        console.log('error')
    }
};
