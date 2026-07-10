import { useEffect, useState } from "react";
import {
  Plus,
  Users,
  UserCheck,
  TrendingUp
} from "lucide-react";

function Vendedores() {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    async function carregarVendedores() {
      try {
        const response =
          await fetch("http://localhost:3001/usuarios");

        const data =
          await response.json();

        setVendedores(data);

      } catch (error) {
        console.error(
          "Erro ao carregar vendedores:",
          error
        );

        setVendedores([
          {
            id: 1,
            nome: "Ana Souza",
            email: "ana@smart.com",
            tipo: "Vendedora",
            equipe: "Telefonia",
            indicacoes: 12,
            convertidas: 4
          },

          {
            id: 2,
            nome: "Carlos Lima",
            email: "carlos@smart.com",
            tipo: "Vendedor",
            equipe: "Internet Residencial",
            indicacoes: 18,
            convertidas: 7
          },

          {
            id: 3,
            nome: "Juliana Costa",
            email: "juliana@smart.com",
            tipo: "Vendedora",
            equipe: "Pós-venda",
            indicacoes: 9,
            convertidas: 3
          }
        ]);
      }
    }

    carregarVendedores();
  }, []);

  return (
    <div className="container">
      <div className="card">

        <div className="page-header">

          <div>
            <h1>
              Equipe Comercial
            </h1>

            <p>
              Gerencie os usuários e acompanhe o desempenho da equipe.
            </p>
          </div>

          <button className="crm-button">
            <Plus size={18} />
            Adicionar usuário
          </button>

        </div>

        <div className="team-summary">

          <div className="summary-card">
            <Users />

            <div>
              <span>
                Usuários
              </span>

              <strong>
                {vendedores.length}
              </strong>
            </div>
          </div>

          <div className="summary-card">
            <UserCheck />

            <div>
              <span>
                Equipes
              </span>

              <strong>
                3
              </strong>
            </div>
          </div>

          <div className="summary-card">
            <TrendingUp />

            <div>
              <span>
                Indicações geradas
              </span>

              <strong>
                42
              </strong>
            </div>
          </div>

        </div>

        <div className="seller-grid">

          {vendedores.map((item) => (

            <div
              className="seller-card"
              key={item.id}
            >

              <div className="seller-header">

                <div>

                  <h3>
                    {item.nome}
                  </h3>

                  <p>
                    {item.tipo} • {item.equipe || "Telefonia"}
                  </p>

                </div>

              </div>

              <div className="seller-info">

                <p>
                  <strong>
                    E-mail
                  </strong>
                  <br />
                  {item.email}
                </p>

                <p>
                  <strong>
                    Indicações
                  </strong>
                  <br />
                  {item.indicacoes}
                </p>

                <p>
                  <strong>
                    Convertidas
                  </strong>
                  <br />
                  {item.convertidas}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default Vendedores;