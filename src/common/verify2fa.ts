import { Response } from 'express';
import { verify2fa } from "../interfaces/interfaces"
import { getClientByJwtToken } from "./getClientByJwtToken";
const twoFactorService = require('node-2fa');

export const verifyTwoFa = async (data: verify2fa) => {
  const client = await getClientByJwtToken(data.token)
  if (!client) return false

  const result2Fa = twoFactorService.verifyToken(client.twofa, data.twofa)

  if (!result2Fa) return false
  if (result2Fa.delta !== 0) return false

  return client
}
