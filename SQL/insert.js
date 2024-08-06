const db = require('./_database');

async function insertData(nome, data_nascimento, telefone, cep, email, senha) {
    // console.log(nome, data_nascimento, telefone, cep, email, senha);
    await db.connect();
    console.log("Conectou!!");
    try {
        // Iniciar uma transação
        await db.query('BEGIN');

        // Inserir um registro na tabela usuario e recuperar o id
        const insertUserQuery = `
            INSERT INTO usuario (nome_completo, data_nascimento, telefone, cep, email, senha)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id;
        `;
        console.log("vai inserir");
        // const userResult = await db.query(insertUserQuery, ['Augusto Almondes', '2003-03-17', '89988083671', '64606255', 'augusto3@gmail.com', '22223333']);
        const userResult = await db.query(insertUserQuery, [nome, data_nascimento, telefone, cep, email, senha]);
        const usuario_id = userResult.rows[0].id;
        console.log(("inseriu"));
        // Usar a variável usuario_id para inserir na tabela usuarios
        const insertUsuariosQuery = `
            INSERT INTO usuarios (usuario_id)
            VALUES ($1);
        `;
        await db.query(insertUsuariosQuery, [usuario_id]);

        // Confirmar a transação
        await db.query('COMMIT');

        console.log("Usuario adicionado");
    } catch (e) {
        // Reverter a transação em caso de erro
        await db.query('ROLLBACK');
        console.error('Erro ao adicionar usuario:', e);
    }
}

module.exports = insertData;