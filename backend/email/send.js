import express from 'express'
import {app} from 'express'
import {cors} from 'cors'

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json({message: 'Funcionando!'});
})

app.post('/send', (req, res, next) => {
    res.json(req.body);
})

app.listen(3030, () => console.log('Servidor rodando na porta 3030...'));