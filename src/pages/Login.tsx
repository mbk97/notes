import React from "react";
import AuthButton from "components/buttons/Button";
import AuthInput from "components/Inputs/AuthInput";
import authImg from "../assets/images/authbg.jpg";
import {
  AuthBgImg,
  AuthLayout,
  LeftAuthComponent,
  RightAuthComponent,
  SocialMediaAuthWrapper,
  AuthInputWrapper,
  AuthComponentTextWrapper,
} from "GlobalStyle/GlobalStyle";
import { CiUser } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { CustomHeader } from "components/text/Text";

const Login = () => {
  return (
    <AuthLayout>
      <LeftAuthComponent>
        <AuthBgImg src={authImg} />
      </LeftAuthComponent>
      <RightAuthComponent>
        <AuthComponentTextWrapper>
          <CustomHeader>Login</CustomHeader>
        </AuthComponentTextWrapper>

        <AuthInputWrapper>
          <AuthInput
            type="text"
            placeholder="Type your name"
            Icon={CiUser}
            name="name"
            labelTitle="Username"
          />
        </AuthInputWrapper>
        <AuthInputWrapper>
          <AuthInput
            type="password"
            placeholder="Type your password"
            Icon={BiLock}
            name="password"
            labelTitle="Password"
          />
        </AuthInputWrapper>

        <AuthInputWrapper>
          <AuthButton>Login</AuthButton>
        </AuthInputWrapper>
        <SocialMediaAuthWrapper>
          <FcGoogle
            size={30}
            style={{
              cursor: "pointer",
            }}
          />
          <FaTwitter
            size={30}
            color="#1DA1F2"
            style={{
              cursor: "pointer",
            }}
          />
        </SocialMediaAuthWrapper>
      </RightAuthComponent>
    </AuthLayout>
  );
};

export default Login;
