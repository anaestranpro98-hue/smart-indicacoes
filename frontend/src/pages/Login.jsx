import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  function entrar(e) {

    e.preventDefault();


    if (
      email === "gerente@smart.com" &&
      senha === "123456"
    ) {


      localStorage.setItem(
        "usuario",
        JSON.stringify({
          nome: "Gerente",
          email: email,
          tipo: "gerente"
        })
      );


      navigate("/painel");


    } 
    else if (
      email === "vendedor@smart.com" &&
      senha === "123456"
    ) {


      localStorage.setItem(
        "usuario",
        JSON.stringify({
          nome: "Vendedor",
          email: email,
          tipo: "vendedor"
        })
      );


      navigate("/painel-vendedor");


    } 
    else {


      alert("Usuário ou senha incorretos.");


    }

  }



  return (

    <div className="login-page">


      <div className="login-card">


        <div className="cliente-logo">

          SM<span>▲</span>RT

        </div>


        <h1>
          Acesso Adminnistrativo
        </h1>





        <form onSubmit={entrar}>


          <input

            type="email"

            placeholder="E-mail"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            required

          />



          <input

            type="password"

            placeholder="Senha"

            value={senha}

            onChange={(e) => setSenha(e.target.value)}

            required

          />



          <button type="submit">

            Entrar

          </button>


        </form>



      </div>


    </div>

  );

}


export default Login;