function PainelVendedor() {

  const indicacoes = [
    {
      cliente: "João Silva",
      telefone: "(51) 99999-1111",
      status: "Convertida",
      operadora: "AT&T"
    },
    {
      cliente: "Maria Souza",
      telefone: "(51) 98888-2222",
      status: "Em contato",
      operadora: "-"
    },
    {
      cliente: "Carlos Lima",
      telefone: "(51) 97777-3333",
      status: "Convertida",
      operadora: "Verizon"
    },
    {
      cliente: "Ana Oliveira",
      telefone: "(51) 96666-4444",
      status: "Não convertida",
      operadora: "-"
    }
  ];


  return (

    <div className="container">

      <div className="card">


        <h1>
          Painel do Vendedor
        </h1>


        <p>
          Acompanhe suas indicações e resultados.
        </p>



        <div className="dashboard-cards">


          <div className="dashboard-card">
            <h3>
              Minhas Indicações
            </h3>

            <strong>
              25
            </strong>
          </div>



          <div className="dashboard-card">

            <h3>
              Convertidas
            </h3>

            <strong>
              12
            </strong>

          </div>



          <div className="dashboard-card">

            <h3>
              Conversão
            </h3>

            <strong>
              48%
            </strong>

          </div>



          <div className="dashboard-card">

            <h3>
              AT&T
            </h3>

            <strong>
              8
            </strong>

          </div>



          <div className="dashboard-card">

            <h3>
              Verizon
            </h3>

            <strong>
              4
            </strong>

          </div>


        </div>




        <h2>
          Minhas Indicações
        </h2>



        <div className="table-card">


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
                  Status
                </th>

                <th>
                  Operadora
                </th>

              </tr>

            </thead>



            <tbody>


              {indicacoes.map((item, index) => (

                <tr key={index}>

                  <td>
                    {item.cliente}
                  </td>


                  <td>
                    {item.telefone}
                  </td>


                  <td>
                    {item.status}
                  </td>


                  <td>
                    {item.operadora}
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


export default PainelVendedor;