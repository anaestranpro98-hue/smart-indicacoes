function Ouvidoria() {
  return (
    <div className="card">
      <h1>Ouvidoria</h1>

      <p>
        Fale diretamente com a Smart Telecom para dúvidas, elogios ou reclamações.
      </p>

      <textarea
        placeholder="Escreva sua mensagem..."
        style={{
          width: "100%",
          height: "180px",
          marginTop: "20px",
          padding: "15px",
          borderRadius: "12px",
          border: "1px solid #dbe3ef",
          resize: "none"
        }}
      />

      <button>
        Enviar mensagem
      </button>
    </div>
  );
}

export default Ouvidoria;