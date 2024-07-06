import React from "react";
import { createRoot } from "react-dom/client"; // Update this import
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// Create the root using the correct import
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
