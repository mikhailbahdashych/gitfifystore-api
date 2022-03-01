import { check } from "express-validator";
import { Request } from "express";

module.exports = async (req: Request) => {
  if (req.body.phone !== null) await check("phone").isMobilePhone(undefined, undefined).run(req);
}
