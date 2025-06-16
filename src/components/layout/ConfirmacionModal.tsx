import {
  Button,
  Box,
  Text,
  VStack,
  Portal,
} from "@chakra-ui/react";
import React from 'react';

interface ConfirmacionModalProps {
  isOpen: boolean;
  onClose: () => void;
  numeroSeguimiento: string;
}

const ConfirmacionModal: React.FC<ConfirmacionModalProps> = ({ 
  isOpen, 
  onClose, 
  numeroSeguimiento 
}) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={1000}
      >
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          maxW="400px"
          w="90%"
          textAlign="center"
          boxShadow="2xl"
        >
          <VStack gap={6}>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Denuncia ingresada correctamente!
            </Text>
            <Text fontSize="lg" color="gray.600">
              Número de seguimiento: <Text as="span" fontWeight="bold">{numeroSeguimiento}</Text>
            </Text>
            <Button
              colorScheme="blue"
              onClick={onClose}
              size="lg"
              px={8}
            >
              Aceptar
            </Button>
          </VStack>
        </Box>
      </Box>
    </Portal>
  );
};

export default ConfirmacionModal;