import Map from "../../components/Map"
import styled from "styled-components";

const ParkingContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }
`;

const InfoContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-column: 1/2;
  }
`;

const MapContainer = styled.div`
  border: 1px solid blue;
  @media screen and (min-width: 768px) {
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