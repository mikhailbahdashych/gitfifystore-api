// @ts-ignore
import jwt from "jsonwebtoken";
import fs from 'fs';
import path from 'path';

import { JwtPayload } from "../interfaces/jwt";

const privateKey = fs.readFileSync(path.resolve(__dirname + "../../../keys/private.pem"));
const publicKey = fs.readFileSync(path.resolve(__dirname + "../../../keys/public.pem"));

export = {
  sign: (payload: JwtPayload) => {
    try {
      return jwt.sign(
        payload,
        {
          key: privateKey,
          passphrase: process.env.JWT_PASSPHRASE
        },
        {
          algorithm: "RS256",
          expiresIn: "30m"
        }
      )
    } catch (e) {
      //
    }
  },
  getUserPromise: (token: string) => {
    try {
      return new Promise(((resolve, reject) => {
        jwt.verify(token, publicKey, (err: any, decoded: any) => {
          if (!err) {
            return resolve(decoded);
          } else {
            return reject(err);
          }
        })
      }))
    } catch (e) {
      //
    }
  },
  getUser: async (token: string) => {
    // @ts-ignore
    return await this.getUserPromise(token)
  }
}
