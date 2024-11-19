import { Metadata } from "next"
import Navbar from "./components/Navbar"
import { blinker, hemi } from "./useFonts"
import clsx from "clsx"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Game Arena",
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
        <main className="lg:max-w-7xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout
