const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports.sendAdminEmail = async (to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = { from: process.env.EMAIL_FROM, to, subject, html };
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (err) {
        console.error("Failed to send email:", err.message);
    }
}

module.exports.sendCustomerEmail = async (to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = { from: process.env.EMAIL_FROM, to, subject, html };
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (err) {
        console.error("Failed to send email:", err.message);
    }
}

module.exports.getEmailTemplate = async (template, data) => {
    const filePath = path.join(__dirname, 'templates', `${template}.html`);
    const html = await fs.readFile(filePath, 'utf-8');
    return html.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || '');
}