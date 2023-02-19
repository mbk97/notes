import styled, { createGlobalStyle } from "styled-components";
import { themeTypes } from "themes/theme";

export const GlobalStyle = createGlobalStyle<{ theme: themeTypes }>`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Playfair Display', serif;
    background-color: ${({ theme }) => theme.background};
    color:${({ theme }) => theme.primary};
    
}
`;

export const AuthInputWrapper = styled.div`
  margin: 20px 0;
  width: 350px;
  position: relative;
  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const SocialMediaAuthWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
`;

export const AuthComponentTextWrapper = styled.div`
  margin: 10px 0 30px 0;
`;

export const AuthLayout = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftAuthComponent = styled.div`
  flex: 60%;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SignUpAuthComponent = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  @media (max-width: 900px) {
    flex: 100%;
    margin-top: 10rem;
    justify-content: center;
  }
`;

export const RightAuthComponent = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
  @media (max-width: 900px) {
    flex: 100%;
    margin-top: 10rem;
    justify-content: center;
  }
`;

export const AuthBgImg = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
`;

export const UploadBtn = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 8px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  outline: 0;
`;

export const CardLayoutWrapper = styled.div`
  &.grid_class {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 50px;
    @media (max-width: 600px) {
      margin: 0 0px;
    }
  }

  &.flex_class {
    display: block;
    margin: auto;
  }
`;

export const CardContainer = styled.div`
  &.small_card {
    width: 300px;
    margin: 0 auto;
    @media (max-width: 600px) {
      width: 250px;
    }
  }
  &.big_card {
    width: 70%;
    margin: 30px auto;
  }
`;
