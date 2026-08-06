import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRoute } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRoute>
        <App />
      </BrowserRoute>
    </AuthProvider>
  </StrictMode>,
);
