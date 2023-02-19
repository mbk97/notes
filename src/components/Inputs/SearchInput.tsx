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
  background-color: ${({ theme }) => theme.inputDefaultBg};
  padding: 0 20px;
  border-radius: 10px;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.inputTextColor};
`;

const Input = styled.input`
  background-color: transparent;
  font-size: 18px;
  height: 45px;
  width: 90%;
  border: 0;
  outline: 0;

  &::placeholder {
    color: ${({ theme }) => theme.inputTextColor};
  }
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
      <IconWrapper>
        <Icon
          style={{
            color: "inherit",
            fontSize: "20px",
          }}
          onClick={onClick}
        />
      </IconWrapper>
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </InputWrapper>
  );
};

export default SearchInput;
