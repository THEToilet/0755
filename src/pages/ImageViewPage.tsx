import ImageViewContainer from "../components/ImageContainer";
import MovingGuide from "../components/MovingGuide";
import InformationBar from "../components/InformationBar";

const ImageViewPage = () => {
    return (
        <div>
            <div>
                <MovingGuide/>
                <ImageViewContainer/>
                <MovingGuide/>
            </div>
            <InformationBar/>
        </div>
    );
};

export default ImageViewPage;