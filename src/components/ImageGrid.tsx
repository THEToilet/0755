import Image from "./Image";
import styled from "styled-components";
import { ImageResponse } from "../type/API";
import { useEffect, useState } from "react";
import { HttpImageList, HttpImageListSize } from "../gateway/httpClient";
import Pagination from "@mui/material/Pagination";
import * as React from "react";
import { useImageListContext } from "../context/ImageListProvider";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
} from "@mui/material";

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

/*
  <>
    <h1>pop up show</h1>
    <ImageView
      imageSource={popUpImage}
      setIsShowPopUp={setIsShowPopUp}
    ></ImageView>
  </>
        */

const ImageGrid = () => {
  const [imageLists, setImageList] = useState<ImageResponse[]>([]);
  const [imageListSize, setImageListSize] = useState<number>(0);
  const { imageListContext, setImageListContext } = useImageListContext();

  // PopUp用
  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false);
  const [popUpImage, setPopUpImage] = useState<ImageResponse>({
    created_at: "",
    image_id: 0,
    image_name: "",
    image_text: "",
    is_seen: "",
    posted_at: "",
    posted_user_id: 0,
    star: 0,
    tags: [],
  });
  const [value, setValue] = useState<number | null>(2);

  const [page, setPage] = useState<number>(
    Number(localStorage.getItem("page"))
  );
  useEffect(() => {
    HttpImageListSize(setImageListSize);
    HttpImageList(setImageList, page, setImageListContext);
    console.log("supperrr", imageLists);
    localStorage.setItem("page", String(page));
  }, [page]);

  const handleClose = () => {
    setIsShowPopUp(false);
  };

  return (
    <>
      <Pagination
        count={imageListSize}
        color="secondary"
        onChange={(e, page) => {
          setPage(page);
        }}
        page={page}
        boundaryCount={10}
      />
      {isShowPopUp ? (
        <>
          <Dialog
            open={isShowPopUp}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogActions>
              <IconButton onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </DialogActions>
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>{popUpImage.image_id}</DialogContentText>
              <DialogContentText>{popUpImage.image_name}</DialogContentText>
              <DialogContentText>{popUpImage.image_text}</DialogContentText>
              <img
                src={`https://pbs.twimg.com/media/${popUpImage.image_name}`}
                srcSet={`https://pbs.twimg.com/media/${popUpImage.image_name}`}
                alt={popUpImage.image_name}
              />
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </DialogContent>
            <DialogActions>
              <IconButton>
                <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
              </IconButton>
              <IconButton>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <></>
      )}
      <ImageUl>
        {(imageLists || []).map((image) => (
          <ImageLi>
            {
              <Image
                setImageSource={image}
                setIsShowPopUp={setIsShowPopUp}
                setPopUpImageResponse={setPopUpImage}
              />
            }
          </ImageLi>
        ))}
      </ImageUl>
      <Pagination
        count={imageListSize}
        color="secondary"
        onChange={(e, page) => {
          setPage(page);
        }}
        boundaryCount={10}
        page={page}
      />
    </>
  );
};

export default ImageGrid;
