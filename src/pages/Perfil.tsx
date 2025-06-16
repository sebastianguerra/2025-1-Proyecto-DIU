import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";

function Perfil() {
  return (
    <Box
      maxW="600px"
      mx="auto"
      p={5}
      minH="100vh"
      pt={20}
      pb={20}
    >
      <VStack gap={8} align="stretch">
        <Heading 
          as="h1" 
          size="xl" 
          textAlign="center" 
          color="gray.800"
        >
          Perfil
        </Heading>

        <VStack gap={6}>
          <Box
            w="150px"
            h="150px"
            borderRadius="full"
            overflow="hidden"
            border="3px solid"
            borderColor="gray.200"
            boxShadow="lg"
          >
            <Image
              src="/FotoDePerfil.png"
              alt="Foto de perfil"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          <VStack gap={4} align="center">
            <Heading as="h2" size="lg" color="gray.700">
              Nombre Apellido
            </Heading>

            <VStack gap={3} align="center">
              <HStack gap={2}>
                <Text fontWeight="bold" color="gray.600">Comuna:</Text>
                <Text color="gray.800">Santiago</Text>
              </HStack>
              
              <HStack gap={2}>
                <Text fontWeight="bold" color="gray.600">Dirección:</Text>
                <Text color="gray.800">Calle Siempre Viva 742</Text>
              </HStack>
            </VStack>
          </VStack>

          <Box h="1px" bg="gray.200" w="100%" />

          <VStack gap={4} align="center">
            <Heading as="h3" size="md" color="gray.700">
              Contactos
            </Heading>
            
            <VStack gap={3} align="center">
              <HStack gap={2}>
                <Text fontWeight="bold" color="gray.600">Celular:</Text>
                <Text color="gray.800">+56 9 XXXX XXXX</Text>
              </HStack>

              <HStack gap={2}>
                <Text fontWeight="bold" color="gray.600">Correo:</Text>
                <Text color="gray.800">miCorreo@gmail.com</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Perfil;
