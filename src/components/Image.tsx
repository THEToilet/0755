import styled from "styled-components";

type ImagePropsType = {
    setImageSource: string;
}

const ImageBox = styled.img`
  height: 263px;
  mix-blend-mode: normal;
  object-fit: cover;
  width: 263px;
`;

const Image = ({setImageSource}: ImagePropsType) => {
    return (
 /*       <div className="image">
            <div className="image-back"/>
            <img className="image-source" src={setImageSource} alt={setImageSource}/>
        </div>
  */
        <ImageBox src={process.env.PUBLIC_URL + 'images/search_black_24dp.svg'} alt="unko"/>
            //{setImageSource}
        //</ImageBox>
    );
};
export default Image;