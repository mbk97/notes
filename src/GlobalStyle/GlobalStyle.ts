import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
}

body{
    font-family: 'Playfair Display', serif;
    
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

export const ShowPasswordWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
`;
