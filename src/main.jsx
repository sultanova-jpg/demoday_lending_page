import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./utils/i18next";
import "./index.css";
import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <ToastContainer 
        position="top-center"
        autoClose={1000}
        />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
