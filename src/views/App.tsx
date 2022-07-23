import {Route, Switch, BrowserRouter} from 'react-router-dom'
import TopPage from "../pages/TopPage";
import ImageViewPage from "../pages/ImageViewPage";
import StandardImageList from "../components/ImageList";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <TopPage setOperationName={"SortByFavorites"}/>
                </Route>
                <Route exact path="/image/:id" component={ImageViewPage}/>
                {/*<Route exact path="/test" component={StandardImageList}/>*/}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
