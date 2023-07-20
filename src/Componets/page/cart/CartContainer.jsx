
import Button from "@mui/material/Button";

import {Link} from "react-router-dom"


const CartContainer = () => {
  return (
    <div><h1>estoy en el carro</h1></div>,
    <Link to ={`chekoutContainer/`}>
    <Button size="small" variant="contained">
      chekaut
    </Button>
  </Link>
  )
}

export default CartContainer