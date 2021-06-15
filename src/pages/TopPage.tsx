import Header from "../components/Header";
import Operations from "../components/Operations";
import ImageGrid from "../components/ImageGrid";
import styled from "styled-components"

type TopPagePropsType = {
    setOperationName: string;
}

const OperationName = styled.div`
  letter-spacing: 0;
  min-height: 21px;
  min-width: 143px;
  mix-blend-mode: normal;
  text-align: left;
  width: 143px;
  @import url("https://fonts.googleapis.com/css?family=Ubuntu:400|Roboto:400");
`;

const OperationsBar = styled.div`
`;

const TopPage = ({setOperationName}: TopPagePropsType) => {
    return (
        <div className="top-page">
            <Header/>
            <OperationsBar>
                <OperationName>{setOperationName}</OperationName>
                <Operations/>
            </OperationsBar>
            <ImageGrid setImageList={["fsdf", "dfsa"]}></ImageGrid>
        </div>
    );
};
export default TopPage;