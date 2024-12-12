import type { ButtonHTMLAttributes } from "react"
import styles from "@styles/button.module.css"
import clsx from "clsx"

function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="group mt-2 px-8 py-2 relative bg-accent/20 hover:bg-accent/10 text-sm hover:shadow-2xl hover:shadow-accent/[0.1] transition duration-200 -skew-x-[30deg]">

      <div className={clsx("left-0 group-hover:duration-500", styles.sideStripe)} />
      <div className={clsx("right-0 group-hover:duration-500", styles.sideStripe)} />

      <span className="relative block text-white group-hover:text-accent font-semibold transition skew-x-[20deg] duration-400">
        {children}
      </span>

      <div className={clsx("-top-px from-transparent to-accent/80 group-hover:scale-x-100 origin-left", styles.hoverBeam)} />
      <div className={clsx("-bottom-px from-accent/80 to-transparent group-hover:scale-x-100 origin-right", styles.hoverBeam)} />
    </button>
  )
}

export default Button
