import clsx from "clsx"

function Pagination({ count, current, onPageSelect }: {
  count: number
  current: number
  onPageSelect: (index: number) => void
}) {
  if (count > 1)
    return (
      <ul className="absolute bottom-2.5 left-1/2 flex gap-x-2 px-4 py-2 bg-background/30 border border-foreground/30 rounded-full backdrop-blur-sm -translate-x-1/2">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className={clsx(
              "size-2 bg-white rounded-full drop-shadow-sm cursor-pointer transition duration-200",
              { "opacity-40": index !== current },
            )}
            onClick={() => onPageSelect(index)} />
        ))}
      </ul>
    )
}

export default Pagination
