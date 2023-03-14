import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import SavePage from "./pages/SavePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import styled from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "./contexts/AuthContext";
import { auth } from "./constants/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getAuthToken } from "./constants/utils";


library.add(fas, far);

const Container = styled.div`
  margin: 0 auto;
  padding: 11.5vh 1% 4vh;
  background: ${(props) => props.$color.background_main};
`;

function App() {
  const { theme } = useContext(ThemeContext);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const localUid = getAuthToken();
    if (localUid) {
      setIsLoading(true);
      onAuthStateChanged(auth, (user) => {
        if (user.uid === localUid) {
          setUser(user.uid);
        }
        setIsLoading(false);
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
          <Navbar isLoading={isLoading} />
          <Container $color={theme}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/save"
                element={
                  <ProtectedRoute user={user}>
                    <SavePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </Container>
          <Footer />
        </HashRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
