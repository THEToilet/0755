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
`;

const ImageUl = styled.ul`
  list-style: none;
  //margin: 0px;
  //text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  margin: 5px auto;
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