import styled from "styled-components";

type ImagePropsType = {
    setImageSource: string;
}

const ImageBox = styled.input`
  //mix-blend-mode: normal;
  object-fit: cover;
  height: 263px;
  width: 263px;
  max-width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover{
    opacity: 0.6;
  }
`;

const Image = ({setImageSource}: ImagePropsType) => {
    const name = process.env.PUBLIC_URL + "images/" + setImageSource;
    return (
 /*       <div className="image">
            <div className="image-back"/>
            <img className="image-source" src={setImageSource} alt={setImageSource}/>
        </div>
  */
        <ImageBox type="image" src={name} alt="unko"/>
            //{setImageSource}
        //</ImageBox>
    );
};
export default Image;