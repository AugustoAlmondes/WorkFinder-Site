const insertData = require('../SQL/insert')

window.onload = function()
{
    var confirmarUser = document.getElementById('confirmar_user');
    confirmarUser.onclick = function()
    {
        console.log("entrou agora");
        
    }

}

function criarUser() {
    console.log("Inserir usuario");
    insertData(
        document.getElementById("nome_completo_user").value,
        document.getElementById("data_nascimento_user").value,
        document.getElementById("telefone_user").value,
        document.getElementById("cep_user").value,
        document.getElementById("email_user").value,
        document.getElementById("senha_user").value
    ).then(() => {
        console.log('Inserção concluída.');
    }).catch((err) => {
        console.error('Erro na inserção:', err);
    });
}

// criarUser()