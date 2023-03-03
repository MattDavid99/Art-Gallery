import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

function ArtDescription({ gallery }) {


    // const test = gallery.colors.map((i) => (
    //     console.log("ArtDescription------------------->", i)
    // ))
    console.log("ArtDescription------------------->", gallery);
    const { galleryId } = useParams()

    return (
        <>
            <li>
                <Link to={`/`}>Back to {gallery.culture}</ Link>
            </li>
            <br></br>
            <br></br>
            <p>{gallery.medium}</p>
        </>
    )

}



export default ArtDescription;
