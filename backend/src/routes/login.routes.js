const express = require("express");
const pool = require("../../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const result = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1 AND senha = $2",
      [email, senha]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "E-mail ou senha incorretos"
      });
    }

    const usuario = result.rows[0];

    res.json({
      message: "Login realizado com sucesso",
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        tipo: usuario.tipo
      }
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro no login"
    });
  }
});

module.exports = router;