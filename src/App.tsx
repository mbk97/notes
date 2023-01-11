import React from "react";
import AuthInput from "./components/Inputs/AuthInput";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { CiUser } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
import AuthButton from "./components/buttons/Button";

function App() {
  return (
    <div
      className="App"
      style={{
        margin: "50px",
      }}
    >
      <GlobalStyle />
      <AuthInput
        type="text"
        placeholder="Type your username"
        Icon={CiUser}
        name="name"
        labelTitle="Username"
        value="mubarak"
      />
      <AuthInput
        type="password"
        placeholder="Type your password"
        Icon={BiLock}
        name="password"
        labelTitle="Password"
      />
      <AuthButton>Hello</AuthButton>
    </div>
  );
}

export default App;
