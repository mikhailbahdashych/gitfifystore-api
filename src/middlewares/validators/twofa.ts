import { check } from "express-validator";
import { Request } from "express";

module.exports = async (req: Request) => {
  if (req.body.twofa) await check("twofa").isNumeric().isLength({ min: 6, max: 6 }).run(req);
}
