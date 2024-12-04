import Link from "next/link"
import Image from "next/image"
import { GameCardType } from "@customTypes/common"

function GameCard({ name, link, banner, description }: GameCardType) {
  return (
    <Link href={link}>
      <article className="relative group p-2 rounded-md bg-background text-sm hover:shadow-2xl hover:shadow-accent/[0.1] transition duration-200 border border-accent/40 overflow-hidden">
      <div className="absolute inset-x-0 h-0.5 scale-x-50 group-hover:scale-x-150 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-accent to-transparent transition duration-500" />
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
        <p className="line-clamp-3 opacity-70 group-hover:opacity-100 duration-100">
          {description}
        </p>
      </article>
    </Link>
  )
}

export default GameCard
