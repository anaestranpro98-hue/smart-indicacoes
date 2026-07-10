const express = require("express");
const router = express.Router();

const pool = require("../../db");


// Buscar usuários
router.get("/", async (req, res) => {
  try {

    const result = await pool.query(
      `
      SELECT id, nome, email, tipo
      FROM usuarios
      ORDER BY id
      `
    );

    res.json(result.rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Erro ao buscar usuários"
    });

  }
});


// Criar novo vendedor
router.post("/", async (req, res) => {
  try {

    const { nome, email, senha } = req.body;

    const result = await pool.query(
      `
      INSERT INTO usuarios
      (nome, email, senha, tipo)
      VALUES ($1, $2, $3, 'vendedor')
      RETURNING id, nome, email, tipo
      `,
      [nome, email, senha]
    );

    res.json({
      message: "Vendedor criado com sucesso",
      usuario: result.rows[0]
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Erro ao criar vendedor"
    });

  }
});


module.exports = router;