import Map from "../../components/Map"
import React from "react";
import styled from "styled-components";

const ParkingContainer = styled.div`
  border: 1px solid red;
  display: flex;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }
`;

const Info = styled.div`
  border: 1px solid red;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-column: 1/2;
  }
`;

const MapWrapper = styled.div`
  ${Map} {
    display: none;
  }
  @media screen and (min-width: 768px) {
    padding: 2px;
    grid-column: 2/3;
    border: 1px solid #e7e6e6;
  }
`;

export default function HomePage() {
  return (
    <ParkingContainer>
      <Info>Info</Info>
      <MapWrapper>
        <Map/>
      </MapWrapper>
    </ParkingContainer>
  );
}