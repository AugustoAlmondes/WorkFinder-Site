import express from 'express';
import { app } from 'express';
import { cors } from 'cors';
import {nodemailer} from 'nodemailer';
import {dotenv, process} from 'dotenv';

// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const app = express();
dotenv.config();

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { formData, userEmail, emailEnterprise } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou outro serviço como SMTP
        auth: {
            user:emailUser,
            pass: emailPass
        }
    });

    const mailOptions = {
        from: userEmail,
        to: emailEnterprise,
        subject: 'Candidatura à Vaga',
        text: `Detalhes da candidatura:\n\n${JSON.stringify(formData, null, 2)}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email enviado com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao enviar email');
    }
});

app.listen(8800, () => console.log('Servidor rodando na porta 8800 '));
