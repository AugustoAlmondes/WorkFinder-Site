// const { resourceLimits } = require('worker_threads')
const db = require('./_database')

async function userLogin() {
    await db.connect()
    var result

    result = await db.query(`
        SELECT *
        FROM usuario
        WHERE nome_completo = 'Antonio Nunes' AND senha = '12345678'; `)

    console.log(result.rows.length)
    return result.rows.length;
}

userLogin();
module.exports = userLogin;