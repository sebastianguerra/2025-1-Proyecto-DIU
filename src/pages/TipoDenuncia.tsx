import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Denuncia = {
  letra: string;
  tipo: string;
  descripcion: string;
  imagen?: string;
  path: string;
};

function TiposDenuncia() {
  const navigate = useNavigate();
  const [Tipos] = useState<Denuncia[]>([
    {
      letra: "A",
      tipo: "Vías y Pavimento",
      descripcion: "Baches, pavimento desgastado",
      imagen: "/ViasYPavimento.webp",
      path: "/IngresarDenuncia",
    },
    {
      letra: "B",
      tipo: "Recolección de basura",
      descripcion:
        "Problemas camión de basura, basura en vía pública, contenedores desbordados",
      imagen: "/Basura.jpg",
      path: "/IngresarDenuncia",
    },
    {
      letra: "C",
      tipo: "Semáforos y señalética",
      descripcion:
        "Semáforo apagado, señal de tránsito vandalizada, señalización faltante en zona escolar",
      imagen: "/Semaforo.jpg",
      path: "/IngresarDenuncia",
    },
    {
      letra: "D",
      tipo: "Riesgos inmediatos",
      descripcion:
        "Fuga de agua o gas, poste eléctrico a punto de caer o cable expuesto",
      imagen: "/Riesgos.avif",
      path: "/IngresarDenuncia",
    },
    {
      letra: "E",
      tipo: "Espacios Públicos",
      descripcion:
        "Bancas rotas, falta de poda, ruido excesivo, vertido de aguas servidas",
      imagen: "/EspaciosPublicos.avif",
      path: "/IngresarDenuncia",
    },
    {
      letra: "F",
      tipo: "Vivienda y Construcción",
      descripcion:
        "Obras sin permiso municipal, riesgo de derrumbe, animales abandonados, fauna urbana en zonas pobladas",
      imagen: "/Vivienda.jpg",
      path: "/IngresarDenuncia",
    },
  ]);

  const handleDenunciaClick = (path: string) => {
    navigate(path);
  };

  return (
    <Flex direction="column" minH="100vh">
      <Flex justify="center" p={4} flex="1">
        <VStack gap={4} w="100%" maxW="md">
          {Tipos.map((denuncia, index) => (
            <Box
              as="button"
              key={index}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              p={4}
              w="100%"
              bg="white"
              boxShadow="sm"
              _hover={{
                boxShadow: "md",
                bg: "gray.50",
                cursor: "pointer",
              }}
              _active={{
                bg: "gray.100",
              }}
              onClick={() => handleDenunciaClick(denuncia.path)}
              textAlign="left"
            >
              <Flex align="center" mb={3}>
                <Flex
                  align="center"
                  justify="center"
                  w="30px"
                  h="30px"
                  bg="blue.500"
                  color="white"
                  borderRadius="full"
                  mr={3}
                  fontWeight="bold"
                >
                  {denuncia.letra}
                </Flex>
                <Text fontWeight="bold" fontSize="lg" color="gray.800">
                  {denuncia.tipo}
                </Text>
              </Flex>

              <Image
                src={denuncia.imagen}
                alt={denuncia.tipo}
                borderRadius="md"
                mb={3}
                objectFit="cover"
                h="150px"
                w="100%"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/placeholder-image.jpg";
                }}
              />

              <Text fontSize="sm" color="gray.600">
                {denuncia.descripcion}
              </Text>
            </Box>
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
}

export default TiposDenuncia;
