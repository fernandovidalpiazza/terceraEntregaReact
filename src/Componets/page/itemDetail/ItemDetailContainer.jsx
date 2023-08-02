import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { Box } from "@mui/material";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let cantidadEnCarro = getQuantityById(id);

  useEffect(() => {
    let refColletion = collection(db, "products"); // Asegúrate de poner el nombre correcto de la colección
    let refDoc = doc(refColletion, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarro={cantidadEnCarro}
      />
    </Box>
  );
};

export default ItemDetailContainer;
