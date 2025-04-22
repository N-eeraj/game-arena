import GameCardGrid from "@components/GameCard/Grid"
import clsx from "clsx"
import games from "@data/games.json"

function AllGames() {
  return (
    <section className="max-w-7xl mt-2 lg:mt-4 mx-auto p-4">
      <h2 className={clsx(
        "relative w-fit font-hemi text-2xl lg:text-4xl",
        "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-accent after:from-60% after:to-transparent after:origin-left after:-translate-x-3 after:scale-x-150 after:skew-x-[60deg]"
      )}>
        All Games
      </h2>

      <GameCardGrid
        games={games}
        className="mt-6" />
    </section>
  )
}

export default AllGames
