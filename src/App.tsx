import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import MobileNav from "./components/layout/mobile_navigation";
import Denuncia from "./pages/Denuncia";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Seguimiento from "./pages/Seguimiento";
import TipoDenuncia from "./pages/TipoDenuncia";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Header />
      <Box w="100vw" h="100vh" py={20}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TipoDenuncia" element={<TipoDenuncia />} />
          <Route path="/IngresarDenuncia" element={<Denuncia />} />
          <Route path="/Seguimiento" element={<Seguimiento />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
      <MobileNav />
    </>
  );
}

export default App;
