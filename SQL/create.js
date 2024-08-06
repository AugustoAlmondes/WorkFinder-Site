const db = require('./_database');

async function createTables() {
    await db.connect();

    await db.query(`
        CREATE TABLE usuario (
        id SERIAL PRIMARY KEY,
        nome_completo VARCHAR(255) NOT NULL,
        data_nascimento DATE NOT NULL,
        telefone VARCHAR(15) NOT NULL,
        cep VARCHAR(10) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL
    );`);

    // Uncomment and correct the table creation for usuarios if needed
    await db.query(`
    CREATE TABLE usuarios (
    usuario_id INT REFERENCES usuario(id),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'ativo'
    );`);

    await db.end();

    console.log("Tabelas criadas");
};

createTables();
