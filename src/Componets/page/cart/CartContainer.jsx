import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

  
   

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice ()
  return (
    <div>
      <h2>Estoy en el carrito</h2>
      {cart.map((elemento) => (
        <div
          key={elemento.id}
          style={{ width: "200px ", border: "solid black" }}
        >
          <h3>{elemento.title}</h3>
          <h3>{elemento.price}</h3>
          <h5>Cantidad {elemento.quantity}</h5>
          <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={clearCart}>Limpiar carro</button>
      <h2> el total de la compra es: {total} </h2>
      <button> preciona para comprar </button>
    </div>
  );
};

export default CartContainer;
