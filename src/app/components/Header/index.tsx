import Link from "next/link"
import Button from "@components/Button"
import Sparkles from "./Sparkles"
import FeaturedGamesCarousel from "./FeaturedGamesCarousel"

function Header() {
  return (
    <header>
      <Sparkles />

      <section className="relative flex flex-col md:flex-row lg:justify-between items-center gap-y-2 min-h-[55vh] lg:ml-auto px-4 lg:pl-36 lg:pr-0">
        <div className="flex flex-col items-start gap-y-1 lg:gap-y-2 lg:w-5/12">
          <h2 className="font-hemi text-3xl lg:text-5xl">
            Play All Your Favorite Mini Games & More,&nbsp;
            <span className="pl-2 pr-4 text-accent">
              All in One Place!
            </span>
          </h2>
          <p className="text-sm lg:text-lg opacity-80">
            From quick mini games to full-fledged adventures, enjoy endless fun without the hassle of switching between platforms. Play everything you love, right here, at one convenient location!
          </p>

          <Link href="/sign-up">
            <Button>
              Sign Up
            </Button>
          </Link>
        </div>

        <FeaturedGamesCarousel />
      </section>
    </header>
  )
}

export default Header
