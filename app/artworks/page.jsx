import { artworks } from "../components/artworks.js"
import Link from 'next/link'

export default function Artworks() {
  const listOfArtworks = artworks.map((item) => (
        // <Link to="/artworks/'+{item.id}'" id={item.id} >
        <Link href={`/artworks/${item.id}`} id={item.id} >
            <div className="h-[400px] bg-[#E3E7EA]">
            </div>
            <div>
                {item.name}
            </div>
            <div>
                {item.price}€
            </div>
        </Link>
  ))

  return (
    <div className="py-32 grid grid-cols-3 gap-2 gap-y-10">
        {listOfArtworks}
    </div>
  )
}
