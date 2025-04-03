import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "@/App";

const rootDocumentElement = document.getElementById("root");

if (!rootDocumentElement) {
  throw new Error("Root element not exist");
}

createRoot(rootDocumentElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
