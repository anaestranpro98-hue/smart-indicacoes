import { useState } from "react";


function IndicacaoCliente() {

  const [enviado, setEnviado] = useState(false);


  function enviarIndicacao(e) {

    e.preventDefault();

    setEnviado(true);

  }


  return (

    <div className="cliente-page">


      <div className="cliente-card">


        <div className="cliente-logo">

          Sm<span>▲</span>rt

        </div>



        {!enviado ? (

          <>


            <h1>
              Indique um amigo
            </h1>



            <p>
              Faça sua indicação em poucos passos e conecte mais pessoas à Smart Telecom.
            </p>



            <form onSubmit={enviarIndicacao}>


              <input
                type="text"
                placeholder="Seu nome"
                required
              />



              <input
                type="tel"
                placeholder="Seu telefone"
                required
              />



              <div className="divider">
                Dados do indicado
              </div>



              <input
                type="text"
                placeholder="Nome do indicado"
                required
              />



              <input
                type="tel"
                placeholder="Telefone do indicado"
                required
              />



              <button
                type="submit"
              >
                Enviar indicação
              </button>



            </form>


          </>


        ) : (


          <div className="success-message">


            <h2>
              Indicação enviada! ✅
            </h2>



            <p>
              Obrigado por conectar mais pessoas à Smart Telecom.
            </p>



            <button
              onClick={() => setEnviado(false)}
            >
              Fazer nova indicação
            </button>


          </div>


        )}


      </div>


    </div>

  );

}


export default IndicacaoCliente;