import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import ArtDescription from "../ArtDescription";
import ".//ArtImageTile.css"

function ArtImageTile({ art }) {
    console.log("ARTIMAGETILE--------------->", art);

    const { galleryId } = useParams()

    return (
        <div>
            {art.map((i) => (
                <li key={i.id}>
                    <Link to={`/galleries/${galleryId}/art/${i.id}`}>
                        <img src={i.images[0]?.baseimageurl} alt="unable-to-load-pic" className="image-style" />
                        <ArtDescription gallery={i} />
                    </Link>
                </li>
            ))}
        </div>
    )

}

// function ArtImageTile({ galleries }) {

//     const artImages = galleries.map((i) => (
//         i.objects[0].images[0].baseimageurl
//     ))

//     return (
//         <>
//             <img className="image-style" src={artImages[0]} alt="vase"></img>
//         </>
//     )


// }


export default ArtImageTile
