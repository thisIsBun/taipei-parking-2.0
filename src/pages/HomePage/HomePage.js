import Map from "../../components/Map"
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";

const ParkingContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column-reverse;
  ${MEDIA_QUERY} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }
`;

const InfoContainer = styled.div`
  // border: 1px solid green;
  width: 100%;
  ${MEDIA_QUERY} {
    grid-column: 1/2;
  }
`;

const MapContainer = styled.div`
  // border: 1px solid blue;
  ${MEDIA_QUERY} {
    padding: 2px;
    grid-column: 2/3;
  }
`;

export default function HomePage() {
  return (
    <ParkingContainer>
      <InfoContainer>Info</InfoContainer>
      <MapContainer>
        <Map/>
      </MapContainer>
    </ParkingContainer>
  );
}