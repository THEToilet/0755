import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import TopPage from "./pages/TopPage";
import ImageViewPage from "./pages/ImageViewPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <TopPage setOperationName={"SortByFavorites"}/>
                </Route>
                <Route exact path="/image/:id">
                    <ImageViewPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
