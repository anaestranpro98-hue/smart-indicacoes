import { NavLink, Outlet, useNavigate } from "react-router-dom";

import {
  Home,
  Megaphone,
  Users,
  UserRound,
  Trophy,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut
} from "lucide-react";


function Layout() {

  const navigate = useNavigate();


  function sair() {

    localStorage.removeItem("usuario");

    navigate("/login");

  }


  const menuItems = [

    { name: "Início", path: "/", icon: Home },

    { name: "Campanhas", path: "/campanhas", icon: Megaphone },

    { name: "Indicações", path: "/indicacoes", icon: Users },

    { name: "Vendedores", path: "/vendedores", icon: UserRound },

    { name: "Ranking", path: "/painel", icon: Trophy },

    { name: "Relatórios", path: "/relatorios", icon: BarChart3 },

    { name: "Sugestões", path: "/sugestoes", icon: MessageSquare },

    { name: "Configurações", path: "/configuracoes", icon: Settings }

  ];



  return (

    <div className="app-layout">


      <aside className="mini-sidebar">


        <div className="smart-logo">


          <div className="smart-logo-box">


            <div className="diamond-light"></div>

            <div className="diamond-cut one"></div>

            <div className="diamond-cut two"></div>


            <span>
              SM
            </span>


          </div>


        </div>





        <nav className="icon-menu">


          {menuItems.map((item) => {


            const Icon = item.icon;


            return (

              <NavLink

                key={item.name}

                to={item.path}

                className={({ isActive }) =>

                  isActive

                  ? "icon-link active"

                  : "icon-link"

                }

              >


                <Icon size={21} />


                <span>
                  {item.name}
                </span>


              </NavLink>

            );


          })}


        </nav>





        <button

          className="icon-link logout"

          onClick={sair}

        >


          <LogOut size={21} />


          <span>
            Sair
          </span>


        </button>



      </aside>





      <section className="main-area">


        <header className="top-bar">


          <div className="search-box">


            🔍


            <input

              placeholder="Pesquisar no Smart Indicações..."

            />


          </div>


        </header>





        <main className="page-content">

          <Outlet />

        </main>



      </section>



    </div>

  );

}


export default Layout;