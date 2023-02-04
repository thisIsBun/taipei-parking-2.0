import Map from "../Map"
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`

const Nav = styled.header`
  width: 100%;
  height: 13vh;
  border: 1px solid red;
`

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

function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <ParkingContainer>
          <Info />
          <MapWrapper>
            <Map />
          </MapWrapper>
        </ParkingContainer>
      </Container>
    </div>
  );
}

export default App;