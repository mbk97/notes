import React from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Dashboard from "components/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import ProtectedRoute from "components/protected/Protected";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
