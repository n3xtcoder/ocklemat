import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AlbumContextProvider } from "./context/AlbumContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AlbumContextProvider>
        <App />
      </AlbumContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
