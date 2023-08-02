import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress"; 
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

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
        setIsLoading(false); 
      });
  }, [categoryName]);

  return (
    <div style={{ textAlign: "center" }}>
     
      <Typography variant="h2" component="h1" style={{ fontFamily: "Archivo, sans-serif" }}>
        Productos para importar
      </Typography>
     
      {isLoading ? <CircularProgress /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
