import React, { useState } from "react";
import styled from "styled-components";
import placeholderImg from "assets/images/placeholder.png";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

const Label = styled.label`
  height: 40px;
  width: 150px;
  border-radius: 8px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  outline: 0;
  padding: 10px;
`;

const UploadButton = styled.button`
  height: 40px;
  width: 110px;
  border-radius: 8px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  outline: 0;
  padding: 10px;
  margin-top: 1rem;
`;

const Input = styled.input`
  display: none;
`;

const ImageInputContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Form = styled.form``;
const FormContainer = styled.div``;

const PreviewImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const ImageInput = ({ type, placeholder, name }: InputProps) => {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <ImageInputContainer>
      <div>
        <React.Fragment>
          <PreviewImg
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : placeholderImg
            }
            alt="Thumb"
          />
        </React.Fragment>
      </div>
      <FormContainer>
        <Form>
          <Label id="add-img-label" htmlFor="add-single-img">
            Select image
          </Label>
          <Input
            type={type}
            id="add-single-img"
            accept="image/png,image/jpeg"
            placeholder={placeholder}
            name={name}
            onChange={imageChange}
          />
        </Form>
        <UploadButton>Upload</UploadButton>
      </FormContainer>
    </ImageInputContainer>
  );
};

export default ImageInput;
