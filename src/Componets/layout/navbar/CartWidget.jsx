import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"

export default function SimpleBadge() {
  return (
    
    <Link to="cart">
    <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon color="witeh" />
    </Badge>
    </Link>
  );
}
