const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'benjamin.brkic@gmail.com',
    subject,
    text
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) cb(err, null)
    else cb(null, data)
  })
}

module.exports = sendMail
