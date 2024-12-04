import GameCard from "@components/GameCard"
import { GameCardType } from "@customTypes/common"
import clsx from "clsx"

function GameCardGrid({ games, className }: {
  games: GameCardType[]
  className?: string
}) {
  return (
    <ul className={clsx(
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6",
      className
    )}>
      {games.map(game => (
        <li key={game.link}>
          <GameCard {...game} />
        </li>
      ))}
    </ul>
  )
}

export default GameCardGrid
