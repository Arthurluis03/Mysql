const { response } = require("express");
const mysql = require("mysql2");


function mostrarDados() {
  conexao.query("SELECT * FROM alunos;", (erro, resultado) => {
    if (erro) {
      console.log("erro");
      return;
    }
    console.log(resultado);
    console.log("Deu certo");
  });
}
const app = {


//   async mostrarTabela() {
//     conexao.query("SELECT * FROM alunos;", (erro, resultado) => {
//       if (erro) {
//         console.log("erro");
//         return;
//       }
//       console.log(resultado);
//       console.log("Deu certo");
//     });
//   },

//   //colocar id no parametro e fé
//   async deletarAlgo() {
//     conexao.query("DELETE FROM alunos WHERE id=3", (erro, resultado) => {
//       if (erro) {
//         console.log(erro.message);
//         return;
//       }
//       console.log(resultado);
//     });
//   },
// };
}
const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arthur.alml03",
  database: "escola",
});

// const app = {
//   async mostrarTabela(resultado) {
// const [resultado] = await conexao.query("SQL")
// tentar adicionar com POST
//     conexao.query("SELECT * FROM alunos;", (erro, resultado) => {
//       if (erro) {
//         console.log("erro");
//         return;
//       }
//       console.log(resultado)
//     });

//   },
//   async editar(){
//     // PUT tentar editar aluno

//   }
// };
conexao.connect((erro, resultado) => {
  if (erro) {
    console.log("erro detectado ");
  }
  console.log("Conexão efetuada com sucesso");
  app.mostrarTabela()

  app.mostrarTabela()
  conexao.query(
    'INSERT alunos (nome, idade) VALUES ("Eduardo", 27)',
    (erro, resultado) => {
      if (erro) {
        console.log("erro");
        return;
      }
      console.log("Aluno adicionado com sucesso ");
      app.mostrarTabela();
    },
  );
  // conexao.query("SELECT * FROM alunos;", (erro, resultado) => {
  //   if (erro) {
  //     console.log("erro");
  //     return;
  //   }
  //   console.log(resultado);
  // });
});

// conexao.query('SELECT * FROM alunos (nome, idade) VALUES (arthur, 19)')

// readline
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Qual é o seu nome? ", (nome) => {
//   console.log(`Prazer, ${nome}!`);

//   rl.question("Qual sua idade? ", (idade) => {
//     console.log(`Você tem ${idade} anos.`);
//     rl.close();
//   });
//   rl.question('Gostaria de adicionar algo na tabela?:  (Sim ou não) ', (resposta))
//   console.log(resposta)
// });
