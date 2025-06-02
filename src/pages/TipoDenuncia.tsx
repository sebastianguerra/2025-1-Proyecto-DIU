import MobileNav from "@/components/layout/navigation/mobile_navigation";
import {Box, Text, VStack, Flex} from "@chakra-ui/react";
import {useState } from "react"


type Denuncia = {
    tipo: string;
    descripcion: string;
}

function TiposDenuncia(){
    const [Tipos] = useState<Denuncia[]>([
        {tipo: 'Vias y Pavimento', descripcion: 'Baches, pavimento desgastado'},
        {tipo: 'Recoleccion de basura', descripcion: 'Problemas camion de basura, basura en vía pública, contenedores desbordados'},
        {tipo: 'Semáforos y señaletica', descripcion: 'Semáforo apagado, señal de tránsito vandalizada, señalización faltante en zona escolar'},
        {tipo: 'Riesgos inmediatos', descripcion: 'Fuga de aguia o gas, poste eléctrico a punto de caer o cable expuesto'},
        {tipo: 'Espacios Publicos', descripcion: 'Bancas rotas, falta de poda, ruido excesivo, vertido de aguas servidas'},
        {tipo: 'Vivienda y Construccion', descripcion: 'Obras sin permiso municipal, riesgo de derrumbe, animales abandonad,os, fauna urbana en zonas pobladas'}
    ]);

    return(
        <Flex justify="center" p={4}>
            <VStack>
                {Tipos.map((denuncia,index) =>(
                    <Box
                        key = {index}
                        border = "1px solid gray"
                        borderRadius ="md"
                        p={4}
                        w="100%"
                        maxW="sm"
                        bg = "white"
                    >
                    <VStack align="flex-start">
                        <Text fontWeight="bold" fontFamily="body" fontSize="lg" color="gray.800">
                            {denuncia.tipo}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            {denuncia.descripcion}
                        </Text>
                    </VStack>
                    </Box>
                ))}
            </VStack>
            <MobileNav></MobileNav>
        </Flex>
    );
};

export default TiposDenuncia;