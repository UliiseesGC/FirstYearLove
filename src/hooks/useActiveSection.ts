import { useEffect, useMemo, useState } from "react"

export function useActiveSection(sectionIds: string[]) {
  const stableIds = useMemo(() => sectionIds, [sectionIds.join(",")])
  const [activeId, setActiveId] = useState<string>(stableIds[0] ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!best || entry.intersectionRatio > best.intersectionRatio)
          ) {
            best = entry
          }
        }
        if (best) {
          setActiveId(best.target.id)
        }
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] }
    )

    const elements: Element[] = []
    for (const id of stableIds) {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        elements.push(el)
      }
    }

    return () => {
      for (const el of elements) observer.unobserve(el)
    }
  }, [stableIds])

  return activeId
}
