import { CustomHeader } from "components/text/Text";
import React from "react";
import { EmptyStateWrapper } from "../../pages/home/style";

interface IProps {
  Icon: any;
  text: string;
}

const EmptyState = ({ Icon, text }: IProps) => {
  return (
    <EmptyStateWrapper>
      <Icon
        size={170}
        color="#363739"
        style={{
          marginBottom: "20px",
        }}
      />
      <CustomHeader>{text}</CustomHeader>
      {/* change the font color using themes */}
    </EmptyStateWrapper>
  );
};

export default EmptyState;
