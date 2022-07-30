import styled from "styled-components";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { useState } from "react";
import { ImageResponse } from "../type/API";
import * as React from "react";

type ImagePropsType = {
  setImageSource: ImageResponse;
};

const ImageBox = styled.img`
  //mix-blend-mode: normal;
  object-fit: cover;
  height: 263px;
  width: 263px;
  //height: 400px;
  //width: 400px;
  max-width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    opacity: 0.6;
  }
`;

const MovieBox = styled.video`
  //mix-blend-mode: normal;
  object-fit: cover;
  height: 263px;
  width: 263px;
  //height: 400px;
  //width: 400px;
  max-width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    opacity: 0.6;
  }
`;

const Image = ({ setImageSource }: ImagePropsType) => {
  const [value, setValue] = useState<number | null>(2);
  //const name = process.env.PUBLIC_URL + "images/" + setImageSource;
  const [isShowPopUp, setISShowPopUp] = useState<boolean>(false);
  const path = "/" + setImageSource.image_id;
  const imageTypeArray = setImageSource.image_name.split(".");
  const imageType = imageTypeArray[1];
  const isImage = imageType !== "mp4";

  return (
    <>
      <div className="image" />
      <div className="image-back" />
      <Link to={path}>
        {isImage ? (
          <ImageBox
            src={`https://pbs.twimg.com/media/${setImageSource.image_name}`}
            srcSet={`https://pbs.twimg.com/media/${setImageSource.image_name}`}
            alt={setImageSource.image_name}
            loading="lazy"
            onClick={() => {
              setISShowPopUp(true);
            }}
          ></ImageBox>
        ) : (
          <MovieBox>
            <source
              src={`https://pbs.twimg.com/media/${setImageSource.image_name}`}
              type={"video/" + imageType}
              onClick={() => {
                setISShowPopUp(true);
              }}
            ></source>
            <p>{setImageSource.image_name}</p>
          </MovieBox>
        )}
      </Link>
      {isShowPopUp ? (
        <>
          <h3>UNKO</h3>
        </>
      ) : (
        <></>
      )}
      {/*
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        */}
    </>
  );
};
export default Image;
