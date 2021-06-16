import styled from "styled-components";

type ImagePropsType = {
    setImageSource: string;
}

const ImageBox = styled.img`
  //mix-blend-mode: normal;
  object-fit: cover;
  height: 263px;
  width: 263px;
`;

const Image = ({setImageSource}: ImagePropsType) => {
    const name = process.env.PUBLIC_URL + "images/" + setImageSource;
    return (
 /*       <div className="image">
            <div className="image-back"/>
            <img className="image-source" src={setImageSource} alt={setImageSource}/>
        </div>
  */
        <ImageBox src={name} alt="unko"/>
            //{setImageSource}
        //</ImageBox>
    );
};
export default Image;