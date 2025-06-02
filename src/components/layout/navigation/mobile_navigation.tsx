import { Box, HStack, IconButton } from "@chakra-ui/react";
import { LuScanEye, LuOctagonAlert, LuCircleUserRound } from "react-icons/lu";
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
                    > <LuScanEye />
                </IconButton>
            </Link>

            <Link to ="/IngresarDenuncia">
                <IconButton
                    colorScheme="teal"
                    variant="ghost"
                    size="lg"
                    > <LuOctagonAlert />
                </IconButton>
            </Link>

            <Link to ="/perfil">
                <IconButton
                    colorScheme="teal"
                    variant="ghost"
                    size="lg"
                    > <LuCircleUserRound />
                </IconButton>
            </Link>
      </HStack>
      </Box>
    </>
  );
}
export default MobileNav;
