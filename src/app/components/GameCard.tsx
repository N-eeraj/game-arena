import Link from "next/link"
import { GameCardType } from "@customTypes/common"

function GameCard({ name, link, description }: GameCardType) {
  return (
    <Link
      href={link}>
      <h3>
        {name}
      </h3>
      <p>
        {description}
      </p>
    </Link>
  )
}

export default GameCard