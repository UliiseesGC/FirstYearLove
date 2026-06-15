import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const terms = [
  "Acepto, quiero y deseo continuar mi vida junto con mi novio.",
  "Voy a decirle que sí a todo lo que él diga.",
  "No quiero a otro más que a él.",
  "Lo amo mucho.",
  "Voy a regalarle muchas cositas más (juegos en steam).",
  "Voy a darle muchos bisitos.",
]

interface WelcomeOverlayProps {
  onComplete: () => void
}

export function WelcomeOverlay({ onComplete }: WelcomeOverlayProps) {
  const [step, setStep] = useState(0)
  const [accepted, setAccepted] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center px-6"
      onClick={() => {
        if (step === 0) setStep(1)
      }}
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="te-amo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold font-display select-none cursor-pointer"
            style={{ color: "#8b1a1a" }}
          >
            Te amo
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="terms-prompt"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-lg"
          >
            <p className="text-xl md:text-2xl text-stone-700 mb-8 leading-relaxed">
              Antes de continuar, acepta los términos y condiciones:
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setStep(2)
              }}
              className="text-5xl md:text-6xl cursor-pointer hover:scale-110 transition-transform duration-200 bg-transparent border-none"
              aria-label="Aceptar términos"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20" fill="#e11d48">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="terms-list"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-4 mb-8 text-left w-full">
              {terms.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-stone-700 text-base md:text-lg leading-relaxed"
                >
                  <span className="font-bold text-vintage-red shrink-0 mt-0.5">{i + 1}.</span>
                  <span>{t}</span>
                </motion.li>
              ))}
            </ul>

            <label className="flex items-center gap-3 cursor-pointer mb-6 select-none">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="w-5 h-5 accent-vintage-red cursor-pointer"
              />
              <span className="text-stone-600 text-base">He leído y acepto los términos y condiciones</span>
            </label>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={accepted ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 0 }}
              transition={{ duration: 0.3 }}
              disabled={!accepted}
              onClick={(e) => {
                e.stopPropagation()
                if (accepted) onComplete()
              }}
              className="px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 cursor-pointer select-none"
              style={{
                backgroundColor: accepted ? "#8b1a1a" : "#d4a0a0",
                color: "#fff",
              }}
            >
              Continuar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
