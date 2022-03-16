import { Request, Response } from "express";
import loggerConfig from '../common/logger'

import { CommonResponse } from "../responses/response";
import { getClientByJwtToken } from "../common/getClientByJwtToken";

const logger = loggerConfig({ label: 'reflink-controller', path: 'reflink' })

export const generateReferralLink = async (req: Request, res: Response) => {
  try {
    const { token } = req.body

    if (!token) return res.status(200).json({ status: -1 })

    const user = await getClientByJwtToken(token)

    if (!user) return res.status(200).json({ status: -1 })

  } catch (e) {
    logger.info(`Error while generating referral link => ${e}`)
    return CommonResponse.common.somethingWentWrong({ res })
  }
}
