import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Users,
  Trophy,
  Megaphone,
  BarChart3,
  Activity,
  Clock
} from "lucide-react";


function Painel() {


  const [indicacoes, setIndicacoes] = useState([

    {
      id: 1,
      name: "João Silva",
      phone: "(51) 99999-9999",
      vendedor_responsavel: "Ana"
    },

    {
      id: 2,
      name: "Maria Souza",
      phone: "(51) 98888-8888",
      vendedor_responsavel: "Carlos"
    },

    {
      id: 3,
      name: "Pedro Lima",
      phone: "(51) 97777-7777",
      vendedor_responsavel: "Juliana"
    }

  ]);


  const [, setUsuario] = useState(null);


  const navigate = useNavigate();



  useEffect(() => {


    async function carregarIndicacoes() {


      const usuarioSalvo = JSON.parse(
        localStorage.getItem("usuario")
      );


      if (!usuarioSalvo) {

        navigate("/login");

        return;

      }


      setUsuario(usuarioSalvo);



      try {


        let url =
          "http://localhost:3001/indications";



        if (usuarioSalvo.tipo === "vendedor") {


          url =
            "http://localhost:3001/indications/vendedor/" +
            usuarioSalvo.id;


        }



        const response = await fetch(url);


        const data = await response.json();



        if (data.length > 0) {

          setIndicacoes(data);

        }



      } catch(error) {


        console.error(
          "Erro ao carregar indicações:",
          error
        );


      }


    }



    carregarIndicacoes();



  }, [navigate]);





  return (


    <div className="crm-dashboard">



      <header className="crm-header">


        <div>


          <h1>
            Central Smart Telecom
          </h1>



          <p>
            Gestão comercial, indicações e desempenho da equipe.
          </p>



        </div>


      </header>





      <section className="crm-grid">



        <div className="crm-card">


          <div className="crm-icon">
            <Megaphone />
          </div>


          <span>
            Campanhas
          </span>


          <strong>
            3
          </strong>


        </div>





        <div className="crm-card">


          <div className="crm-icon">
            <Users />
          </div>


          <span>
            Indicações
          </span>


          <strong>
            {indicacoes.length + 15}
          </strong>


        </div>





        <div className="crm-card">


          <div className="crm-icon">
            <BarChart3 />
          </div>


          <span>
            Relatórios
          </span>


          <strong>
            5
          </strong>


        </div>





        <div className="crm-card">


          <div className="crm-icon">
            <Trophy />
          </div>


          <span>
            Ranking Indicações
          </span>


          <strong>
            8
          </strong>


        </div>



      </section>





      <section className="crm-panel">


        <h2>
          Últimas indicações
        </h2>



        <table>


          <thead>


            <tr>

              <th>
                Cliente
              </th>

              <th>
                Telefone
              </th>

              <th>
                Vendedor
              </th>

              <th>
                Status
              </th>

            </tr>


          </thead>



          <tbody>



            {indicacoes.map((item)=>(


              <tr key={item.id}>


                <td>
                  {item.name}
                </td>


                <td>
                  {item.phone}
                </td>


                <td>
                  {item.vendedor_responsavel}
                </td>


                <td>
                  Em análise
                </td>



              </tr>


            ))}



          </tbody>



        </table>



      </section>







      <section className="crm-bottom">




        <div className="crm-small-card">


          <Activity />



          <div>


            <h3>
              Status das indicações
            </h3>



            <p>
              Novas: 5 | Em análise: 8 | Convertidas: 12
            </p>



          </div>



        </div>






        <div className="crm-small-card">


          <Clock />



          <div>


            <h3>
              Atividades recentes
            </h3>



            <p>

              • Nova indicação recebida<br />

              • Campanha Fibra 600MB criada<br />

              • Ranking atualizado hoje

            </p>



          </div>



        </div>




      </section>





    </div>


  );


}


export default Painel;