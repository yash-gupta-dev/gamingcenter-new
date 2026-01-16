import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: "info@dochase.com",
        pass: "r154itjDuuWr",
    },
});

export const sendMail = (to: string, subject: string, text?: string, html?: string) => {
    transporter.sendMail({
        from: 'info@dochase.com',
        to,
        subject,
        text,
        html,
    }).catch(console.log);
}