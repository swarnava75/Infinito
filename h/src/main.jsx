import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
      <App />
      
    
  </BrowserRouter>
);

