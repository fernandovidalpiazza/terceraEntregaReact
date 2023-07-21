// Counter.jsx
import React from "react";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <button disabled={counter < 2} onClick={() => setCounter(counter - 1)}> - </button>
      <button> {counter} </button>
      <button disabled={counter >= stock} onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => agregarAlCarrito(counter)}>Agregar al Carrito </button>
    </div>
  );
};

export default Counter;

