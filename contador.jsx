import React, { useState } from "react";
import "./Contador.css";

function Contador() {
  // Estado inicial
  const [count, setCount] = useState(0);

  // Função de incremento
  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>Contador de Cliques</h1>
      <p className="numero">{count}</p>

      <button className="botao" onClick={increment}>
        Clique aqui
      </button>
    </div>
  );
}

export default Contador;
