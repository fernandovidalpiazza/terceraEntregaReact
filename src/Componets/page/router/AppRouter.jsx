import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "../../layout/navbar/ButtonAppBar";

import {routes} from "../../../Componets/page/router/menuRoutes"

const AppRouter = () => {
  
  return (
    <Routes>
      <Route element={<ButtonAppBar />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
     
    </Routes>
  );
};

export default AppRouter;
