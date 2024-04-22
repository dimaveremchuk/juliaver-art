import { artworks } from "../../components/artworks.js"

export default function Artwork({ params }) {

  const artwork = artworks[params.index]
  
  return (
    <>
      <div className="flex">
        <div className="">
        </div>
        <div>
          {artwork.name}
        </div>
      </div>
    </>
  )
}
