import { createRoot } from "react-dom/client";
import App from "./components/app/App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.ts";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
