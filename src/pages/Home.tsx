import { Box, VStack } from "@chakra-ui/react";
import ConfirmacionModal from "@/components/layout/ConfirmacionModal";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Map from "@/components/Map";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [numeroSeguimiento, setNumeroSeguimiento] = useState("");

  useEffect(() => {
    if (location.state?.showConfirmation) {
      setNumeroSeguimiento(location.state.numeroSeguimiento);
      setShowModal(true);

      navigate("/", { replace: true });
    }
  }, [location, navigate]);

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
        <Map />
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
