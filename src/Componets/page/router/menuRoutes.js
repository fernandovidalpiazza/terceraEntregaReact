import ItemDetailContainer from "../../../Componets/page/itemDetail/ItemDetailContainer";
import ItemListContainer from "../../../Componets/page/itemListContainer/ItemListContainer"
import CartContainer from "../../../Componets/page/cart/CartContainer";
import chekoutContainer from "../chekout/chekoutContainer";
import NoFound from "../nofound/NoFound";

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
      path: "itemDetail/:id",
      Element: ItemDetailContainer,
    },

    {
      id: "cart",
      path: "/cart",
      Element: CartContainer,
    },

    {
      id: "checkaut",
      path: "cart/chekoutContainer",
      Element: chekoutContainer,
    },

  
    {
      id: "nofound",
      path: "*",
      Element: NoFound,
    },
  ];