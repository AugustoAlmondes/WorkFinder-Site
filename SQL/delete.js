const db = require('./_database');

async function deleteUserById(userId) {
    await db.connect();

    try {
        // Iniciar uma transação
        await db.query('BEGIN');

        // Remover da tabela usuarios
        await db.query('DELETE FROM usuarios WHERE usuario_id = $1', [userId]);

        // Remover da tabela usuario
        await db.query('DELETE FROM usuario WHERE id = $1', [userId]);

        // Confirmar a transação
        await db.query('COMMIT');

        console.log(`Usuário com ID ${userId} removido.`);
    } catch (e) {
        // Reverter a transação em caso de erro
        await db.query('ROLLBACK');
        console.error('Erro ao remover usuario:', e);
    } finally {
        await db.end();
    }
}

// Exemplo de uso
deleteUserById(1);
deleteUserById(3);
deleteUserById(4);