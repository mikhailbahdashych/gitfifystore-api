const jwtService = require('./../services/jwtService')

module.exports = async(req, res, next) => {
  if (req.headers.authorization) {
    const user = await jwtService.getUser(req.headers.authorization.split(' ')[1])
    if (user) {
      next();
    } else {
      res.status(401).json({
        error: 'Unauthorized'
      })
    }
  } else {
    res.status(401).json({
      error: 'Unauthorized'
    })
  }
}
