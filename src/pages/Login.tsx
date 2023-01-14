import React, { useState } from "react";
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
  AbsoluteWrapper,
} from "GlobalStyle/GlobalStyle";
import { CiUser } from "react-icons/ci";
import { BiHide, BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { CustomHeader, CustomText } from "components/text/Text";
import { BiShow } from "react-icons/bi";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

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
            type={passwordType}
            placeholder="Type your password"
            Icon={BiLock}
            name="password"
            labelTitle="Password"
          />
          <AbsoluteWrapper>
            {passwordType === "password" ? (
              <BiShow
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={togglePassword}
              />
            ) : (
              <BiHide
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={togglePassword}
              />
            )}
          </AbsoluteWrapper>
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
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <CustomText>
            Don’t have an account?{" "}
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              Sign-up
            </span>{" "}
          </CustomText>
        </div>
      </RightAuthComponent>
    </AuthLayout>
  );
};

export default Login;
