import { Box, Heading, VStack } from "@chakra-ui/react";
import ConfirmacionModal from "@/components/layout/ConfirmacionModal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [numeroSeguimiento, setNumeroSeguimiento] = useState("");

  useEffect(() => {
    if (location.state?.showConfirmation) {
      setNumeroSeguimiento(location.state.numeroSeguimiento);
      setShowModal(true);

      window.history.replaceState({}, "");
    }
  }, [location]);

  return (
    <Box
      maxW="600px"
      mx="auto"
      p={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      minH="100vh"
      pt={20}
    >
      <VStack gap={6}>
        <Heading 
          as="h1" 
          size="2xl" 
          textAlign="center" 
          color="gray.800"
        >
          Página Principal
        </Heading>
      </VStack>

      <ConfirmacionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        numeroSeguimiento={numeroSeguimiento}
      />
    </Box>
  );
}

export default Home;
