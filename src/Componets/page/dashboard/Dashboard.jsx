import { Button, ButtonBase } from "@mui/material"
import { products } from "../../../productsMock"
import { db } from "../../../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { ref } from "yup"



export const Dashboard = () => {
    const renellar = ()=>{
        let refColletion = collection(db,"products")
        products.forEach((prod)=>{
            addDoc (refColletion,prod)
        }
        )
    }


  return (
    <div>

 <h1>Admin </h1>
<ButtonBase  onClick={renellar}>cargar articulos para la venta</ButtonBase>
    </div>
  )
}
