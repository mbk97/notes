import React from "react";
import styled from "styled-components";
import { EmptyStateWrapper } from "../../pages/home/style";

interface IProps {
  Icon: any;
  text: string;
}

const Text = styled.h2`
  font-family: "Bitter", serif;
  font-size: 24px;
  line-height: 24px;
`;

const EmptyState = ({ Icon, text }: IProps) => {
  return (
    <EmptyStateWrapper>
      <Icon
        size={100}
        color="#363739"
        style={{
          marginBottom: "40px",
        }}
      />
      <Text>{text}</Text>
      {/* change the font color using themes */}
    </EmptyStateWrapper>
  );
};

export default EmptyState;
