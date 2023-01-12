import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder: string;
  Icon: React.ElementType;
  name: string;
  labelTitle: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  border: 0;
  height: 40px;
  outline: 0;
  width: 100%;
  font-size: 18px;

  ::placeholder {
    color: rgb(199, 189, 189);
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const AuthInput = ({
  type,
  placeholder,
  Icon,
  name,
  labelTitle,
  value,
  onClick,
  onChange,
}: InputProps) => {
  return (
    <>
      <Label htmlFor={name}>{labelTitle}</Label>
      <InputWrapper>
        <Icon
          style={{
            fontSize: "1.5rem",
          }}
        />
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </InputWrapper>
    </>
  );
};

export default AuthInput;
