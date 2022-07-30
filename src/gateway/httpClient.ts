import axios, { AxiosResponse } from "axios";
import {
  ImageListSizeResponse,
  ImageResponse,
  ImagesListResponse,
} from "../type/API";
import React from "react";

const testBaseURL = "http://localhost:8080";
const productionBaseURL = "http://192.168.2.125:8080";

const client = axios.create({
  //baseURL: testBaseURL,
  baseURL: productionBaseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

const size = 50;

export const HttpImageList = (
  setImageList: React.Dispatch<React.SetStateAction<ImageResponse[]>>,
  page: number,
  setImageListContext: (
    value: ((prevState: ImageResponse[]) => ImageResponse[]) | ImageResponse[]
  ) => void
) => {
  client
    .get("/images/list?offset=" + ((page - 1) * size).toString())
    .then((res: AxiosResponse<ImageResponse[]>) => {
      console.log("unko", res);
      console.log(`${typeof res} ${Object.prototype.toString.call(res)}`);
      console.log("unko1", res.data);
      console.log(
        `${typeof res.data} ${Object.prototype.toString.call(res.data)}`
      );
      /*
       console.log('unko2',res.data.data)
       console.log(`${typeof(res.data)} ${Object.prototype.toString.call(res.data)}`);
       res.data.data.map(value => {
           console.log(value)
       })
        */
      const imageListResponse: ImageResponse[] = res.data;
      setImageList(imageListResponse);
      setImageListContext(imageListResponse);
    })
    .catch((reason) => {
      // https://pbs.twimg.com/media/FVmgmgbaAAEaCEE.jpg
      console.log(reason);
    });
};

export const HttpImageListSize = (
  setImageListSize: React.Dispatch<React.SetStateAction<number>>
) => {
  client
    .get("/images/size")
    .then((res: AxiosResponse<ImageListSizeResponse>) => {
      console.log("unko", res);
      setImageListSize(Math.floor(res.data.size / size));
    })
    .catch((reason) => {
      // https://pbs.twimg.com/media/FVmgmgbaAAEaCEE.jpg
      console.log(reason);
    });
};
