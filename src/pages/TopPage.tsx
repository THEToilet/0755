import Header from "../components/Header";

type TopPagePropsType = {
    setOperationName: string;
}

const TopPage = ({setOperationName}: TopPagePropsType) => {
    return (
        <div className="top-page">
            <Header/>
            <div className="operation-name">{setOperationName}</div>
            
        </div>
    );
};
export default TopPage;