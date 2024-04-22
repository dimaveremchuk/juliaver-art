import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className="absolute top-0 w-full">
                <div className="flex flex-row items-center justify-between p-6">
                  <Link href="/">
                    Julia Ver
                  </Link>

                    <div className="flex gap-2">
                        <Link href="/artworks">Artworks</Link>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Cart</div>
                    </div>
                </div>
            </div>
        </>
    )
}
