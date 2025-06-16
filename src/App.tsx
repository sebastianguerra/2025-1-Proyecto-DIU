import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import MobileNav from "./components/layout/mobile_navigation";
import Denuncia from "./pages/Denuncia";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Seguimiento from "./pages/Seguimiento";
import TipoDenuncia from "./pages/TipoDenuncia";
import { Box } from "@chakra-ui/react";

const routes = [
  {
    path: "/",
    element: <Home />,
    title: "MuniDenuncia",
    withBackArrow: false,
  },
  {
    path: "/TipoDenuncia",
    element: <TipoDenuncia />,
    title: "Tipo de Denuncia",
    withBackArrow: true,
  },
  {
    path: "/IngresarDenuncia",
    element: <Denuncia />,
    title: "Ingresar Denuncia",
    withBackArrow: true,
  },
  {
    path: "/Seguimiento",
    element: <Seguimiento />,
    title: "Denuncias activas",
    withBackArrow: false,
  },
  {
    path: "/Perfil",
    element: <Perfil />,
    title: "Perfil",
    withBackArrow: false,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    title: "",
    withBackArrow: false,
  },
];

function App() {
  return (
    <Routes>
      {routes.map(({ path, title, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              <Header title={title} />
              <Box w="100vw" h="100vh" py={20}>
                {element}
              </Box>
              <MobileNav />
            </>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
