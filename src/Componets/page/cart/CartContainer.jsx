import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import Cart from "./Cart";
import "./cart.css"; 
import "./cartContainer.css"; 

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  const total = getTotalPrice();

  return (
    <div className="container">
      <Cart
        cartItems={cart}
        clearCart={clearCart}
        deleteItem={deleteById}
        totalPrice={total}
      />
    </div>
  );
};

export default CartContainer;
