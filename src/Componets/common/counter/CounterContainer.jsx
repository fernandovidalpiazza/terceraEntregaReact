import React, { useState } from 'react';
import Counter from "./Counter";

const CounterContainer = ({agregarAlcarrito,stock}) => {
  const [counter, setCounter,  ] = useState(1);

  return (
    <div>
     <Counter counter={counter} 
     SetCounter={setCounter}
     agregarAlcarrito={agregarAlcarrito}
     stock={stock}
     />

    </div>
  );
};

export default CounterContainer;
