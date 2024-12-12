import type {
  ReactNode,
  ComponentProps,
  ElementType,
} from "react"
import clsx from "clsx"
import styles from "@styles/card.module.css"

interface CardProps<Element extends ElementType> {
  as?: Element
  cornered?: boolean
  hoverBeam?: boolean
  className?: string
  children?: ReactNode
}

type CardComponentProps<Element extends ElementType> = CardProps<Element> & Omit<ComponentProps<Element>, keyof CardProps<Element>>

const corners = [
  "-top-px -left-px !border-r-transparent !border-b-transparent group-hover:duration-500",
  "-top-px -right-px !border-l-transparent !border-b-transparent group-hover:duration-500",
  "-bottom-px -right-px !border-l-transparent !border-t-transparent group-hover:duration-500",
  "-bottom-px -left-px !border-r-transparent !border-t-transparent group-hover:duration-500",
]

function Card<Element extends ElementType>({ as, children, cornered = false, hoverBeam = false, className, ...props }: CardComponentProps<Element>) {
  const Component = as ?? "div"

  return (
    <Component
      {...props}
      className={clsx(
        "relative group p-3 bg-background text-sm hover:shadow-2xl hover:shadow-accent/[0.1] transition duration-200 border border-accent/40",
        className,
      )}>
      {hoverBeam && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className={clsx(
            "-top-px group-hover:scale-x-150",
            styles.hoverBeam,
          )} />
          <div className={clsx(
            "-bottom-px group-hover:scale-x-150",
            styles.hoverBeam,
          )} />
        </div>
      )}

      {cornered && (
        <>
          {corners.map((corner, index) => (
            <div
              key={index}
              className={clsx(corner, styles.corner)} />
          ))}
        </>
      )}

      {children}
    </Component>
  )
}

export default Card
