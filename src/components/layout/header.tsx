import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header(
  { title, backArrowTo }: { title: string; backArrowTo?: string | undefined },
) {
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
        {backArrowTo && (
          <IconButton
            aria-label="Volver"
            colorScheme="teal"
            variant="ghost"
            size="lg"
            asChild
          >
            <Link to={backArrowTo}>
              <LuArrowLeft />
            </Link>
          </IconButton>
        )}
        <Text fontSize="xl" fontWeight="bold" color="#333">
          {title}
        </Text>
        <Box w="40px" />
      </HStack>
    </Box>
  );
}

export default Header;
