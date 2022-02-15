import { Request, Response } from 'express';
const accountService = require('../services/accountService')
const jwtService = require('../services/jwtService')
const cryptoService = require('../services/cryptoService')

export const register = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body
    const user = await accountService.getUserByEmail(email)

    password = cryptoService.encrypt(password, process.env.CRYPTO_KEY)
    if (!user) {
      await accountService.createUser({
        email, password
      })
    }
  } catch (e) {
    console.log(e)
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    //
  } catch (e) {
    console.log(e)
  }
};
