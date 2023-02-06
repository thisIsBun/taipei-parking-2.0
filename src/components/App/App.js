import Navbar from "../Navbar/Navbar";
import Map from "../../pages/Map"
import AboutMe from "../../pages/AboutMe";
import styled from "styled-components";
import { HashRouter, Routes, Route} from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 13vh;
`

function App() {
  return (
    <div className="App">
      <Container>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;