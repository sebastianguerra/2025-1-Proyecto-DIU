import Map from "@/components/Map";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Map />
      <Button
        position="fixed"
        bottom="100px"
        left="50%"
        transform="translateX(-50%)"
        colorPalette="purple"
        size="xl"
        borderRadius={100}
        px={8}
        asChild
      >
        <Link to="/TipoDenuncia">
          HACER DENUNCIA
        </Link>
      </Button>
    </>
  );
}

export default Home;
