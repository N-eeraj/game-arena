import { Metadata } from "next"
import Navbar from "./components/Navbar"
import { blinker, hemi } from "@hooks/useFonts"
import clsx from "clsx"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Game Arena | Play All Your Favorite Mini Games & More, All in One Place!",
    template: "%s | Game Arena",
  },
}

function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(
        "bg-background text-foreground font-blinker",
        hemi.variable,
        blinker.variable,
      )}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout
