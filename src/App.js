// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import harvardArt from "./data/harvardArt";


function App() {


  return (
    <div>

      <GalleryNavigation galleries={harvardArt.records} />

      <Route path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records} />
      </Route>

    </div >
  );
}

export default App;
