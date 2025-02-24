const nodemailer = require("nodemailer");
module.exports.sendMail = async (email, subject, Link) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "gmail",
    auth: {
      user: "sneh996.be22@chitkara.edu.in",
      pass: "jcni hguv bbbb chtv",
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: '"Shivansh Sharma 👻" <shivansh832.be22@chitkara.edu.in>',
      to: email,
      subject: subject,
      text: "Hey User! Click the link below to verify your account",
      html: `<a href = ${Link}>Link</a>`,
    });

    console.log("Message sent: %s", info.messageId);
  }
  main().catch(console.error)
};