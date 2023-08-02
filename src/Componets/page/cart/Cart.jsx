import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cartItems, clearCart, deleteItem, totalPrice }) => {

  const handleClearCart = () => {
    cartItems.length === 0
      ? // Mostrar alerta con SweetAlert2 si el carrito está vacío usando ternario
        Swal.fire({
          icon: "warning",
          title: "Carrito vacío",
          text: "No tienes ningún artículo en el carrito",
          confirmButtonText: "Aceptar",
        })
      : // Si el carrito no está vacío, limpiarlo
        clearCart();
  };



  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h2" style={{ marginBottom: "20px" }}>
        Falta poco para realizar tu compra
      </Typography>
      {cartItems.map((elemento) => (
        <div key={elemento.id} style={{ marginBottom: "10px" }}>
          <Typography variant="h3">{elemento.title}</Typography>
          <Typography style={{ fontSize: "18px" }}>
            ${elemento.price}
          </Typography>
          <Typography style={{ fontSize: "16px", color: "#777" }}>
            Cantidad {elemento.quantity}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteItem(elemento.id)}
            style={{ marginTop: "10px" }}
          >
            Eliminar
          </Button>
        </div>
      ))}

      <Button
        variant="contained"
        color="secondary"
        onClick={clearCart}
        style={{ marginTop: "20px" }}
      >
        Limpiar carro
      </Button>
      <Typography variant="h4" style={{ marginTop: "20px", color: "blue" }}>
        el total de la compra es: {totalPrice}
      </Typography>
      <Link to="/cart/CheckoutContainer">
        <Button
          variant="contained"
          color="success"
          style={{ marginTop: "20px" }}
        >
          presiona para comprar
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
