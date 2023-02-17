import Navbar from "../Navbar/Navbar";
import HomePage from "../../pages/HomePage/HomePage";
import SavePage from "../../pages/SavePage";
import LoginPage from "../../pages/LoginPage";
import Footer from "../Footer";
import styled from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../contexts/AuthContext";
import { getAuthToken } from "../../constants/utils";
import { getUser } from "../../apis/WebAPI";

library.add(fab, fas);

const Container = styled.div`
  width: 98%;
  margin: 0 auto;
  padding: 12vh 0 4vh;
`;

function App() {
  const { theme } = useContext(ThemeContext);
  const [user, setUser] = useState(-1);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (getAuthToken()) {
      setIsLoading(true)
      getUser().then((data) => {
        if (data.status !== "error") {
          setUser(data.id);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
    }
  }, []);

  const style = {
    background: theme.background_main,
    color: theme.font_main,
  };

  return (
    <div className="App" style={style}>
      <AuthContext.Provider value={{ user, setUser }}>
        <HashRouter>
          <Navbar isLoading={isLoading}/>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/save" element={<SavePage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Container>
          <Footer />
        </HashRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
