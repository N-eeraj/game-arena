import Link from "next/link"
import Sparkles from "./Sparkles"
import FeaturedGamesCarousel from "./FeaturedGamesCarousel"

function Header() {
  return (
    <header>
      <Sparkles />

      <section className="relative flex flex-col md:flex-row lg:justify-between items-center gap-y-2 lg:max-w-[1380px] lg:ml-auto px-4 lg:pr-0">
        <div className="flex flex-col items-start gap-y-1 lg:gap-y-2 lg:w-5/12">
          <h2 className="font-hemi text-2xl lg:text-5xl">
            Play All Your Favorite Mini Games & More,&nbsp;
            <span className="pl-2 pr-4 text-accent">
              All in One Place!
            </span>
          </h2>
          <p className="text-sm lg:text-lg opacity-80">
            From quick mini games to full-fledged adventures, enjoy endless fun without the hassle of switching between platforms. Play everything you love, right here, at one convenient location!
          </p>

          <Link href="/sign-up">
            <button className="group mt-2 px-8 py-2 rounded-md relative bg-background text-sm hover:shadow-2xl hover:shadow-accent/[0.1] transition duration-200 border border-accent/40">
              <div className="absolute inset-x-0 h-0.5 scale-x-50 group-hover:scale-x-100 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-accent to-transparent transition duration-500" />
              <span className="relative group-hover:text-accent transition duration-400">
                Sign Up
              </span>
            </button>
            </Link>
        </div>

        <FeaturedGamesCarousel />
      </section>
    </header>
  )
}

export default Header
