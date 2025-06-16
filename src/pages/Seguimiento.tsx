import { Box, Heading, VStack } from "@chakra-ui/react";

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
        <Heading 
          as="h1" 
          size="xl" 
          textAlign="center" 
          color="gray.800"
        >
          Esto es la página de seguimiento
        </Heading>
      </VStack>
    </Box>
  );
}

export default Seguimiento;
