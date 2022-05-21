import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./context/CategoriesContext";
import { AuthProvider } from "./context/AuthContext";
import { QuizProvider } from "./context/quizContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <AuthProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </AuthProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);