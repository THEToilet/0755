import styled from "styled-components";
import image from "../components/ch.png";
import {useParams} from "react-router-dom";

const DetailImageBox = styled.img`
  height: 600px;
  width: 70%;
  margin: 0 auto;
  padding-top: 40px;
  //max-width: 100%;
  object-fit: contain; //全部入れる
  //padding: 0 100px;
`;

/*
const DetailImage = styled.img`
`;
*/


const ImageViewContainer = () => {
    //const {params} = this.props.match
    const {id} = useParams<{ id: string }>();
    //const name = process.env.PUBLIC_URL + `images/` + id;
    const name = window.location.origin + `/images/` + id;
    console.log(name)
    console.log(image)
    console.log(id)
    return (
        <DetailImageBox src={name} alt="unko"/>
        /*
//            <DetailImage src="./ch.png" alt="unko"/>
        //</ImageBox>

         */
    );
};

export default ImageViewContainer;