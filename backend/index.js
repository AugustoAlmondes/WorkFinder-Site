import express from "express";
import userRoutes from "./routes/users.js"
import empresaRoutes from "./routes/empresa.js"
import cors from "cors";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();
const app = express();
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

console.log("EMAIL_USER:", emailUser);
console.log("EMAIL_PASS:", emailPass);

app.use(express.json());
app.use(cors());

app.use("/", userRoutes); 
app.use("/users", userRoutes);

app.use("/", empresaRoutes);
app.use("/empresa", empresaRoutes);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: emailUser,
        pass: emailPass,
    },
});

// Rota para envio de e-mails
app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;

    // Verificar se os campos obrigatórios estão presentes
    if (!to || !subject || !text) {
        return res.status(400).json({ message: "Preencha todos os campos necessários!" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // remetente (o e-mail configurado)
        to, // destinatário
        subject, // assunto
        text, // corpo do e-mail
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.status(500).json({ message: "Erro ao enviar e-mail. Tente novamente mais tarde." });
    }
});

// app.use('/send', sendEmail);

app.listen(8800);