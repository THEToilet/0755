import Image from "./Image";
import styled from "styled-components";

type ImageGridPropsType = {
    setImageList: Array<string>;
}

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

const ImageGrid = ({setImageList}: ImageGridPropsType) => {
    let list = [];
    for (let i in setImageList) {
        list.push(<ImageLi><Image setImageSource={setImageList[i]}/></ImageLi>)
    }
    return (
        <ImageUl>
            {list}
        </ImageUl>
    );
};

export default ImageGrid;