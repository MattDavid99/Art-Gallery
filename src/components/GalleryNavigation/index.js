import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import GalleryView from "../GalleryView";
import ".//GalleryNavigation.css"

function GalleryNavigation({ galleries }) {

    console.log('GALLERY NAVIGATION-------------->', galleries);

    return (
        <nav>
            <h1>Galleries</h1>
            {galleries.map((gallery) => (
                <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
            ))}
        </nav>
    )

}


export default GalleryNavigation
