import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Dashboard from "components/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import ProtectedRoute from "components/protected/Protected";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "themes/theme";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard toggleTheme={toggleTheme} theme={theme} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
