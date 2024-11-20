"use client"

import {
  useEffect,
  useState,
} from "react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { type CarouselApi } from "@/components/ui/carousel"
import clsx from "clsx"
import featuredGames from "@data/featuredGames.json"
import Image from "next/image"

function FeaturedGamesCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    className="relative w-full lg:w-1/2">
      <CarouselContent>
        {featuredGames.map(game => (
          <CarouselItem key={game.link}>
            <Link
              href={game.link}
              className="relative block h-52 lg:h-96">
              <Image
                src={game.banner}
                alt={game.name}
                fill />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      {count > 1 && (
        <ul className="absolute bottom-2.5 left-1/2 flex gap-x-2 -translate-x-1/2">
          {Array.from({ length: count }).map((_, index) => (
            <li
              key={index}
              className={clsx(
                "size-2 bg-foreground rounded-full drop-shadow-sm",
                { "opacity-50": index !== current },
              )} />
          ))}
        </ul>
      )}
    </Carousel>
  )
}

export default FeaturedGamesCarousel
