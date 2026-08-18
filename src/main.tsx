import { createRoot } from "react-dom/client";
import App from "./app/App";
import { setupAxe } from "./lib/a11y";
import "./index.css";

setupAxe().then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
