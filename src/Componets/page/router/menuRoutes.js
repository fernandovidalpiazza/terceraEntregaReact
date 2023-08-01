import ItemDetailContainer from "../../../Componets/page/itemDetail/ItemDetailContainer";
import ItemListContainer from "../../../Componets/page/itemListContainer/ItemListContainer"
import CartContainer from "../../../Componets/page/cart/CartContainer";
import  CheckoutContainer from "../chekout/ChekoutContainer";
import NoFound from "../nofound/NoFound";
import { Dashboard } from "../dashboard/Dashboard";

export const routes = [
    {
      id: "home",
      path: "/",
      Element: ItemListContainer,
    },
    {
      id: "category",
      path: "/category/:categoryName",
      Element: ItemListContainer,
    },
    {
      id: "detail",
      path: "/itemDetail/:id",
      Element: ItemDetailContainer,
    },

    {
      id: "cart",
      path: "/cart",
      Element: CartContainer,
    },

    {
      id: "CheckoutContainer",
      path: "/cart/CheckoutContainer",
      Element: CheckoutContainer,
    },

    {
      id: "dashboard",
      path: "/dashboard",
      Element: Dashboard,
    },

  
    {
      id: "nofound",
      path: "*",
      Element: NoFound,
    },
  ];