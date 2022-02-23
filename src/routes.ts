const router = require('express').Router();

const accountController = require('./controllers/accountController')

import jwt from "./middlewares/jwt";

router.post('/login', accountController.login)
router.post('/register', accountController.register)
router.post('/reset-password', accountController.resetPassword)
router.post('/verification-code', accountController.sendVerificationCode)
router.post('/verify-token', accountController.verifyToken)
router.post('/set-2fa', jwt, accountController.set2fa)

export default router;
