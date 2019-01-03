// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMail({ to, from, subject, text, html }) {
  return new Promise((resolve, reject) => {
    const msg = {
      to,
      from,
      subject,
      text,
      html,
    };
    sgMail.send(msg, (err, response) => {
      if (err) reject(err);
      else
        resolve({
          response: response,
          to: to,
        });
    });
  });
}

module.exports = sendMail;
