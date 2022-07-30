import Image from "./Image";
import styled from "styled-components";
import { ImageResponse } from "../type/API";
import { useEffect, useState } from "react";
import { HttpImageList, HttpImageListSize } from "../gateway/httpClient";
import Pagination from "@mui/material/Pagination";
import * as React from "react";
import { useImageListContext } from "../context/ImageListProvider";

type ImageGridPropsType = {
  setImageList: ImageResponse[];
};

const ImageLi = styled.li`
  // height: 263px;
  // width: 263px;
  //color: white;
  //line-height: 80px;
  // flex: auto;
  //width: 50%;

  padding-left: 2px;
  padding-right: 2px;
  object-fit: cover;
  /*
  @media print, screen and (min-width: 767px) {
    flex-basis: 33.3%;
    max-width: 33.3%;
    padding: 20px;
  }
 */
`;

const ImageUl = styled.ul`
  list-style: none;
  //margin: 0px;
  // text-align: center;
  display: flex;
  flex-wrap: wrap;
  //align-content: space-around;
  margin: 5px -20px;
  /*
  @media print, screen and (min-width: 767px) {
    margin: 0 -20px;
  }
   */
`;

const ImageGrid = () => {
  const [imageLists, setImageList] = useState<ImageResponse[]>([]);
  const [imageListSize, setImageListSize] = useState<number>(0);
  const { imageListContext, setImageListContext } = useImageListContext();

  const [page, setPage] = useState<number>(
    Number(localStorage.getItem("page"))
  );
  useEffect(() => {
    HttpImageListSize(setImageListSize);
    HttpImageList(setImageList, page, setImageListContext);
    console.log("supperrr", imageLists);
    localStorage.setItem("page", String(page));
  }, [page]);

  return (
    <>
      <Pagination
        count={imageListSize}
        color="secondary"
        onChange={(e, page) => {
          setPage(page);
        }}
        page={page}
      />
      <ImageUl>
        {(imageLists || []).map((image) => (
          <ImageLi>{<Image setImageSource={image} />}</ImageLi>
        ))}
      </ImageUl>
      <Pagination
        count={imageListSize}
        color="secondary"
        onChange={(e, page) => {
          setPage(page);
        }}
        page={page}
      />
    </>
  );
};

export default ImageGrid;
