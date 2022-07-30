import { Route, Switch, BrowserRouter } from "react-router-dom";
import TopPage from "../pages/TopPage";
import ImageView from "../components/ImageView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopPage setOperationName={"SortByFavorites"} />
        </Route>
        <Route exact path="/:id" component={ImageView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
