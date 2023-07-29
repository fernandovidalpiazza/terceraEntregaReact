import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

let consulta;
let productsColletion = collection (db, "products");

if (!categoryName){
  consulta = productsColletion

}else{
  consulta = query (productsColletion, where( "category", "==",categoryName))
}

    let ref = collection(db, "products");
    getDocs(consulta).then((res) => {
     
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems (arrayProductos)
    });
  }, [categoryName]);

  return (
    <>
      <h1> productos</h1>
      < ItemList items={items} /> ;
    </>
  );
};

export default ItemListContainer;
