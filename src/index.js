import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from "./constants/style"

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
