export function formatCNPJ(cnpj) {
    return cnpj
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}

export function formatCPF(cpf) {
    return cpf
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

export function formatCEP(cep) {
    return cep
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/^(\d{5})(\d{3})$/, '$1-$2');
}

export function formatTelefone(telefone) {
    return telefone
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
}

export function formatInscricaoEstadual(ie) {
    return ie
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, '$1.$2.$3-$4');
}

export function formatInscricaoMunicipal(im) {
    return im
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/^(\d{6})(\d{3})$/, '$1-$2');
}

export function formatSalario(salario) {
    if (!salario) return '0,00';

    let clean = salario.toString().replace(/\D/g, '');

    if (clean.length < 3) {
        clean = clean.padStart(3, '0');
    }

    let centavos = clean.slice(-2);
    let inteiro = clean.slice(0, -2);

    inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${inteiro},${centavos}`;
}
