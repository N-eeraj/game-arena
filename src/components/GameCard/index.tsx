import Link from "next/link"
import Image from "next/image"
import Card from "@components/Card"
import { GameCardType } from "@customTypes/common"

function GameCard({ name, link, banner, description }: GameCardType) {
  return (
    <Link href={link}>
      <Card
        as="article"
        cornered
        hoverBeam>
        <Image
          src={banner}
          alt={name}
          width={120}
          height={120}
          style={{ height: "auto" }}
          className="w-full rounded-md" />
        <h3 className="mt-2 group-hover:text-accent font-hemi text-lg duration-100">
          {name}
        </h3>
        <p className="line-clamp-3 opacity-70 duration-100">
          {description}
        </p>
      </Card>
    </Link>
  )
}

export default GameCard
