function SmartPyramid() {
  return (
    <svg
      width="38"
      height="42"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >

      {/* corpo da pirâmide */}
      <polygon
        points="50,5 95,90 5,90"
        fill="#08234f"
      />

      {/* face esquerda */}
      <polygon
        points="50,5 50,90 5,90"
        fill="#1e63d6"
      />

      {/* face direita */}
      <polygon
        points="50,5 95,90 50,90"
        fill="#04152f"
      />

      {/* faceta central */}
      <polygon
        points="50,20 72,90 50,75"
        fill="#3b8cff"
        opacity="0.8"
      />

      {/* corte inferior */}
      <polygon
        points="50,75 72,90 28,90"
        fill="#0b2f70"
      />

      {/* brilho */}
      <polygon
        points="50,5 62,30 50,20"
        fill="white"
        opacity="0.45"
      />

    </svg>
  );
}

export default SmartPyramid;