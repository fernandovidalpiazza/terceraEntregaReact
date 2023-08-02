import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"

const ProductCar = ({ item }) => {

  const handleBuyClick = () => {

    
    toast.success(`Estás en camino a comprar ${item.title}.`, {
      position: "bottom-right", // Posición del toast
      autoClose: 3000, // Tiempo que se muestra el toast (en milisegundos)
      hideProgressBar: true, // Ocultar la barra de progreso
      closeOnClick: true, // Cerrar al hacer clic
      pauseOnHover: true, // Pausar al pasar el mouse por encima
      draggable: true, // Hacer el toast arrastrable
    });
  };


  return (
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained" onClick={handleBuyClick}>
            Comprar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCar;
