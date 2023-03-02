import { useParams } from "react-router-dom/cjs/react-router-dom.min"

function GalleryView({ galleries }) {
    const { galleryId } = useParams()
    console.log(galleryId);

    const galleryItem = galleries.find((gallery) => (
        gallery.id === +galleryId
    ))


    return (
        <>
            <h1>Hello from gallery view</h1>
            <h2>{galleryItem.name}</h2>
        </>

    )

}



export default GalleryView
