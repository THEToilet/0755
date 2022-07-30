import ImageViewContainer from "./ImageContainer";
import InformationBar from "./InformationBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImageResponse } from "../type/API";
import * as React from "react";

const ImageViewPageContainer = styled.div`
  //background-color: #ffffff;
  //margin: 100px 100px;
  //height: 1000px;
  //width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: relative;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
`;

const CenterContainer = styled.div`
  display: flex;
`;

const ArrowImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 300px auto;

  &:hover {
    opacity: 0.6;
  }

  z-index: 5;
`;

const Cancel = styled.img`
  height: 100px;
  width: 100px;
  //margin: 300x auto;
  //text-align: left;
  display: block;
  margin-left: auto;

  &:hover {
    opacity: 0.6;
  }

  z-index: 3;
`;

type ImageViewPropsType = {
  imageSource: ImageResponse;
  setIsShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageView = ({ imageSource, setIsShowPopUp }: ImageViewPropsType) => {
  //document.body.style.backgroundColor = "#000000";
  const img = window.location.origin + "/images/arrow_back_ios_white_24dp.svg";
  const img2 =
    window.location.origin + "/images/arrow_forward_ios_white_24dp.svg";
  const cancelButton = window.location.origin + "/images/close_white_24dp.svg";
  console.log("unko");
  return (
    <ImageViewPageContainer>
      <Cancel
        src={cancelButton}
        alt="cancel"
        onClick={() => {
          setIsShowPopUp(false);
        }}
      />
      <CenterContainer>
        <ArrowImage src={img} alt="right" />
        <ImageViewContainer imageSource={imageSource} />
        <ArrowImage src={img2} alt="left" />
      </CenterContainer>
      <InformationBar />
    </ImageViewPageContainer>
  );
};

export default ImageView;
