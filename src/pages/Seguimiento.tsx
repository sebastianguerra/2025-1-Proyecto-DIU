import { Box, VStack, Heading, Flex, Text} from "@chakra-ui/react";

type Denuncia = {
  numero: number;
  tipo: string;
  estado: "Pendientes" | "En revisión" | "Resueltas";
}

const denuncias: Denuncia[] = [{
  numero: 1234,
  tipo: "Vías y pavimento",
  estado: "Pendientes",
},
{
  numero: 5678,
  tipo: "Recolección de Basura",
  estado: "Pendientes",
},
{
  numero: 9012,
  tipo: "Semáforos y señalética",
  estado: "En revisión"
},
{
  numero: 3456,
  tipo: "Riesgos Inmediatos",
  estado: "Resueltas",
}];

const estados: ("Pendientes" | "En revisión" | "Resueltas")[] = [
  "Pendientes",
  "En revisión",
  "Resueltas",
];


function Seguimiento() {
  return (
    <Flex justify = "center" p={4}>
      <VStack align="stretch" w="100%" maxW="md">
        {estados.map((estado) => (
          <Box key={estado}>
            <Heading size="md" mb={4}>
              {estado}
            </Heading>
            <VStack align="stretch">
              {denuncias.filter((denuncia) => denuncia.estado === estado)
              .map((denuncia) => (
                <Box
                  key = {denuncia.numero}
                  border = "1px solid gray"
                  borderRadius ="md"
                  p={4}
                  w="100%"
                  maxW="sm"
                  bg = "white"
                >
                  <Text fontWeight="bold">N° Denuncia: {denuncia.numero}</Text>
                  <Text>Tipo: {denuncia.tipo}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}

export default Seguimiento;
