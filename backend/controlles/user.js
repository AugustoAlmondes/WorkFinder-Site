import { db } from "../db.js";
import bcrypt from "bcrypt";


export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const { nomeCompleto, dataNascimento, telefone, cep, email, senha, confirmSenha } = req.body;
    const q = "INSERT INTO usuarios (nome_completo, data_nascimento, telefone, cep, email, senha, confirm_senha) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [nomeCompleto, dataNascimento, telefone, cep, email, senha, confirmSenha];

    db.query(q, values, (err, _) => {
        if (err) {
            console.log(err, _);
            return res.status(500).json({ error: "Erro ao adicionar usuário" });
        }
        return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
    });
};


export const loginUser = (req, res) => {
    const { email, senha, isEnterprise } = req.body;

    let typeUserLogin = 'empresas';
    if (!isEnterprise) { typeUserLogin = 'usuarios'; }

    const q = `SELECT * FROM ${typeUserLogin} WHERE email = ?`;

    db.query(q, [email], (err, data) => {
        if (err) {
            return res.status(500).json({ erro: "Erro no servidor" });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        const user = data[0];
        // const senhaValida = senha === user.senha;
        const senhaValida = bcrypt.compareSync(senha, user.senha);

        console.log(senhaValida);

        if (!senhaValida) {
            return res.status(400).json({ error: "Senha incorreta" });
        }

        return res.status(200).json({ message: "Login Correto" })
    })

}