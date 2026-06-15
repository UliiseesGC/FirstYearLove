import type { MonthData } from "../data/months"

interface SidebarProps {
  months: MonthData[]
  activeId: string
}

const ROTATIONS = [-1, 1.5, -0.5, 2, -1.5, 1, -2, 0.5, -1, 1.5, -0.5, 0]

export function Sidebar({ months, activeId }: SidebarProps) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-200/60 py-3 px-2 flex-col items-center gap-2">
      {months.map((month, i) => (
        <button
          key={month.id}
          onClick={() => handleClick(month.id)}
          className="w-12 h-10 rounded-lg flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border-2 select-none"
          style={{
            backgroundColor: activeId === month.id ? month.color : "transparent",
            borderColor: month.color,
            color: activeId === month.id ? "#fff" : month.color,
            transform: activeId === month.id ? "scale(1.1)" : `rotate(${ROTATIONS[i]}deg)`,
          }}
          onMouseEnter={(e) => {
            if (activeId !== month.id) {
              const el = e.currentTarget
              el.style.backgroundColor = "#fecdd3"
              el.style.transform = "scale(1.15)"
            }
          }}
          onMouseLeave={(e) => {
            if (activeId !== month.id) {
              const el = e.currentTarget
              el.style.backgroundColor = "transparent"
              el.style.transform = `rotate(${ROTATIONS[i]}deg)`
            }
          }}
          title={month.name}
        >
          {month.name.slice(0, 3)}
        </button>
      ))}
    </nav>
  )
}
