"use client"

import {
  useEffect,
  useState,
} from "react"
import Link from "next/link"
import Image from "next/image"

import Pagination from "@components/Header/FeaturedGamesCarousel/Pagination"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import type { CarouselApi } from "@components/ui/carousel"
import featuredGames from "@data/featuredGames.json"

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

  const handlePageSelect = (index: number) => {
    api?.scrollTo(index)
  }

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
              className="relative block h-56 sm:h-96 rounded-lg lg:rounded-r-none overflow-hidden">
              <Image
                src={game.banner}
                alt={game.name}
                fill
                priority
                className="object-cover" />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <Pagination
        count={count}
        current={current}
        onPageSelect={handlePageSelect} />
    </Carousel>
  )
}

export default FeaturedGamesCarousel
