import React from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

function App() {
  return (
    <div>
      <GlobalStyle />
      <SignUp />
    </div>
  );
}

export default App;
