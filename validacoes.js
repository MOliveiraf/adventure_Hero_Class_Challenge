function validarNome(nome) {
    const regexNomeValido = /^[a-zA-Z][a-zA-Z0-9]*$/;
    return regexNomeValido.test(nome);
}

// Valida se a idade é um número inteiro positivo
function validarIdade(idadeStr) {
    const idade = parseInt(idadeStr);
    return !isNaN(idade) && idade > 0 && idadeStr === idade.toString();
}

module.exports = { validarNome, validarIdade };
