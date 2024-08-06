const db = require('./_database')

async function dropTables()
{
    await db.connect()
    await db.query('DROP TABLE usuario CASCADE') //ADICIONAR A TABALE A SER DROPTADA
    await db.query('DROP TABLE usuarios CASCADE') //ADICIONAR A TABALE A SER DROPTADA E SUAS DEPENDENCIAS
    await db.end()

    console.log("Tabelas removidas")
}

dropTables()