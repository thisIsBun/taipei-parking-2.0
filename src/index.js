import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import ThemeProvider from "./components/ThemeProvider";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
