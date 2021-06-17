import Header from "../components/Header";
import OperationsBar from "../components/OperationsBar";
import ImageGrid from "../components/ImageGrid";

type TopPagePropsType = {
    setOperationName: string;
}

const TopPage = ({setOperationName}: TopPagePropsType) => {
    //document.body.style.backgroundColor = "#e5e5e5";
    document.body.style.backgroundColor = "#ffffff";
    return (
        <div className="top-page">
            <Header/>
            <OperationsBar/>
            <ImageGrid setImageList={["bg.jpg", "ch.png", "P.jpg", "Den3Logo.png","P.jpg","bg.jpg","ch.png","ch.png","bg.jpg",
                "P.jpg","Den3Logo.png","P.jpg","ch.png","bg.jpg","P.jpg",
                "P.jpg","Den3Logo.png","P.jpg","ch.png","bg.jpg","P.jpg",
                "P.jpg","Den3Logo.png","P.jpg","ch.png","bg.jpg","P.jpg",
                "P.jpg","Den3Logo.png","P.jpg","ch.png","bg.jpg","P.jpg",
                "P.jpg","Den3Logo.png","P.jpg","ch.png","bg.jpg","P.jpg",
                "P.jpg","Den3Logo.png","P.jpg","ch.png","bg.jpg","P.jpg",
                "P.jpg","Den3Logo.png","P.jpg","ch.png","bg.jpg","P.jpg"
            ]}></ImageGrid>
        </div>
    );
};
export default TopPage;