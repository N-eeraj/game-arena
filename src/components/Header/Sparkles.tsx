import { SparklesCore } from "@components/ui/sparkles"

function Sparkles() {
  return (
    <>
      <div className="w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10" />
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.25}
        particleDensity={300}
        className="w-full h-14 lg:h-24 bg-gradient-to-b from-primary/10 to-transparent -z-10"
        particleColor="#ac1236" />
    </>
  )
}

export default Sparkles
