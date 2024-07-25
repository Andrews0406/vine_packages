const nodemailer = require("nodemailer");

//Send a normal mail
async function sendTextMail(to, subject, text) {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "umani@msystechnologies.com",
                pass: "ivgpkpzncvutwkmv"
            }
        })
        let info = await transporter.sendMail({
            from: '"Frontier Market" <kkalimuthu@msystechnologies.com>',
            to: to,
            subject: subject,
            text: text
        })
        transporter.close()
        return info.messageId
    } catch (error) {
        throw error
    }
}

//Send mail with Attachements and template
async function sendMailWithAttachmentAndTemplate(to, subject, text, filename = '', content = '', html = '') {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "umani@msystechnologies.com",
                pass: "ivgpkpzncvutwkmv"
            }
        })
        let mailInfo = {
            from: '"Frontier Market" <kkalimuthu@msystechnologies.com>',
            to: to,
            subject: subject,
            text: text,
            html: html
        }
        if (filename) {
            mailInfo['attachments'] = [
                {
                    filename: filename,
                    content: content
                }
            ]
        }
        let info = await transporter.sendMail(mailInfo)
        transporter.close()
        return info.messageId
    } catch (error) {
        console.log("ERROR")
        throw error
    }
}

module.exports = {
    sendTextMail,
    sendMailWithAttachmentAndTemplate
}