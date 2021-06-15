import Header from "../components/Header";
import Operations from "../components/Operations";
import ImageGrid from "../components/ImageGrid";

type TopPagePropsType = {
    setOperationName: string;
}

const TopPage = ({setOperationName}: TopPagePropsType) => {
    return (
        <div className="top-page">
            <Header/>
            <div className="operation-name">{setOperationName}</div>
            <Operations/>
            <ImageGrid setImageList={["fsdf", "dfsa"]}></ImageGrid>
        </div>
    );
};
export default TopPage;