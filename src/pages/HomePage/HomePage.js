import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map";
import Loader from "../../components/Loader";
import { API_KEY_MAP } from "../../constants/.env.local";

const libraries = ["places"]

export default function HomePage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY_MAP,
    libraries: libraries,
  });
  return !isLoaded ? (
    <Loader
      borderColor="#04AA6D"
      borderTopColor="rgba(0, 0, 0, 0)"
      width="100%"
      height="200px"
    />
  ) : (
    <Map />
  );
}
