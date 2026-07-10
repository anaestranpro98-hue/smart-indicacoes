const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

console.log("ESTE É O SERVER NOVO");

const indicationsRoutes = require("./src/routes/indications.routes");
const loginRoutes = require("./src/routes/login.routes");
const usuariosRoutes = require("./src/routes/usuarios.routes");

app.use("/indications", indicationsRoutes);
app.use("/login", loginRoutes);
app.use("/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
  res.send("API Smart Indicacoes rodando 🚀");
});

app.get("/teste-servidor", (req, res) => {
  res.send("teste funcionando");
});

app.get("/ping", (req, res) => {
  res.json({
    message: "Servidor funcionando"
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3001");
});