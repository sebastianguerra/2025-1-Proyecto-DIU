import { Box, HStack, IconButton } from "@chakra-ui/react";
import { LuBookMarked, LuCirclePlus, LuLibraryBig } from "react-icons/lu";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <Box
        position="fixed"
        bottom= "0"
        w="full"
        bgColor= "transparent"
        borderTopWidth="0.5px"
        borderTopColor="black"
        padding={4}
        >
        <HStack justify="space-between" w="full">
            <Link to ="/seguimiento">
                <IconButton
                    colorScheme="teal"
                    variant="ghost"
                    size="lg"
                    > <LuLibraryBig />
                </IconButton>
            </Link>

            <Link to ="/denuncia">
                <IconButton
                    colorScheme="teal"
                    variant="ghost"
                    size="lg"
                    > <LuCirclePlus />
                </IconButton>
            </Link>

            <Link to ="/perfil">
                <IconButton
                    colorScheme="teal"
                    variant="ghost"
                    size="lg"
                    > <LuBookMarked />
                </IconButton>
            </Link>
      </HStack>
      </Box>
    </>
  );
}
export default MobileNav;
