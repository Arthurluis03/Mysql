// const { response } = require("express");
// const mysql = require("mysql2");
// const readline = require("readline");
// const app = require("./script.js")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// async function conectar() {
//   try {
//     const conexao = mysql.createConnection({
//       host: "localhost",
//       user: 'root',
//       password: "arthur.alml03",
//       database: "escola"
//     })
//     console.log('Conectado ao banco de dados Escola ')
    
//   } catch (error) {

    
//   }
  
// }



// peguei a visão. pra vc puxar dados de input do front pro back end precisa usar o req.body e o nome do input precisa colcoar o name no html e ai vc puxa no
// back ai o req é de requeste requisição do body e procura o nome ai vc consegue puxar o valor do input










// const app = {
//   async adicionaValores() {
//     const nome = await pergunta("Qual é o seu nome? ");
//     console.log(`Prazer, ${nome}!`);

//     const idade = await pergunta("Qual sua idade? ");
//     console.log(`Você tem ${idade} anos.`);

//     const resposta = await pergunta("Gostaria de adicionar esse nome e essa idade na tabela? (sim ou não) ");

//     console.log("Resposta:", resposta);

//     if (resposta.toLowerCase().trim() === "sim") {
//       console.log("Adicionando na tabela...");
//       conexao.query(`INSERT INTO alunos (nome, idade) VALUES ("${nome}", ${idade})`, (erro, resultado) => {
//         if (erro) {
//           console.log("Erro ao adicionar aluno:", erro.message);
//           return;
//         }
//       });
//       await app.mostrarTabela();
//     } else {
//       console.log("Nada será adicionado.");
//     }

//     rl.close();
//   },

//   async mostrarTabela() {
//     return new Promise((resolve) => {
//       conexao.query("SELECT * FROM alunos;", (erro, resultado) => {
//         if (erro) {
//           console.log("erro");
//           return resolve();
//         }

//         console.log(resultado);
//         console.log("Deu certo");
//         resolve();
//       });
//     });
//   },

//   async deletarAlgo() { // tem q ser promise 
//     return new Promise((resolve) => {
//       conexao.query("DELETE FROM alunos WHERE id=3", (erro, resultado) => {
//         if (erro) {
//           console.log(erro.message);
//           return resolve();
//         }

//         console.log("Deletado com sucesso");
//         resolve();
//       });
//     });
//   }
// };


// pra que esse module? no node é preciso colocar esse module pq isso indica que vamos utilizar depois
// ent funciona tipo, node manda esse app por inteiro com tudo 

// dps puxa com const app = require('./app')




























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

// const conexao = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "arthur.alml03",
//   database: "escola",
// });

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
// // };
// conexao.connect((erro, resultado) => {
//   if (erro) {
//     console.log("erro detectado ");
//   }
//   console.log("Conexão efetuada com sucesso");
//   app.mostrarTabela()

//   app.mostrarTabela()
//   conexao.query(
//     'INSERT alunos (nome, idade) VALUES ("Vania", 41)',
//     (erro, resultado) => {
//       if (erro) {
//         console.log("erro");
//         return;
//       }
//       console.log("Aluno adicionado com sucesso ");
//       app.mostrarTabela();
//     },
//   );
//   // conexao.query("SELECT * FROM alunos;", (erro, resultado) => {
//   //   if (erro) {
//   //     console.log("erro");
//   //     return;
//   //   }
//   //   console.log(resultado);
//   // });
//   app.adicionaValores(); 
//   app.mostrarTabela()
// });

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




const express = require("express");
const app = express();

// ESSENCIAL pra ler formulário HTML
app.use(express.urlencoded({ extended: true }));

// rota do formulário
app.post("/aluno", (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;

    console.log("Nome:", nome);
    console.log("Idade:", idade);

    res.send("Dados recebidos!");
});

// rodar servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// resumindo: “Express, consegue ler dados que vêm de formulários HTML pra mim”
// transforma isos nome=João&idade=16 em isso 
//{
  // nome: "João",
//   idade: "16"
// }