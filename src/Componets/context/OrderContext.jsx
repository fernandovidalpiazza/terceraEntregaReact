
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

 const OrderProvider = ({ children }) => {
  const [orderId, setOrderId] = useState("");

  return (
    <OrderContext.Provider value={{ orderId, setOrderId }}>
      {children}
    </OrderContext.Provider>
  );
};
export default OrderProvider
