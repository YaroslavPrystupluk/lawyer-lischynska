import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import AppRouter from "./routes/AppRouter";
import JsonLd from "./components/SEO/JsonLd.tsx";

import "./firebase/firebaseConfig";
import "./index.css";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelmetProvider>
            <JsonLd/>
            <AppRouter/>
        </HelmetProvider>
    </StrictMode>
);
