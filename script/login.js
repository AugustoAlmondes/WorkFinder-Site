document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const result = await response.json();
            alert('Login bem-sucedido: ' + result.message);
            // Redirecionar para outra página ou mostrar mensagem de sucesso
        } else {
            const error = await response.json();
            alert('Erro ao fazer login: ' + error.message);
        }
    } catch (err) {
        console.error('Erro ao fazer login:', err);
        alert('Erro ao fazer login.');
    }
});
