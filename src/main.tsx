import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import CustomQueryClientProvider from "./providers/Queryclient-provider.tsx";

createRoot(document.getElementById("root")!).render(
 
    <CustomQueryClientProvider>
      <App />
    </CustomQueryClientProvider>
 
);
