import Navbar from "../Navbar/Navbar";
import HomePage from "../../pages/HomePage/HomePage";
import AboutMe from "../../pages/AboutMe";
import styled from "styled-components";
import { HashRouter, Routes, Route} from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const Container = styled.div`
  width: 97%;
  margin: 0 auto;
  padding: 12vh 0 3vh;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`;

function App() {
  const { theme } = useContext(ThemeContext);

  const style = {
    background: theme.background_main,
    color: theme.font_main
  }

  return (
    <div className="App" style={style}>
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