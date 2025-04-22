import localFont from "next/font/local"
import { Blinker } from "next/font/google"

export const hemi = localFont({
  src: "../assets/font/hemi-head.otf",
  variable: "--font-hemi-head",
})

export const blinker = Blinker({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  variable: "--font-blinker",
})
