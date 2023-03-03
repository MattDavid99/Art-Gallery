// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import ArtImageTile from "./components/ArtImageTile";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import harvardArt from "./data/harvardArt";


function App() {


  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>


        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>

        <Route>
          <NoMatch />
        </Route>
      </Switch>

      <GalleryNavigation galleries={harvardArt.records} />

    </div >
  );
}

export default App;
