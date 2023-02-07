import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './styles.css';

import { StopWatch } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StopWatch />
  </StrictMode>
);
