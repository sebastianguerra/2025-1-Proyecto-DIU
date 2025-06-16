import { Box } from "@chakra-ui/react";
import { Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

type STATUS = {
  type: "accepted";
  location: { lat: number; lng: number };
} | {
  type: "denied";
  message: string;
} | {
  type: "unsupported";
} | {
  type: "loading";
} | {
  type: "error";
  message: string;
};

function Map() {
  const [status, setStatus] = useState<STATUS>({ type: "loading" });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setStatus({
            type: "accepted",
            location: { lat: latitude, lng: longitude },
          });
        },
        (err) => {
          const code = err.code;
          if (code === 1) { // PERMISSION_DENIED
            setStatus({
              type: "denied",
              message: "Permiso denegado para acceder a la ubicación.",
            });
          } else if (code === 2) { // POSITION_UNAVAILABLE
            setStatus({ type: "error", message: "Ubicación no disponible." });
          } else if (code === 3) { // TIMEOUT
            setStatus({
              type: "error",
              message: "Tiempo de espera agotado para obtener la ubicación.",
            });
          } else {
            setStatus({
              type: "error",
              message: "Error desconocido al obtener la ubicación.",
            });
          }
          console.error(err);
        },
      );
    } else {
      setStatus({ type: "unsupported" });
    }
  }, []);

  if (status.type === "loading") {
    return <div>Cargando mapa...</div>;
  }

  const defaults = status.type === "accepted"
    ? { zoom: 16, center: status.location }
    : { zoom: 12, center: { lat: -33.45694, lng: -70.64827 } }; // Santiago, Chile

  return (
    <Box w="full" h="full">
      <GoogleMap
        style={{ width: "100%", height: "100%" }}
        defaultCenter={defaults.center}
        defaultZoom={defaults.zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {status.type === "accepted" && <Marker position={status.location} />}
      </GoogleMap>
    </Box>
  );
}

export default Map;
