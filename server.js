const express = require('express');
const path = require('path');
const insertData = require('./SQL/insert');
const userLogin = require('./SQL/select');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
const db = require('./SQL/_database');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/imagens', express.static(path.join(__dirname, 'imagens')));
app.use('/script', express.static(path.join(__dirname, 'script')));
app.use('/SQL', express.static(path.join(__dirname, 'SQL')));

app.post('/api/create-user', async (req, res) => {
    const { nome, data_nascimento, telefone, cep, email, senha } = req.body;
    try {
        await insertData(nome, data_nascimento, telefone, cep, email, hashedPassword);
        res.status(200).send('User created successfully');
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Error creating user');
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Consulta o banco de dados para obter o usuário
        // const result = await db.query('SELECT * FROM usuario WHERE email = $1', [username]);
        // const user = result.rows[0];

        result = await userLogin(username, password);

        // if (user && await bcrypt.compare(password, user.senha)) {
        if (result === 1) {
            res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ message: 'Error logging in' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cadusuarios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadUsuarios.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
