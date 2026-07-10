const express = require("express");
const pool = require("../../db");

const router = express.Router();


// Criar indicação
router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      indicador_nome,
      indicador_telefone
    } = req.body;


    const result = await pool.query(
      `
      INSERT INTO indicacoes
      (
        name,
        phone,
        indicador_nome,
        indicador_telefone
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [
        name,
        phone,
        indicador_nome,
        indicador_telefone
      ]
    );


    res.json({
      message: "Indicação recebida com sucesso",
      data: result.rows[0]
    });


  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro ao salvar indicação"
    });
  }
});


// Buscar todas (admin)
router.get("/", async (req, res) => {
  try {

    const result = await pool.query(
      "SELECT * FROM indicacoes ORDER BY id DESC"
    );

    res.json(result.rows);


  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message
    });

  }
});


// Buscar indicações de um cliente pelo telefone
router.get("/cliente/:telefone", async (req, res) => {
  try {

    const { telefone } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM indicacoes
      WHERE indicador_telefone = $1
      ORDER BY id DESC
      `,
      [telefone]
    );


    res.json(result.rows);


  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/vendedor/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT 
        indicacoes.id,
        indicacoes.name,
        indicacoes.phone,
        usuarios.nome AS vendedor_responsavel
      FROM indicacoes
      LEFT JOIN usuarios
      ON indicacoes.vendedor_id = usuarios.id
      WHERE indicacoes.vendedor_id = $1
      `,
      [id]
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro ao buscar indicações do vendedor"
    });
  }
});
module.exports = router;