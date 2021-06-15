import Image from "./Image";
import styled from "styled-components";

type ImageGridPropsType = {
    setImageList: Array<string>;
}

const ImageLi = styled.li`
  list-style: none;
`;

const ImageGrid = ({setImageList}: ImageGridPropsType) => {
    let list = [];
    for (let i in setImageList) {
        list.push(<ImageLi><Image setImageSource={setImageList[i]}/></ImageLi>)
    }
    return (
        <div>
            {list}
        </div>
    );
};

export default ImageGrid;