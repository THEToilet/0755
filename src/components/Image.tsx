type ImagePropsType = {
    setImageSource: string;
}

const Image = ({setImageSource}: ImagePropsType) => {
    return (
        <div className="image">
            <div className="image-back"/>
            <img className="image-source" src={setImageSource} alt={setImageSource}/>
        </div>
    );
};
export default Image;