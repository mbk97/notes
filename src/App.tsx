import React from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
// import Login from "pages/Login";
// import SignUp from "pages/SignUp";
// import UpdateAccount from "pages/UpdateAccount";
import Navbar from "components/navbar/Navbar";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <SignUp /> */}
      <Navbar />
      {/* <UpdateAccount /> */}
    </div>
  );
}

export default App;
