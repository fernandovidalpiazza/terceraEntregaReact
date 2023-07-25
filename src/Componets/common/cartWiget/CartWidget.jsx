import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from "../../context/CartContex";

export default function SimpleBadge() {
  const {  getTotalQuantity } = useContext(CartContext); 
  let total =  getTotalQuantity ()

  return (
    <Link to="cart">
      <Badge badgeContent={total} color="primary"  >
        <ShoppingCartIcon color="witeh" />
      </Badge>
    </Link>
  );
}
