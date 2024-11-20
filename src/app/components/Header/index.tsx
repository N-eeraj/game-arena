import Sparkles from "./Sparkles"
import FeaturedGamesCarousel from "./FeaturedGamesCarousel"

function Header() {
  return (
    <header>
      <Sparkles />

      <section className="relative flex flex-col lg:flex-row lg:justify-between items-center gap-y-2 lg:max-w-[1380px] lg:ml-auto px-4 lg:pr-0">
        <div className="flex flex-col gap-y-1 lg:gap-y-2 lg:w-5/12">
          <h2 className="font-hemi text-2xl lg:text-5xl">
            Play All Your Favorite Mini Games & More, All in One Place!
          </h2>
          <p className="text-sm lg:text-lg opacity-80">
            From quick mini games to full-fledged adventures, enjoy endless fun without the hassle of switching between platforms. Play everything you love, right here, at one convenient location!
          </p>
        </div>

        <FeaturedGamesCarousel />
      </section>
    </header>
  )
}

export default Header
