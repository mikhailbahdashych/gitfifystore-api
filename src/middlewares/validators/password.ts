import { check } from "express-validator";
import { Request } from "express";

module.exports = async (req: Request) => {
  await check("password").exists().isString().run(req)
}
