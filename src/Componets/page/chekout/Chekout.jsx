// Checkout.jsx
import { Button, TextField } from "@mui/material";
import { Message } from "@mui/icons-material";
import { useOrderContext } from "../../context/OrderContext"
const Checkout = ({ handleChange, handleSubmit, errors }) => {
  const { orderId } = useOrderContext(); 

  return (
    <div style={{ padding: "50px" }}>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            name="apellido"
            onChange={handleChange}
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <Button type="submit" variant="contained">
            Comprar
          </Button>
        </form>
      ) : (
        <h3> Su número de compra es: {orderId} </h3>
      )}
    </div>
  );
};

export default Checkout;
