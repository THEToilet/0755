import { Route, Switch, BrowserRouter } from "react-router-dom";
import TopPage from "../pages/TopPage";
import ImageViewPage from "../pages/ImageViewPage";
import StandardImageList from "../components/ImageList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopPage setOperationName={"SortByFavorites"} />
        </Route>
        <Route exact path="/:id" component={ImageViewPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
