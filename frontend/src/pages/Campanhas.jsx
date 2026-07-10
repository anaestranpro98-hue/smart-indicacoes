import {
  Smartphone,
  Wifi,
  Plus,
  CalendarDays
} from "lucide-react";


function Campanhas() {


  const campanhasTelefonia = [

    {
      nome: "iPhone 16 Pro",
      empresa: "AT&T",
      status: "Ativa",
      periodo: "01 Jul 2026 → 31 Jul 2026",
      descricao:
        "Campanha comercial para novas linhas móveis."
    },


    {
      nome: "Plano Controle",
      empresa: "Verizon",
      status: "Pausada",
      periodo: "15 Jun 2026 → 15 Jul 2026",
      descricao:
        "Oferta comercial para novos clientes de telefonia."
    }

  ];




  const campanhasInternet = [

    {
      nome: "Internet Residencial 600MB",
      empresa: "Internet Residencial",
      status: "Ativa",
      periodo: "05 Jul 2026 → 05 Ago 2026",
      descricao:
        "Campanha para aquisição de novos clientes residenciais."
    },


    {
      nome: "Plano Residencial Premium",
      empresa: "Internet Residencial",
      status: "Encerrada",
      periodo: "01 Jun 2026 → 30 Jun 2026",
      descricao:
        "Campanha residencial finalizada."
    }

  ];




  function Status({status}) {

    return (

      <span className={
        status === "Ativa"
        ? "campaign-status active"
        :
        status === "Pausada"
        ? "campaign-status paused"
        :
        "campaign-status closed"
      }>

        {status}

      </span>

    );

  }





  function CampaignCard({campanha}) {


    return (

      <div className="campaign-card">


        <div className="campaign-header">


          <div>

            <h3>
              {campanha.nome}
            </h3>


            <p>
              {campanha.empresa}
            </p>

          </div>



          <Status status={campanha.status}/>


        </div>





        <div className="campaign-date">

          <CalendarDays size={18}/>

          <span>
            {campanha.periodo}
          </span>

        </div>





        <p className="campaign-description">

          {campanha.descricao}

        </p>



      </div>

    );

  }







  return (

    <div className="container">


      <div className="card">


        <div className="page-header">


          <div>

            <h1>
              Campanhas
            </h1>


            <p>
              Gerencie campanhas comerciais de telefonia e internet residencial.
            </p>


          </div>



          <button className="crm-button">

            <Plus size={18}/>

            Nova campanha

          </button>


        </div>







        <section className="campaign-section">


          <h2>

            <Smartphone size={22}/>

            Telefonia

          </h2>



          <div className="campaign-grid">


            {campanhasTelefonia.map((campanha,index)=>(

              <CampaignCard
                key={index}
                campanha={campanha}
              />

            ))}


          </div>


        </section>








        <section className="campaign-section">


          <h2>

            <Wifi size={22}/>

            Internet Residencial

          </h2>



          <div className="campaign-grid">


            {campanhasInternet.map((campanha,index)=>(

              <CampaignCard
                key={index}
                campanha={campanha}
              />

            ))}


          </div>


        </section>




      </div>


    </div>

  );

}


export default Campanhas;