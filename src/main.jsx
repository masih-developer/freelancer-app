import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/fonts.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThemeProvider from "./context/ThemeProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools buttonPosition="bottom-left" />
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
