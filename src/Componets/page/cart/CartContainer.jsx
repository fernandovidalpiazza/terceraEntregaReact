import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  const total = getTotalPrice();

  return (
    <Cart
      cartItems={cart}
      clearCart={clearCart}
      deleteItem={deleteById}
      totalPrice={total}
    />
  );
};

export default CartContainer;