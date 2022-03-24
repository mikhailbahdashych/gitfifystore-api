import { Request, Response } from 'express';
import loggerConfig from '../common/logger'

import * as walletService from '../services/walletService';
import { CommonResponse } from "../responses/response";

const logger = loggerConfig({ label: 'wallet-controller', path: 'wallet' })

export const checkWallets = async (req: Request, res: Response) => {
  try {
    const { token } = req.body
  } catch (e) {
    logger.error(`Error while checking wallets => ${e}`)
    return CommonResponse.common.somethingWentWrong({ res })
  }
}
