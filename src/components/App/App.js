import Navbar from "../Navbar/Navbar";
import HomePage from "../../pages/HomePage/HomePage";
import AboutMe from "../../pages/AboutMe";
import styled from "styled-components";
import { HashRouter, Routes, Route} from "react-router-dom"

const Container = styled.div`
  width: 97%;
  margin: 0 auto;
  padding-top: 14vh;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`;

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;