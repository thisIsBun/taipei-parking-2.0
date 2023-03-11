import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext"
import { ParkProvider } from "./contexts/ParkContext";

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ParkProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ParkProvider>
);