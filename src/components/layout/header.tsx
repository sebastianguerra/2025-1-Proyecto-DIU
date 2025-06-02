import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuChrome } from "react-icons/lu";

function Header() {
  return (
    <Box
      position="fixed"
      top="0"
      w="full"
      bgColor="#f1f2f4"  // gris claro tipo fondo de chat
      borderBottomWidth="0.5px"
      borderBottomColor="black"
      padding={4}
      zIndex={10}  // para estar por encima del contenido
    >
      <HStack justify="space-between" w="full">
        {/* Botón a Inicio con ícono de casa */}
        <Link to="/">
          <IconButton
            aria-label="Inicio"
            colorScheme="teal"
            variant="ghost"
            size="lg"
          >
            <LuChrome />
          </IconButton>
        </Link>

        {/* Título al centro */}
        <Text fontSize="xl" fontWeight="bold" color="#333">
          MuniDenuncia
        </Text>

        {/* Espacio derecho vacío o para futuro (puedes agregar otro botón aquí) */}
        <Box w="40px" />  {/* mantiene el equilibrio visual */}
      </HStack>
    </Box>
  );
}

export default Header;