import { useState } from "react"

import ItemList from "./ItemList"


 
  const ItemListContainer = () => {
    const [products , setProducts] = useState([])
    const [ edad , setEdad] = useState(20)
    return (
      < ItemList edad = {edad} setEdad ={setEdad} />
    )
  }
  
  export default ItemListContainer






