import Header from "../components/Header";
import OperationsBar from "../components/OperationsBar";
import ImageGrid from "../components/ImageGrid";
import { useEffect, useState } from "react";
import { HttpImageList } from "../gateway/httpClient";
import { ImageResponse, ImagesListResponse } from "../type/API";
import StandardImageList from "../components/ImageList";
import imageGrid from "../components/ImageGrid";
import Pagination from "@mui/material/Pagination";
import * as React from "react";

type TopPagePropsType = {
  setOperationName: string;
};

const TopPage = ({ setOperationName }: TopPagePropsType) => {
  const [imageLists, setImageList] = useState<ImageResponse[]>([]);

  useEffect(() => {
    //HttpImageList(setImageList);
  }, []);
  //document.body.style.backgroundColor = "#e5e5e5";
  // REFERENCE: https://ja.stackoverflow.com/questions/74069/react%E3%81%A7yarn-start%E3%81%97%E3%81%9F%E3%82%89typeerror-cannot-read-property-map-of-undefined%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%9F
  const imageListString = (imageLists || []).map((image) => {
    return "https://pbs.twimg.com/media/" + image.image_name;
  });

  document.body.style.backgroundColor = "#ffffff";
  return (
    <div className="top-page">
      <Header />
      <OperationsBar />
      {<ImageGrid></ImageGrid>}
      {/*<StandardImageList />*/}
    </div>
  );
};
export default TopPage;
