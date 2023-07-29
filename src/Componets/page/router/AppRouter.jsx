import { Routes, Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import { routes } from "../../../Componets/page/router/menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;

