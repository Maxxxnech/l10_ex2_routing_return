import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
// Routes replaced Switch in V6
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about/:name" element={<About />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
