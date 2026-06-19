import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ImageCard } from "./ImageCard"
import type { MonthData } from "../data/months"

interface MonthSectionProps {
  month: MonthData
  index: number
}

export function MonthSection({ month, index }: MonthSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-150px" })
  const isEven = index % 2 === 0

  return (
    <section
      id={month.id}
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:px-12 lg:px-24"
    >
      {/* Desktop: title on top */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:block text-4xl md:text-5xl font-bold mb-10 tracking-wide font-display"
        style={{ color: month.color }}
      >
        {month.name}
      </motion.h2>

      {/* Mobile: side-by-side with vertical title */}
      <div className="flex md:hidden items-center w-full max-w-lg gap-4 min-h-[80vh]">
        {isEven ? (
          <>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="[writing-mode:vertical-lr] rotate-180 text-3xl font-bold tracking-wide font-display shrink-0"
              style={{ color: month.color }}
            >
              {month.name}
            </motion.h2>
            <div className="flex-1 flex justify-center">
              <ImageCard images={month.images} monthName={month.name} index={index} />
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 flex justify-center">
              <ImageCard images={month.images} monthName={month.name} index={index} />
            </div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="[writing-mode:vertical-lr] rotate-180 text-3xl font-bold tracking-wide font-display shrink-0"
              style={{ color: month.color }}
            >
              {month.name}
            </motion.h2>
          </>
        )}
      </div>

      {/* Desktop: ImageCard below title */}
      <div className="hidden md:block">
        <ImageCard images={month.images} monthName={month.name} index={index} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-center text-sm md:text-base text-stone-500 italic max-w-md mt-8 font-light leading-relaxed"
      >
        {month.subtext}
      </motion.p>
    </section>
  )
}
