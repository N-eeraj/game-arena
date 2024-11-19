export interface GameCardType {
  name: string
  link: string
  description: string
  playerModes: {
    singlePlayer: boolean
    multiplayer?: boolean
  } | {
    singlePlayer?: boolean
    multiplayer: boolean
  }
  banner: string
  tags: string[]
}
