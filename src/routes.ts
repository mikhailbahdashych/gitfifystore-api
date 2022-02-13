const router = require('express').Router();

const accountController = require('./controllers/accountController')

router.post('/login', accountController.login)
router.post('/register', accountController.register)

export default router;
