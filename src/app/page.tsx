import games from "@data/games.json"
import Header from "./components/Header"
import GameCard from "./components/GameCard"

function Home() {
  return (
    <>
      <Header />
      <h2>
        All Games
      </h2>
      <ul className="grid grid-cols-2">
        {games.map(game => (
          <li key={game.link}>
            <GameCard {...game} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
