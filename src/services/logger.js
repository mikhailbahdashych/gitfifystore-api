const pino = require('pino')

module.exports = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
      ignore: "pid,hostname",
      destination: './logs/logs.txt'
    }
  }
})
