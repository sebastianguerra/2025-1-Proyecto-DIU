import { Box, VStack } from "@chakra-ui/react";
import Map from "@/components/Map";

function Seguimiento() {
  return (
    <Box
      maxW="600px"
      mx="auto"
      p={5}
      minH="100vh"
      pt={20}
      pb={20}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack gap={6}>
        <Map />
      </VStack>
    </Box>
  );
}

export default Seguimiento;
