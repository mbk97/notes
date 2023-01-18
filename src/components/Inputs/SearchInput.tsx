import React from "react";
import styled from "styled-components";

interface IProps {
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: any;
  onClick: () => void;
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 48px;
  background-color: white;
  padding: 0 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  /* border-radius: 10px; */
  background-color: transparent;
  font-size: 18px;
  height: 45px;
  width: 90%;
  border: 0;
  outline: 0;
`;

const SearchInput = ({
  type,
  placeholder,
  onChange,
  Icon,
  onClick,
}: IProps) => {
  return (
    <InputWrapper>
      <Icon
        style={{
          color: "black",
          fontSize: "20px",
        }}
        onClick={onClick}
      />
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </InputWrapper>
  );
};

export default SearchInput;
