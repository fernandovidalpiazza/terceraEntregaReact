import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress"; // Importa el componente CircularProgress de Material-UI
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Agrega el estado para controlar el estado de carga

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    let productsColletion = collection(db, "products");

    if (!categoryName) {
      consulta = productsColletion;
    } else {
      consulta = query(productsColletion, where("category", "==", categoryName));
    }

    let ref = collection(db, "products");
    getDocs(consulta)
      .then((res) => {
        let arrayProductos = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setItems(arrayProductos);
      })
      .finally(() => {
        setIsLoading(false); // Cuando la carga se completa o falla, establece isLoading en false
      });
  }, [categoryName]);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Utiliza el componente Typography de Material-UI para el título */}
      <Typography variant="h2" component="h1" style={{ fontFamily: "Archivo, sans-serif" }}>
        Productos para importar
      </Typography>
      {/* Muestra el spinner mientras isLoading es true, de lo contrario muestra el contenido */}
      {isLoading ? <CircularProgress /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
