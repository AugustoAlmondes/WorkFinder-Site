document.getElementById('confirmar_user').onclick = async function () {
    const nome = document.getElementById('nome_completo_user').value;
    const data_nascimento = document.getElementById('data_nascimento_user').value;
    const telefone = document.getElementById('telefone_user').value;
    const cep = document.getElementById('cep_user').value;
    const email = document.getElementById('email_user').value;
    const senha = document.getElementById('senha_user').value;

    try {
        const response = await fetch('/api/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, data_nascimento, telefone, cep, email, senha })
        });
        if (response.ok) {
            console.log('Usuário criado com sucesso');
        } else {
            console.error('Erro de criação');
        }
    } catch (err) {
        console.error('Error:', err);
    }
};
