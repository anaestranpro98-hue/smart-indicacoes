import { Link } from "react-router-dom";

import {
  Users,
  Shield
} from "lucide-react";

import SmartPyramid from "./SmartPyramid";


function App() {

  return (

    <div className="portal-page">


      <div className="portal-header">


        <h1 className="smart-brand">

          <span>
            Sm
          </span>


          <SmartPyramid />


          <span>
            rt
          </span>


          <span
            style={{
              marginLeft: "18px"
            }}
          >
            Telecom
          </span>


        </h1>



        <p>
          Plataforma inteligente de indicações, relacionamento e gestão para clientes e equipe.
        </p>


      </div>



      <div className="portal-cards">


        <div className="portal-card">


          <div className="portal-icon">

            <Users size={34} />

          </div>



          <h2>
            Área do Cliente
          </h2>



          <p>
            Indique novos clientes, envie sugestões e participe das oportunidades da Smart.
          </p>



          <div className="portal-buttons">


            <Link
              to="/indicar"
              className="portal-btn"
            >
              Fazer Indicação
            </Link>



            <Link
              to="/sugestoes"
              className="portal-btn secondary"
            >
              Enviar Sugestão
            </Link>


          </div>


        </div>




        <div className="portal-card">


          <div className="portal-icon">

            <Shield size={34} />

          </div>



          <h2>
            Portal da Equipe
          </h2>



          <p>
            Gestão de indicações, campanhas, vendedores e resultados em um único ambiente.
          </p>



          <div className="portal-buttons">


            <Link
              to="/login"
              className="portal-btn"
            >
              Acessar Painel
            </Link>


          </div>


        </div>


      </div>


    </div>

  );

}


export default App;