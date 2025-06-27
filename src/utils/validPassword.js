export function validPassword(password) {
    // Verifica se a senha tem pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

    if (!regex.test(password)) {
        return false; // Senha inválida
    }
    return true; // Senha válida
}