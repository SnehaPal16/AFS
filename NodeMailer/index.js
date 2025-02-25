const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "sneh996.be22@chitkara.edu.in",
    pass: "dknh fnld ypyk dicd",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'sneh996.be22@chitkara.edu.in', // sender address
    to: "shivansh832.be22@chitkara.edu.in", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);