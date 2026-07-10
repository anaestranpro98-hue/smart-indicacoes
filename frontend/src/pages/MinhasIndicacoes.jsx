import { useState } from "react";

function MinhasIndicacoes() {
  const [telefone, setTelefone] = useState("");
  const [indicacoes, setIndicacoes] = useState([]);

  async function buscarIndicacoes() {
    try {
      const response = await fetch(
        "http://localhost:3001/indications/cliente/" + telefone
      );

      const data = await response.json();

      setIndicacoes(data);

    } catch (error) {
      console.error("Erro ao buscar indicações:", error);
    }
  }

  return (
    <div className="container">
      <div className="card">

        <h1>
          Minhas Indicações
        </h1>

        <p>
          Digite seu telefone para consultar suas indicações.
        </p>

        <input
          type="text"
          placeholder="Seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <button onClick={buscarIndicacoes}>
          Consultar
        </button>

        {indicacoes.length > 0 && (
          <div>
            <h2>Suas indicações:</h2>

            {indicacoes.map((item) => (
              <p key={item.id}>
                {item.name} - {item.phone}
              </p>
            ))}

          </div>
        )}

        {indicacoes.length === 0 && telefone !== "" && (
          <p>
            Nenhuma indicação encontrada.
          </p>
        )}

      </div>
    </div>
  );
}

export default MinhasIndicacoes;