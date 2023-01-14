import React from "react";
import AuthButton from "components/buttons/Button";
import AuthInput from "components/Inputs/AuthInput";
import authImg from "../assets/images/authbg.jpg";
import {
  AuthBgImg,
  AuthLayout,
  LeftAuthComponent,
  AuthInputWrapper,
  AuthComponentTextWrapper,
  SignUpAuthComponent,
} from "GlobalStyle/GlobalStyle";
import { CiUser } from "react-icons/ci";
import { CustomHeader } from "components/text/Text";
import { AiOutlineMail } from "react-icons/ai";
import ImageInput from "components/Inputs/ImageInput";

const UpdateAccount = () => {
  //   const [passwordType, setPasswordType] = useState("password");

  //   const togglePassword = () => {
  //     if (passwordType === "password") {
  //       setPasswordType("text");
  //       return;
  //     }
  //     setPasswordType("password");
  //   };
  return (
    <AuthLayout>
      <LeftAuthComponent>
        <AuthBgImg src={authImg} />
      </LeftAuthComponent>
      <SignUpAuthComponent>
        <AuthComponentTextWrapper>
          <CustomHeader>Update profile</CustomHeader>
        </AuthComponentTextWrapper>
        <AuthInputWrapper>
          <ImageInput name="image" type="file" placeholder="upload image" />
        </AuthInputWrapper>
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
            type="email"
            placeholder="Type your email"
            Icon={AiOutlineMail}
            name="email"
            labelTitle="Email"
          />
        </AuthInputWrapper>
        {/* <AuthInputWrapper>
          <AuthInput
            type={passwordType}
            placeholder="Type your password"
            Icon={BiLock}
            name="password"
            labelTitle="Password"
          />
          <ShowPasswordWrapper>
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
          </ShowPasswordWrapper>
        </AuthInputWrapper> */}
        <AuthInputWrapper>
          <AuthButton>Update profile</AuthButton>
        </AuthInputWrapper>
      </SignUpAuthComponent>
    </AuthLayout>
  );
};

export default UpdateAccount;
