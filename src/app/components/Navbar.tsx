import Link from "next/link"

function Navbar() {
  return (
    <nav className="sticky top-0 px-4 lg:px-8 py-2 lg:py-3 bg-black/30 backdrop-blur-md z-10">
      <Link href="/">
        <h1 className="text-accent text-4xl font-hemi">
          Game Arena
        </h1>
      </Link>
    </nav>
  )
}

export default Navbar
