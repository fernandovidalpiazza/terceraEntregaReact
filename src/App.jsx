import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Componets/page/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componets/page/itemDetail/ItemDetailContainer";
import CartContainer from "./Componets/page/cart/CartContainer";
import ButtonAppBar from "./Componets/layout/navbar/ButtonAppBar";
import NoFound from "./Componets/page/nofound/NoFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ButtonAppBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>
        <Route path="*" element={<NoFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
