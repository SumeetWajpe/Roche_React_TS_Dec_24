import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="container">
    <App />
  </div>,
);
