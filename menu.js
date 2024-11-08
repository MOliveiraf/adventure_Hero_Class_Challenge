const readline = require("readline");
const Heroi = require("./Heroi");
const { validarNome, validarIdade } = require("./validacoes");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function exibirMenu() {
    console.log(
        "\n##------------------##\n" +
        "Escolha uma ação:\n" +
        "1 - Criar um novo herói\n" +
        "2 - Fazer o herói atacar\n" +
        "3 - Sair\n" +
        "##------------------##\n"
    );
}

function pedirIdade(nome, callback) {
    rl.question("Digite a idade do herói (número inteiro): ", (idadeStr) => {
        if (validarIdade(idadeStr)) {
            const idade = parseInt(idadeStr);
            pedirTipo(nome, idade, callback);
        } else {
            console.log("Idade inválida! Digite um número inteiro positivo.");
            pedirIdade(nome, callback);
        }
    });
}

function pedirTipo(nome, idade, callback) {
    console.log("Escolha o tipo do herói:");
    console.log("0 - Mago\n1 - Guerreiro\n2 - Monge\n3 - Ninja");

    rl.question("Digite o número correspondente ao tipo do herói: ", (tipoStr) => {
        const tipos = ["mago", "guerreiro", "monge", "ninja"];
        const tipo = tipos[parseInt(tipoStr)];

        if (tipo) {
            const heroi = new Heroi(nome, idade, tipo);
            console.log(`Herói ${heroi.nome} criado com sucesso!\n`);
            callback(heroi);
        } else {
            console.log("Tipo inválido! Tente novamente.");
            pedirTipo(nome, idade, callback);
        }
    });
}

function criarHeroi(callback) {
    rl.question("Digite o nome do herói: ", (nome) => {
        if (validarNome(nome)) {
            pedirIdade(nome, callback);
        } else {
            console.log("Nome inválido! Deve começar com uma letra e pode conter letras e números.");
            criarHeroi(callback);
        }
    });
}

function processarMenu(heroi = null) {
    exibirMenu();
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                criarHeroi((novoHeroi) => processarMenu(novoHeroi));
                break;
            case "2":
                if (heroi) {
                    heroi.atacar();
                } else {
                    console.log("Você precisa criar um herói primeiro.");
                }
                processarMenu(heroi);
                break;
            case "3":
                console.log("Saindo do programa...");
                rl.close();
                break;
            default:
                console.log("Opção inválida, tente novamente.");
                processarMenu(heroi);
        }
    });
}

module.exports = { processarMenu };
