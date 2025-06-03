import { Center } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import MobileNav from "./components/layout/navigation/mobile_navigation";
import Denuncia from "./pages/Denuncia";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Seguimiento from "./pages/Seguimiento";
import TipoDenuncia from "./pages/TipoDenuncia";

function App() {
  return (
    <>
      <Header />
      <Center w="full" h="100vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/IngresarDenuncia" element={<Denuncia />} />
          <Route path="/Seguimiento" element={<Seguimiento />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/TipoDenuncia" element={<TipoDenuncia />} />
        </Routes>
      </Center>
      <MobileNav />
    </>
  );
}

export default App;
