const app = {
  async adicionaValores() {
    const nome = await pergunta("Qual é o seu nome? ");
    console.log(`Prazer, ${nome}!`);

    const idade = await pergunta("Qual sua idade? ");
    console.log(`Você tem ${idade} anos.`);

    const resposta = await pergunta("Gostaria de adicionar esse nome e essa idade na tabela? (sim ou não) ");

    console.log("Resposta:", resposta);

    if (resposta.toLowerCase().trim() === "sim") {
      console.log("Adicionando na tabela...");
      conexao.query(`INSERT INTO alunos (nome, idade) VALUES ("${nome}", ${idade})`, (erro, resultado) => {
        if (erro) {
          console.log("Erro ao adicionar aluno:", erro.message);
          return;
        }
      });
      await app.mostrarTabela();
    } else {
      console.log("Nada será adicionado.");
    }

    rl.close();
  },

  async mostrarTabela() {
    return new Promise((resolve) => {
      conexao.query("SELECT * FROM alunos;", (erro, resultado) => {
        if (erro) {
          console.log("erro");
          return resolve();
        }

        console.log(resultado);
        console.log("Deu certo");
        resolve();
      });
    });
  },

  async deletarAlgo(id) { // tem q ser promise 
    return new Promise((resolve) => {
      conexao.query("DELETE FROM alunos WHERE id=3", (erro, resultado) => {
        if (erro) {
          console.log(erro.message);
          return resolve();
        }

        console.log("Deletado com sucesso");
        resolve();
      });
    });
  }
};

module.exports = app;
// pra que esse module? no node é preciso colocar esse module pq isso indica que vamos utilizar depois
// ent funciona tipo, node manda esse app por inteiro com tudo 

// dps puxa com const app = require('./app')


