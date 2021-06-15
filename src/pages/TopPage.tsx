import Header from "../components/Header";
import Operations from "../components/Operations";
import ImageGrid from "../components/ImageGrid";
import styled from "styled-components"

type TopPagePropsType = {
    setOperationName: string;
}

const OperationName = styled.h2`
  letter-spacing: 0;
  min-height: 21px;
  min-width: 143px;
  mix-blend-mode: normal;
  text-align: center;
  width: 143px;
  @import url("https://fonts.googleapis.com/css?family=Ubuntu:400|Roboto:400");
`;

const TopPage = ({setOperationName}: TopPagePropsType) => {
    return (
        <div className="top-page">
            <Header/>
            <OperationName>{setOperationName}</OperationName>
            <Operations/>
            <ImageGrid setImageList={["fsdf", "dfsa"]}></ImageGrid>
        </div>
    );
};
export default TopPage;