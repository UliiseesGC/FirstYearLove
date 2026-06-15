import { useCallback, useEffect, useRef, useState } from "react"

const LINE_COLOR = "#8b1a1a"
const LINE_WIDTH = 2

export function ScrollLine() {
  const [size, setSize] = useState({ w: 1200, h: 800 })
  const [pageHeight, setPageHeight] = useState(0)
  const [pathDef, setPathDef] = useState("")
  const [totalLength, setTotalLength] = useState(0)
  const buildTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const rebuildTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const progressRef = useRef(0)
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          progressRef.current = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    let rafId: number
    const tick = () => {
      setDisplayProgress((prev) => {
        const diff = progressRef.current - prev
        if (Math.abs(diff) < 0.0005) return progressRef.current
        return prev + diff * 0.12
      })
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const buildPath = useCallback(() => {
    const sections: HTMLElement[] = []
    const header = document.querySelector("header")
    if (header) sections.push(header)
    for (let i = 1; i <= 13; i++) {
      const el = document.getElementById(`month-${i}`)
      if (el) sections.push(el)
    }
    const footer = document.querySelector("footer")
    if (footer) sections.push(footer)

    if (sections.length < 2) {
      setPathDef("")
      setTotalLength(0)
      return
    }

    const w = window.innerWidth
    const h = window.innerHeight
    const isDesktop = w >= 768
    const pad = isDesktop ? Math.max(80, w * 0.08) : 24
    const left = pad
    const right = w - pad
    const r = isDesktop ? Math.min(15, (right - left) / 4) : Math.min(10, (right - left) / 4)

    setSize({ w, h })
    setPageHeight(Math.max(document.documentElement.scrollHeight, h + 1))

    const getSide = (idx: number) => (idx % 2 === 0 ? left : right)

    const startX = getSide(0)
    const startY = sections[0].getBoundingClientRect().top + window.scrollY
    let d = `M ${startX} ${startY}`
    let lastY = startY

    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect()
      const bottom = rect.bottom + window.scrollY
      const x = getSide(i)
      const nextX = i < sections.length - 1 ? getSide(i + 1) : null

      if (nextX !== null) {
        const dx = nextX - x

        const vertEnd = bottom - r
        if (vertEnd > lastY) {
          d += ` L ${x} ${vertEnd}`
          lastY = vertEnd
        }

        d += ` A ${r} ${r} 0 0 ${dx > 0 ? 1 : 0} ${x + (dx > 0 ? r : -r)} ${bottom}`
        lastY = bottom

        const hEnd = nextX + (dx > 0 ? -r : r)
        d += ` L ${hEnd} ${bottom}`
        lastY = bottom

        d += ` A ${r} ${r} 0 0 ${dx > 0 ? 0 : 1} ${nextX} ${bottom + r}`
        lastY = bottom + r
      } else {
        if (bottom > lastY) {
          d += ` L ${x} ${bottom}`
        }
      }
    }

    const temp = document.createElementNS("http://www.w3.org/2000/svg", "path")
    temp.setAttribute("d", d)
    setTotalLength(temp.getTotalLength())
    setPathDef(d)
  }, [])

  useEffect(() => {
    buildPath()
    rebuildTimeoutRef.current = setTimeout(buildPath, 1000)

    const onResize = () => {
      clearTimeout(buildTimeoutRef.current)
      setSize({ w: window.innerWidth, h: window.innerHeight })
      setPathDef("")
      buildTimeoutRef.current = setTimeout(buildPath, 100)
    }
    window.addEventListener("resize", onResize)

    const mainEl = document.querySelector("main")
    let observer: ResizeObserver | undefined
    if (mainEl) {
      observer = new ResizeObserver(() => {
        clearTimeout(buildTimeoutRef.current)
        buildTimeoutRef.current = setTimeout(buildPath, 150)
      })
      observer.observe(mainEl)
    }

    return () => {
      window.removeEventListener("resize", onResize)
      clearTimeout(rebuildTimeoutRef.current)
      clearTimeout(buildTimeoutRef.current)
      observer?.disconnect()
    }
  }, [buildPath])

  const offset = totalLength * (1 - displayProgress)

  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none z-[60]"
      width={size.w}
      height={pageHeight}
      style={{ overflow: "visible" }}
    >
      {pathDef && totalLength > 0 && (
        <path
          d={pathDef}
          fill="none"
          stroke={LINE_COLOR}
          strokeWidth={LINE_WIDTH}
          strokeDasharray={totalLength}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}
