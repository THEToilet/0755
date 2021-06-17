import ImageViewContainer from "../components/ImageContainer";
import InformationBar from "../components/InformationBar";
import styled from "styled-components";

const ImageViewPageContainer = styled.div`
  //  background-color: #ffffff;
  //margin: 100px 100px;
  //height: 1000px;
  //width: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
`;

const ArrowImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 300px auto;

  &:hover {
    opacity: 0.6;
  }
  z-index: 5;
`;

const Cancel = styled.img`
  height: 100px;
  width: 100px;
  //margin: 300x auto;
  //text-align: left;
  display: block;
  margin-left: auto;
  
  
  &:hover {
    opacity: 0.6;
  }
  z-index: 5;
`;

const ImageViewPage = () => {
    document.body.style.backgroundColor = "#000000";
    const img = window.location.origin + "/images/arrow_back_ios_white_24dp.svg";
    const img2 = window.location.origin + "/images/arrow_forward_ios_white_24dp.svg";
    const cancelButton = window.location.origin + "/images/close_white_24dp.svg";
    return (
        <ImageViewPageContainer>
            <Cancel src={cancelButton} alt="cancel"/>
            <CenterContainer>
                <ArrowImage src={img} alt="right"/>
                <ImageViewContainer/>
                <ArrowImage src={img2} alt="left"/>
            </CenterContainer>
            <InformationBar/>
        </ImageViewPageContainer>
    );
};

export default ImageViewPage;