import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useImageListContext } from "../context/ImageListProvider";
import { useState } from "react";
import { Rating } from "@mui/material";
import { ImageResponse } from "../type/API";
import * as React from "react";

const DetailImageBox = styled.img`
  height: 600px;
  width: 70%;
  margin: 0 auto;
  padding-top: 40px;
  //max-width: 100%;
  object-fit: contain; //全部入れる
  //padding: 0 100px;
`;

const InformationContainer = styled.div`
  //align-items: flex-end;
  background-color: #c4c4c4;
  border-radius: 10px;
  //display: flex; // 子要素を横並びにする
  height: 100px;
  //justify-content: flex-end;
  //min-width: 226px;
  //padding: 9px 10px;
  width: 100%;
  //margin: 0px auto;
  //position: relative;
  //text-align: center;
  padding: 30px 30px;
  margin: 0 auto;
  position: absolute; //絶対位置
  bottom: -200px; //下に固定
  z-index: 4;
  &:hover {
    height: 500px;
  }
`;
type ImageViewContainerPropsType = {
  imageSource: ImageResponse;
};

const ImageViewContainer = ({ imageSource }: ImageViewContainerPropsType) => {
  const [value, setValue] = useState<number | null>(2);
  const { imageListContext, setImageListContext } = useImageListContext();
  const name = "https://pbs.twimg.com/media/" + imageSource.image_name;
  return (
    <>
      <DetailImageBox src={name} alt="unko" />
      <h3 style={{ color: "white" }}>{imageSource.image_id}</h3>
      <h3 style={{ color: "white" }}>{imageSource.image_name}</h3>
      <h3 style={{ color: "white" }}>{imageSource.image_text}</h3>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <InformationContainer />
    </>
  );
};

/*
const getImageInfo = (
  imageID: number,
  imageListContext: ImageResponse[]
): ImageResponse => {
  let imageInfo: ImageResponse = {
    created_at: "",
    image_id: 0,
    image_name: "",
    image_text: "",
    is_seen: "",
    posted_at: "",
    posted_user_id: 0,
    star: 0,
    tags: [],
  };
  for (const ii of imageListContext) {
    console.log(ii);
    if (ii.image_id === imageID) {
      imageInfo = ii;
      break;
    }
  }
  return imageInfo;
};
 */

export default ImageViewContainer;
