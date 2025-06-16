import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { House } from 'lucide-react';


function Header({ title }: { title: string }) {
  return (
    <Box
      position="fixed"
      top="0"
      w="full"
      bgColor="#f1f2f4"
      borderBottomWidth="0.5px"
      borderBottomColor="black"
      padding={4}
      zIndex={10} 
    >
      <HStack justify="space-between" w="full">
        <Link to="/">
          <IconButton
            aria-label="Inicio"
            colorScheme="teal"
            variant="ghost"
            size="lg"
          >
            <House />
          </IconButton>
        </Link>
        <Text fontSize="xl" fontWeight="bold" color="#333">
          {title}
        </Text>
        <Box w="40px" /> 
      </HStack>
    </Box>
  );
}

export default Header;
