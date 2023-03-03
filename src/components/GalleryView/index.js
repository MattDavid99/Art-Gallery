import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import ArtDescription from "../ArtDescription";
import ArtImageTile from "../ArtImageTile"


function GalleryView({ galleries }) {
    const { galleryId } = useParams()
    // console.log(galleries);

    const galleryItem = galleries.find((gallery) => (
        gallery.id === +galleryId

    ))

    console.log("GALLERY VIEW--------------->", galleryItem);

    return (
        <div>
            <h1>Hello from gallery view</h1>
            <h2>{galleryItem.name}</h2>
            <ArtImageTile art={galleryItem.objects} />
        </div >

    )

}



export default GalleryView
