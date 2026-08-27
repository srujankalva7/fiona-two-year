import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "leaflet/dist/leaflet.css";
import "../app/globals.css";
import { MemoryExperience } from "../components/memory-experience";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MemoryExperience />
  </StrictMode>,
);
