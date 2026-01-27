import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import './i18n';
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
    <App />
  </Suspense>
);
