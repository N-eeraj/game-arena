import { SparklesCore } from "@/components/ui/sparkles"

function Header() {
  return (
    <header>
      <div className="w-full h-0.5 bg-gradient-to-r from-accent/10 via-accent to-accent/10" />
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.25}
        className="w-full h-14 lg:h-24 bg-gradient-to-b from-accent/10 to-transparent -z-10"
        particleColor="#ac1236" />
      <section className="lg:max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-y-1 lg:gap-y-2 lg:w-7/12">
          <h2 className="font-hemi text-2xl lg:text-5xl">
            Play All Your Favorite Mini Games & More, All in One Place!
          </h2>
          <p className="text-sm lg:text-lg opacity-80">
            From quick mini games to full-fledged adventures, enjoy endless fun without the hassle of switching between platforms. Play everything you love, right here, at one convenient location!
          </p>
        </div>
      </section>
    </header>
  )
}

export default Header
