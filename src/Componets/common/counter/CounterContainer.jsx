// CounterContainer.jsx
import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ agregarAlCarrito, stock, cantidadEnCarro=1 }) => {
  const [counter, setCounter] = useState(cantidadEnCarro);

  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer;
