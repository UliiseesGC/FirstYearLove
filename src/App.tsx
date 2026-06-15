import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BottomNav } from "./components/BottomNav"
import { HeroGallery } from "./components/HeroGallery"
import { ScrollLine } from "./components/ScrollLine"
import { Sidebar } from "./components/Sidebar"
import { WelcomeOverlay } from "./components/WelcomeOverlay"
import { MonthSection } from "./components/MonthSection"
import { useActiveSection } from "./hooks/useActiveSection"
import { months } from "./data/months"

function App() {
  const sectionIds = useMemo(() => months.map((m) => m.id), [])
  const activeId = useActiveSection(sectionIds)
  const [showWelcome, setShowWelcome] = useState(true)
  const [showTopBtn, setShowTopBtn] = useState(false)
  const footerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = showWelcome ? "hidden" : ""
    if (!showWelcome) window.scrollTo(0, 0)
    return () => { document.body.style.overflow = "" }
  }, [showWelcome])

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const scrollToBottom = useCallback(() => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const scrollToFirstMonth = useCallback(() => {
    const el = document.getElementById(months[0].id)
    el?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const activeMonth = useMemo(
    () => months.find((m) => m.id === activeId) ?? months[0],
    [activeId]
  )

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeMonth.bgImage}
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${activeMonth.bgImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="fixed inset-0 backdrop-blur-[10px] bg-cream/60" />

      <div className="relative z-10">
        <ScrollLine />
        <Sidebar months={months} activeId={activeId} />
        <BottomNav months={months} activeId={activeId} />

        <main className="pb-24 md:pb-0 md:ml-20 lg:ml-28">
          <header className="h-screen flex flex-col items-center justify-center text-center px-6">
            <h1
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              style={{ color: "#8b1a1a" }}
            >
              Nuestro primer año juntos
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 italic max-w-xl">
              Junio 2025 &mdash; Junio 2026
            </p>
            <HeroGallery onScrollToBottom={scrollToBottom} />
            <button
              onClick={scrollToFirstMonth}
              className="mt-4 text-stone-500 hover:text-vintage-red transition-colors duration-300 animate-bounce cursor-pointer"
              aria-label="Ir al primer mes"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-10 md:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </header>

          {months.map((month, i) => (
            <MonthSection key={month.id} month={month} index={i} />
          ))}

          <footer ref={footerRef} className="py-20 px-6 text-center text-stone-600 border-t border-rose-200 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed font-light">
              Sofi, veo las fotos que tenemos y siento muchísimo amor por vos. Recorro cada momento y siento felicidad. En cada foto me dan ganas de meterme ahí y repetir ese momento, una y otra vez. Qué ganas me dan de seguir compartiendo con vos cada momento de mi vida. Qué ganas tengo de planear con vos, de improvisar, de reír y de ser felices... de estar con vos. Veo las fotos y pienso: puta madre, qué linda es la vida con vos. Espero durar con vos toda la vida, y si hay más vidas, también. Todas esas vidas. Porque te elegiría una y otra vez.
            </p>
          </footer>
        </main>

        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 md:bottom-6 right-6 w-12 h-12 rounded-xl bg-vintage-red text-cream shadow-lg flex items-center justify-center text-xl hover:bg-rose-700 transition-all duration-300 z-50"
            aria-label="Volver al principio"
          >
            ↑
          </button>
        )}
        <AnimatePresence>
          {showWelcome && <WelcomeOverlay onComplete={() => setShowWelcome(false)} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
