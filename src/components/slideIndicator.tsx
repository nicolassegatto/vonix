interface SlideIndicatorProps {
  current: number
  count: number
}

export function SlideIndicator({ current, count }: SlideIndicatorProps) {
  return (
    <div className="py-2 text-center">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={`mx-1 inline-block ${
            index === current - 1
              ? "h-2 w-6 rounded-full bg-muted-foreground transition-all"
              : "h-2 w-2 rounded-full bg-muted-foreground transition-all"
          }`}
        ></span>
      ))}
    </div>
  )
}
