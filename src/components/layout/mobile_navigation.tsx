import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { LuCircleUserRound, LuOctagonAlert, LuScanEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const buttons = [
  { to: "/seguimiento", icon: <LuScanEye />, label: "Seguimiento" },
  { to: "/", icon: <LuOctagonAlert />, label: "Denunciar" },
  { to: "/perfil", icon: <LuCircleUserRound />, label: "Perfil" },
]

function MobileNav() {
  return (
    <>
      <Box
        position="fixed"
        bottom="0"
        w="full"
        bgColor="white"
        borderTopWidth="0.5px"
        borderTopColor="black"
        padding={4}
      >
        <HStack justify="space-between" w="full">
          {buttons.map((button) => (
            <Link key={button.label} to={button.to}>
              <VStack
                alignItems="center"
                justifyContent="space-between"
                color="black"
                gap={0.1}
                _hover={{ color: "teal.500" }}
              >
                <Icon
                  aria-label={button.label}
                  colorScheme="teal"
                  size="md"
                >
                  {button.icon}
                </Icon>
                <Text fontSize="xs">{button.label}</Text>
              </VStack>
            </Link>
          ))}
        </HStack>
      </Box>
    </>
  );
}
export default MobileNav;
