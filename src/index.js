import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from "./contexts/ThemeContext"
import { ParkProvider } from "./contexts/ParkContext";

ReactDOM.render(
  <ParkProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ParkProvider>,
  document.getElementById("root")
);
