import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    try {
        res.json({
            test: 'asad'
        })
    } catch {
        console.log('error')
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        console.log('works register')
    } catch {
        console.log('error')
    }
};
