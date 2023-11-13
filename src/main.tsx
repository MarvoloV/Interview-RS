import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QuoteProvider } from "./store/QuoteProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuoteProvider>
      <App />
    </QuoteProvider>
  </React.StrictMode>
);
