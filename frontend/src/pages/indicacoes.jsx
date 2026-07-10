import { useEffect, useState } from "react";
import {
  Plus,
  Users,
  Clock,
  CheckCircle,
  UserPlus
} from "lucide-react";


function Indicacoes() {


  const [indicacoes, setIndicacoes] = useState([]);



  useEffect(() => {


    async function buscarIndicacoes() {


      try {


        const response =
          await fetch("http://localhost:3001/indications");


        const data =
          await response.json();


        setIndicacoes(data);



      } catch(error) {


        console.error(
          "Erro ao buscar indicações:",
          error
        );


        // Dados fictícios para demonstração do MVP

        setIndicacoes([

          {
            id:1,
            name:"João Silva",
            phone:"(51) 99999-1111",
            vendedor:"Ana Souza",
            status:"Nova"
          },


          {
            id:2,
            name:"Maria Oliveira",
            phone:"(51) 98888-2222",
            vendedor:"Carlos Lima",
            status:"Em análise"
          },


          {
            id:3,
            name:"Pedro Santos",
            phone:"(51) 97777-3333",
            vendedor:"Ana Souza",
            status:"Convertida"
          },


          {
            id:4,
            name:"Carla Mendes",
            phone:"(51) 96666-4444",
            vendedor:"Juliana Costa",
            status:"Nova"
          }

        ]);

      }


    }


    buscarIndicacoes();


  }, []);





  function statusClass(status){


    if(status === "Convertida"){

      return "status-success";

    }


    if(status === "Em análise"){

      return "status-warning";

    }


    return "status-new";

  }





  return (


    <div className="container">


      <div className="card">



        <div className="page-header">


          <div>

            <h1>
              Indicações
            </h1>


            <p>
              Acompanhe todas as indicações comerciais.
            </p>


          </div>



          <button className="crm-button">

            <Plus size={18}/>

            Nova indicação

          </button>


        </div>





        <div className="indication-summary">



          <div className="summary-card">

            <Users/>

            <div>

              <span>
                Total
              </span>

              <strong>
                {indicacoes.length}
              </strong>

            </div>

          </div>





          <div className="summary-card">

            <UserPlus/>

            <div>

              <span>
                Novas
              </span>

              <strong>
                2
              </strong>

            </div>

          </div>





          <div className="summary-card">

            <Clock/>

            <div>

              <span>
                Em análise
              </span>

              <strong>
                1
              </strong>

            </div>

          </div>





          <div className="summary-card">

            <CheckCircle/>

            <div>

              <span>
                Convertidas
              </span>

              <strong>
                1
              </strong>

            </div>

          </div>



        </div>







        <div className="crm-panel">


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
                    {item.vendedor || "Sem vendedor"}
                  </td>


                  <td>

                    <span className={statusClass(item.status)}>

                      {item.status}

                    </span>

                  </td>


                </tr>


              ))}


            </tbody>


          </table>


        </div>




      </div>


    </div>


  );


}


export default Indicacoes;