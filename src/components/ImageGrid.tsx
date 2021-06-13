import Image from "./Image";

type ImageGridPropsType = {
    setImageList: Array<string>;
}

const ImageGrid = ({setImageList}: ImageGridPropsType) => {
    let list = [];
    for(let i in setImageList){
        list.push(<li>{setImageList[i]}</li>)
    }
    return (
        <div>
            {list}
        </div>
    );
};

export default ImageGrid;