import { BrowserRouter } from "react-router-dom";

import AppRouter from "./Componets/page/router/AppRouter";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer  />
    </BrowserRouter>
  );
}

export default App;
