import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import { ImageResponse, ImagesListResponse } from "../type/API";
import { HttpImageList, HttpImageListSize } from "../gateway/httpClient";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";
import { useImageListContext } from "../context/ImageListProvider";

export default function StandardImageList() {
  const [imageLists, setImageList] = useState<ImageResponse[]>([]);
  const [imageListSize, setImageListSize] = useState<number>(0);

  const [page, setPage] = useState(1);
  useEffect(() => {
    HttpImageListSize(setImageListSize);
    // DEBUG
    //HttpImageList(setImageList, page, setImageListContext);
  }, [imageLists]);

  //document.body.style.backgroundColor = "#e5e5e5";

  const NewDiv = styled.div`
    list-style: none;
    //margin: 0px;
    // text-align: center;
    display: flex;
    flex-wrap: wrap;
    //align-content: space-around;
    margin: 5px -20px;
  `;

  return (
    <>
      <ImageList
        sx={{ width: 700, height: 1050 }}
        cols={3}
        rowHeight={200}
        // Image同士の隙間
        gap={2}
        variant="standard"
      >
        {console.log("unko1")}
        {console.log(imageLists)}
        {(imageLists || []).map((item) => (
          <ImageListItem key={item.image_id}>
            <img
              /*src={`${item.img}?w=164&h=164&fit=crop&auto=format`}*/
              src={`https://pbs.twimg.com/media/${item.image_name}`}
              srcSet={`https://pbs.twimg.com/media/${item.image_name}`}
              alt={item.image_text}
              loading="lazy"
            />
            {console.log("unko2")}
            {console.log(`https://pbs.twimg.com/media/${item.image_name}`)}
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={imageListSize}
        color="secondary"
        onChange={(e, page) => setPage(page)}
        page={page}
      />
    </>
  );
}
