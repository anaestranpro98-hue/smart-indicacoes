import {
  BarChart3,
  TrendingUp,
  Target,
  Award
} from "lucide-react";


function Relatorios() {

  const campanhas = [
    {
      nome: "iPhone 16 Pro - AT&T",
      indicacoes: 48
    },
    {
      nome: "Internet Residencial",
      indicacoes: 32
    },
    {
      nome: "Plano Controle",
      indicacoes: 21
    }
  ];


  const meses = [
    {
      nome: "Jan",
      valor: 18
    },
    {
      nome: "Fev",
      valor: 26
    },
    {
      nome: "Mar",
      valor: 22
    },
    {
      nome: "Abr",
      valor: 40
    },
    {
      nome: "Mai",
      valor: 55
    },
    {
      nome: "Jun",
      valor: 48
    },
    {
      nome: "Jul",
      valor: 70
    },
    {
      nome: "Ago",
      valor: 62
    }
  ];


  return (
    <div className="container">

      <div className="card">

        <h2>
          Relatórios
        </h2>

        <p>
          Análise de resultados comerciais.
        </p>


        <div className="summary-area">


          <div className="summary-card">

            <BarChart3 />

            <div>
              <span>
                Campanhas
              </span>

              <strong>
                12
              </strong>
            </div>

          </div>



          <div className="summary-card">

            <TrendingUp />

            <div>
              <span>
                Melhor período
              </span>

              <strong>
                Julho
              </strong>
            </div>

          </div>



          <div className="summary-card">

            <Target />

            <div>
              <span>
                Melhor campanha
              </span>

              <strong>
                AT&T
              </strong>
            </div>

          </div>



          <div className="summary-card">

            <Award />

            <div>
              <span>
                Resultado
              </span>

              <strong>
                Alto
              </strong>
            </div>

          </div>


        </div>

<div className="report-box">

  <h3>
    Resultado por campanha
  </h3>


  <div className="campaign-grid">

    {campanhas.map((campanha) => (

      <div
        className="campaign-card"
        key={campanha.nome}
      >

        <h4>
          {campanha.nome}
        </h4>


        <strong>
          {campanha.indicacoes}
        </strong>


        <span>
          indicações
        </span>


      </div>

    ))}

  </div>


</div>
<div className="report-box">

  <h3>
    Evolução das indicações
  </h3>


  <div className="chart-box">

    {
      meses.map((mes) => {
        return (

          <div 
            className="chart-column"
            key={mes.nome}
          >

            <div
              className="chart-bar"
              style={{
                height: mes.valor * 3 + "px"
              }}
            ></div>


            <span>
              {mes.nome}
            </span>


          </div>

        );
      })
    }

  </div>

</div>



        <div className="report-box">

          <h3>
            Melhores meses
          </h3>


          <div className="best-month">


            <div>
              Julho
              <strong>
                70 indicações
              </strong>
            </div>


            <div>
              Maio
              <strong>
                55 indicações
              </strong>
            </div>


            <div>
              Junho
              <strong>
                48 indicações
              </strong>
            </div>


          </div>

        </div>


      </div>

    </div>
  );
}


export default Relatorios;