import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "francodegaetani@gmail.com", // tu cuenta de Gmail
        pass: "nfck qzfw ypbv glkj"
    }
});

function sendMail({ nombre, email, mensaje }) {
    const mailOptions = {
        from: `"${nombre}" <${email}>`,
        to: "francodegaetani@gmail.com",
        subject: `Nuevo mensaje de tu portfolio`,
        html: `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${mensaje}</p>
        `
    };
    return transporter.sendMail(mailOptions);
}

export default sendMail;