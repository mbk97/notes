import React from "react";
import styled from "styled-components";

interface ITextProps {
  children: React.ReactNode;
}

const Header = styled.h2`
  font-family: "Bitter", serif;
  font-size: 32px;
  line-height: 24px;
`;
const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
`;

const NavTitle = styled(Text)`
  font-size: 24px;
`;
const CustomHeader = ({ children }: ITextProps) => {
  return <Header>{children}</Header>;
};

const CustomText = ({ children }: ITextProps) => {
  return <Text>{children}</Text>;
};

export { CustomHeader, CustomText, NavTitle };
