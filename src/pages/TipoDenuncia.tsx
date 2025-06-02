import MobileNav from "@/components/layout/navigation/mobile_navigation";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";
import {useState } from "react"
import "./TipoDenuncia.css";

// Importa tus imágenes
import viasPavimentoImg from "@/assets/ViasYPavimento.webp"
import basuraImg from "@/assets/basura.jpg";

type Denuncia = {
    letra: string;
    tipo: string;
    descripcion: string;
    imagen?: string; // Imagen opcional
}

function TiposDenuncia(){
    const [Tipos] = useState<Denuncia[]>([
     { 
      letra: 'A',
      tipo: 'Vías y Pavimento', 
      descripcion: 'Baches, pavimento desgastado',
      imagen: viasPavimentoImg
    },
    { 
      letra: 'B',
      tipo: 'Recolección de basura', 
      descripcion: 'Problemas camión de basura, basura en vía pública, contenedores desbordados',
      imagen: basuraImg
    },
    { 
      letra: 'C',
      tipo: 'Semáforos y señalética', 
      descripcion: 'Semáforo apagado, señal de tránsito vandalizada, señalización faltante en zona escolar',
    //imagen: semaforosImg
    },
    { 
      letra: 'D',
      tipo: 'Riesgos inmediatos', 
      descripcion: 'Fuga de agua o gas, poste eléctrico a punto de caer o cable expuesto',
    //imagen: riesgosImg
    },
    { 
      letra: 'E',
      tipo: 'Espacios Públicos', 
      descripcion: 'Bancas rotas, falta de poda, ruido excesivo, vertido de aguas servidas',
    //imagen: espaciosPublicosImg
    },
    { 
      letra: 'F',
      tipo: 'Vivienda y Construcción', 
      descripcion: 'Obras sin permiso municipal, riesgo de derrumbe, animales abandonados, fauna urbana en zonas pobladas',
    //imagen: viviendaImg
    }
    ]);

    return (
    <Flex direction="column" minH="100vh">
      <Flex justify="center" p={4} flex="1">
        <VStack gap={4} w="100%" maxW="md">
          {Tipos.map((denuncia, index) => (
            <Box
              key={index}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              p={4}
              w="100%"
              bg="white"
              boxShadow="sm"
              _hover={{ boxShadow: 'md' }}
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
                  (e.currentTarget as HTMLImageElement).src = "/placeholder-image.jpg";
                }}
              />
              
              <Text fontSize="sm" color="gray.600">
                {denuncia.descripcion}
              </Text>
            </Box>
          ))}
        </VStack>
      </Flex>
      
      <MobileNav />
    </Flex>
  );
};

export default TiposDenuncia;

// Importa tus imágenes
/*
import basuraImg from "@/assets/denuncias/basura.jpg";
import semaforosImg from "@/assets/denuncias/semaforos.jpg";
import riesgosImg from "@/assets/denuncias/riesgos.jpg";
import espaciosPublicosImg from "@/assets/denuncias/espacios-publicos.jpg";
import viviendaImg from "@/assets/denuncias/vivienda.jpg";*/