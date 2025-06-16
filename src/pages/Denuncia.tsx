import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IngresarDenuncia = () => {
  const [denuncia, setDenuncia] = useState("");
  const [fecha, setFecha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ denuncia, fecha });

    const numeroSeguimiento = Math.floor(
      10000 + Math.random() * 90000
    ).toString();

    navigate("/", {
      state: {
        showConfirmation: true,
        numeroSeguimiento: numeroSeguimiento,
      },
    });
  };

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
          Ingresar Denuncia
        </Heading>

        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          p={6}
          borderRadius="lg"
          boxShadow="md"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <VStack gap={6} align="stretch">
            <Box>
              <Box as="label" fontSize="lg" fontWeight="bold" color="gray.700" mb={2} display="block">
                Ingrese su denuncia *
              </Box>
              <Textarea
                value={denuncia}
                onChange={(e) => setDenuncia(e.target.value)}
                placeholder="Describa el problema aquí..."
                size="lg"
                minH="120px"
                resize="vertical"
                borderColor="gray.300"
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px #3182ce",
                }}
                required
              />
            </Box>

            <Box>
              <Box as="label" fontSize="lg" fontWeight="bold" color="gray.700" mb={2} display="block">
                Ingrese la fecha del incidente *
              </Box>
              <Input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                size="lg"
                maxW="200px"
                borderColor="gray.300"
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px #3182ce",
                }}
                required
              />
            </Box>

            <Box display="flex" justifyContent="flex-end" pt={4}>
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                px={8}
                _hover={{
                  bg: "blue.600",
                }}
              >
                Enviar Denuncia
              </Button>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default IngresarDenuncia;
