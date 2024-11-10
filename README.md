# Adventure Hero Class Challenge

## Descrição

Este projeto é um desafio que envolve a criação de heróis para uma aventura, cada um com tipos e ataques específicos. O programa, desenvolvido em Node.js, permite que o usuário crie heróis com propriedades personalizadas, como `nome`, `idade`, e `tipo` (ex: mago, guerreiro, monge, ninja). Além disso, cada herói possui um ataque característico, que é exibido quando o método `atacar` é chamado. O projeto foi desenvolvido com o intuito de praticar conceitos de classes, validações, interações com o usuário e estrutura de código.

---

## Funcionalidades

- **Criação de Herói**: Permite criar um herói com `nome`, `idade` e `tipo`.
- **Ataques Específicos**: Cada tipo de herói realiza um ataque característico:
  - **Mago**: "usou magia"
  - **Guerreiro**: "usou espada"
  - **Monge**: "usou artes marciais"
  - **Ninja**: "usou shuriken"
- **Validações de Entrada**: Realiza validações para o `nome` e `idade` do herói, garantindo que sejam valores apropriados.
- **Menu Interativo**: Um menu orientado por linha de comando permite que o usuário escolha entre criar um novo herói, realizar um ataque, ou sair do programa.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para o código JavaScript.
- **JavaScript**: Linguagem utilizada para implementação do projeto.
- **readline**: Módulo do Node.js para facilitar a interação por linha de comando com o usuário.

---

## Desenvolvimento e Princípios Utilizados

- Modularidade: O código foi estruturado em arquivos separados para cada funcionalidade, facilitando a manutenção e expansão do projeto.
- Validação de Dados: O nome e a idade do herói são validados para garantir que os valores sejam apropriados antes de criar o herói.
- Controle de Fluxo: O menu e as opções de interação com o usuário garantem um fluxo de uso fácil e intuitivo.

---
## Estrutura do Código
**Arquivos e Funções**

- Heroi.js: Define a classe Heroi, com propriedades nome, idade, tipo e o método atacar, que exibe uma mensagem de ataque personalizada.
- menu.js: Gerencia o menu de interação com o usuário. Inclui funções para exibir o menu, solicitar informações do herói, e processar a escolha do usuário.
- validacoes.js: Contém as funções de validação do nome e idade do herói.
- index.js: Arquivo principal que executa o menu.

---

---

## Exemplo de Uso
Ao iniciar o programa, o menu principal será exibido, com as seguintes opções:
- Criar um novo herói: Solicita o nome, idade e tipo do herói a ser criado.
- Fazer o herói atacar: Exibe a mensagem de ataque personalizada de acordo com o tipo do herói.
- Sair: Encerra o programa.

1. **Exemplo de Saída**:
   ```bash
   Bem-vindo ao programa de criação de heróis!

    ##------------------##

    Escolha uma ação:
    1 - Criar um novo herói
    2 - Fazer o herói atacar
    3 - Sair

    ##------------------##

    Escolha uma opção: 1
    Digite o nome do herói: Arus
    Digite a idade do herói (número inteiro): 30
    Escolha o tipo do herói:
    0 - Mago
    1 - Guerreiro
    2 - Monge
    3 - Ninja
    Digite o número correspondente ao tipo do herói: 1
    Herói Arus criado com sucesso!

    Escolha uma opção: 2
    O guerreiro Arus atacou usando espada.

    Escolha uma opção: 3
    Saindo do programa...

---

## Como Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/MOliveiraf/adventure_Hero_Class_Challenge.git


## Instalação e Execução

1. **Instale as Dependências**: O comando abaixo garante que qualquer futura dependência seja instalada.

   ```bash
   npm install
   
2. **Execute o Programa**: 

   ```bash
   node index.js

------
## Possíveis Melhorias

- Expansão dos Tipos de Heróis: Adicionar mais atributos e categorias de heróis para aumentar a variedade e personalização, tornando a aplicação mais interessante e envolvente.
- Persistência e Armazenamento: Melhorar a persistência de dados com o uso de banco de dados relacional (PostgreSQL), assegurando que os heróis criados sejam armazenados e acessíveis de forma consistente.
- Interface Web: Evoluir de uma API para uma aplicação web completa, adicionando uma interface gráfica intuitiva que permita a interação com os heróis de forma mais amigável e visual. Essa interface poderá incluir filtros e buscas avançadas para facilitar o gerenciamento.


   **Clone a versão mais recente do projeto utilizando o comando abaixo:**
   ```bash
   git clone https://github.com/MOliveiraf/hero-adventure-manager.git
  

---

## Autor
Desenvolvido por Miqueias Fernandes de Oliveira
