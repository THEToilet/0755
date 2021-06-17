import ImageViewContainer from "../components/ImageContainer";
import MovingGuide from "../components/MovingGuide";
import InformationBar from "../components/InformationBar";
import styled from "styled-components";

const ImageViewPageContainer = styled.div`
  background-color: #ffffff;
  //margin: 100px 100px;
  height: 500px;
  //width: 100%;
`;

const ImageViewPage = () => {
    document.body.style.backgroundColor = "#000000";
    return (
        <ImageViewPageContainer>
            <div>
                <MovingGuide/>
                <ImageViewContainer/>
                <MovingGuide/>
            </div>
            <InformationBar/>
        </ImageViewPageContainer>
    );
};

export default ImageViewPage;