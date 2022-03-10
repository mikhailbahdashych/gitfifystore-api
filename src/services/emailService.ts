const nodeoutlook = require('nodejs-nodemailer-outlook')
const dotenv = require('dotenv')
dotenv.config()

import loggerConfig from '../common/logger'
const logger = loggerConfig({ label: 'email-controller', path: 'email' })

export const sendRegistrationEmail = async (to: string, hash: string) => {
  try {
    await nodeoutlook.sendEmail({
      auth: {
        user: process.env.EMAIL_NO_REPLY,
        pass: process.env.EMAIL_NO_REPLY_PASSWORD
      },
      from: process.env.EMAIL_NO_REPLY,
      to: to,
      subject: 'Welcome to B4!',
      html: `<h3>Welcome to B4!</h3><br>
            <p>Click here to confirm registration:</p><br>
            <p>${process.env.MAIN_URL}/confirm-registration/${hash}</p>`,
    })
    logger.info(`Registration email was successfully sent to: ${to}`)
  } catch (e) {
    logger.info(`Inner error while sending email to: ${to}`)
  }
}
