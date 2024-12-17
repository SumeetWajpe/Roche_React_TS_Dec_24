import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/app/App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
