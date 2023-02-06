import Map from "../../components/Map"
import React from "react";
import styled from "styled-components";

const ParkingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  border: 1px solid red;
`;

const Info = styled.div`
  grid-column: 1/2;
  border: 1px solid red;
`;

const MapWrapper = styled.div`
  padding: 2px;
  grid-column: 2/3;
  border: 1px solid #e7e6e6;
`;

export default function HomePage() {
  return (
    <ParkingContainer>
      <Info />
      <MapWrapper>
        <Map/>
      </MapWrapper>
    </ParkingContainer>
  );
}