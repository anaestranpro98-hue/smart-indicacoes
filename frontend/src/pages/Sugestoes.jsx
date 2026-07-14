import { useState } from "react";


function Sugestoes() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [sugestao, setSugestao] = useState("");


  function enviarSugestao(e) {

    e.preventDefault();


    if (!nome || !sugestao) {

      alert("Preencha seu nome e a sugestão.");

      return;

    }


    alert("Sugestão enviada com sucesso!");


    setNome("");
    setEmail("");
    setSugestao("");

  }



  return (

    <div className="cliente-page">


      <div className="cliente-card">


        <div className="cliente-logo">

          Sm<span>▲</span>rt

        </div>



        <h1>
          Sugestões
        </h1>



        <p>
          Envie ideias, melhorias e sugestões para nossa equipe.
        </p>



        <form
          onSubmit={enviarSugestao}
          className="portal-form"
        >


          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />



          <input
            type="email"
            placeholder="Seu e-mail (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />



          <textarea
            placeholder="Digite sua sugestão..."
            value={sugestao}
            onChange={(e) => setSugestao(e.target.value)}
            required
          />



          <button
            type="submit"
          >
            Enviar Sugestão
          </button>



        </form>


      </div>


    </div>

  );

}


export default Sugestoes;