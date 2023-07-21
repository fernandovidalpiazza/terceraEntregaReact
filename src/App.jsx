import { BrowserRouter } from "react-router-dom";

import AppRouter from "./Componets/page/router/AppRouter";

import CartContextComponent from "./Componets/context/CartContex";


function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
