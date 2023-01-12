import React from "react";
import styled from "styled-components";

interface IBtnProps {
  children: React.ReactNode;
}

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 22px;
  outline: 0;
`;

const AuthButton = ({ children }: IBtnProps) => {
  return <Button>{children}</Button>;
};

export default AuthButton;
