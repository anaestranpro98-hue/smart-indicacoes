import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Layout from "./layouts/Layout.jsx";

import Indicacoes from "./pages/indicacoes.jsx";
import MinhasIndicacoes from "./pages/MinhasIndicacoes.jsx";
import Login from "./pages/Login.jsx";
import Painel from "./pages/Painel.jsx";
import Vendedores from "./pages/Vendedores.jsx";
import Campanhas from "./pages/Campanhas.jsx";
import IndicacaoCliente from "./pages/IndicacaoCliente.jsx";
import Sugestoes from "./pages/Sugestoes.jsx";
import Ouvidoria from "./pages/Ouvidoria.jsx";
import Relatorios from "./pages/Relatorios.jsx";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>


        {/* PÁGINA PRINCIPAL / PORTAL */}

        <Route 
          path="/" 
          element={<App />} 
        />


        {/* ÁREA DO CLIENTE */}

        <Route 
          path="/indicar" 
          element={<IndicacaoCliente />} 
        />

        <Route 
          path="/sugestoes" 
          element={<Sugestoes />} 
        />

        <Route 
          path="/ouvidoria" 
          element={<Ouvidoria />} 
        />


        {/* LOGIN DA EQUIPE */}

        <Route 
          path="/login" 
          element={<Login />} 
        />


        {/* SISTEMA INTERNO */}

        <Route element={<Layout />}>

          <Route 
            path="/indicacoes" 
            element={<Indicacoes />} 
          />

          <Route 
            path="/minhas-indicacoes" 
            element={<MinhasIndicacoes />} 
          />

          <Route 
            path="/painel" 
            element={<Painel />} 
          />

          <Route 
            path="/vendedores" 
            element={<Vendedores />} 
          />

          <Route 
            path="/campanhas" 
            element={<Campanhas />} 
          />
<Route 
  path="/relatorios" 
  element={<Relatorios />} 
/>
        </Route>


      </Routes>

    </BrowserRouter>

  </React.StrictMode>

);