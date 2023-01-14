import React from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import UpdateAccount from "pages/UpdateAccount";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <SignUp /> */}
      <UpdateAccount />
    </div>
  );
}

export default App;
