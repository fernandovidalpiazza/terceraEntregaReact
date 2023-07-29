import React from "react";
import "./cart.css";
import { Button, Typography } from "@mui/material";

const Cart = ({ cartItems, clearCart, deleteItem, totalPrice }) => {
  return (
    <div className="container">
      <Typography variant="h2" className="title">
        Estoy en el carrito
      </Typography>
      {cartItems.map((elemento) => (
        <div key={elemento.id} className="item">
          <Typography variant="h3">{elemento.title}</Typography>
          <Typography className="price"> ${elemento.price} </Typography>
          <Typography className="quantity"> Cantidad {elemento.quantity} </Typography>
          <Button className="button" onClick={() => deleteItem(elemento.id)}>
            Eliminar
          </Button>
        </div>
      ))}
      {cartItems.length === 0 && <Typography className="empty-cart">Your cart is empty.</Typography>}
      <Button className="button" onClick={clearCart}>
        Limpiar carro
      </Button>
      <Typography className="total"> el total de la compra es: {totalPrice} </Typography>
      <Button className="purchase-button"> presiona para comprar </Button>
    </div>
  );
};

export default Cart;

