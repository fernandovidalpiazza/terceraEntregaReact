import { BrowserRouter } from "react-router-dom";

import AppRouter from "./Componets/page/router/AppRouter";

import CartContextComponent from "./Componets/context/CartContex";
import  OrderProvider from "./Componets/context/OrderContext"

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <OrderProvider>
          <AppRouter />
        </OrderProvider>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
