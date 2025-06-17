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
  },
  {
    path: "/TipoDenuncia",
    element: <TipoDenuncia />,
    title: "Tipo de Denuncia",
    backArrowTo: "/",
  },
  {
    path: "/IngresarDenuncia",
    element: <Denuncia />,
    title: "Ingresar Denuncia",
    backArrowTo: "/TipoDenuncia",
  },
  {
    path: "/Seguimiento",
    element: <Seguimiento />,
    title: "Denuncias activas",
  },
  {
    path: "/Perfil",
    element: <Perfil />,
    title: "Perfil",
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    title: "",
  },
];

function App() {
  return (
    <Routes>
      {routes.map(({ path, title, element, backArrowTo }) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              <Header title={title} backArrowTo={backArrowTo} />
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
