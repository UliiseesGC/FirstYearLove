import { motion, useInView } from "framer-motion"
import { useRef, useState, useCallback } from "react"
import type { MonthImage } from "../data/months"
import { HeartLoader } from "./HeartLoader"

interface ImageCardProps {
  images: MonthImage[]
  monthName: string
  index: number
}

const ROTATIONS = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.5]
const OVERLAP = 40

function formatDescription(text: string, idx: number, total: number): string {
  let result = text.trim()
  if (total > 1) {
    if (idx === 0) result = result + '...'
    else if (idx === total - 1) result = '...' + result
    else result = '...' + result + '...'
  }
  return result
}

export function ImageCard({ images, monthName, index }: ImageCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})
  const onImgLoad = useCallback((i: number) => {
    setLoadedImages(prev => ({ ...prev, [i]: true }))
  }, [])

  if (images.length === 0) return null

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Desktop: horizontal overlapping polaroids */}
      <div className="hidden md:flex justify-center items-center">
        <div className="flex justify-center items-end px-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center transition-all duration-200"
              style={{
                marginRight: i < images.length - 1 ? `-${OVERLAP}px` : "0",
                zIndex: hoveredIdx === i ? 50 : images.length - i,
              }}
            >
              <motion.div
                className="bg-white p-3 pb-2 rounded-sm shadow-lg cursor-pointer select-none"
                initial={{ rotate: ROTATIONS[i] }}
                whileHover={{ scale: 1.15, rotate: ROTATIONS[i] }}
                onHoverStart={() => setHoveredIdx(i)}
                onHoverEnd={() => setHoveredIdx(null)}
                onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              >
                <div className="relative w-52 h-52 md:w-72 md:h-72 overflow-hidden rounded-sm">
                  {!loadedImages[i] && <HeartLoader />}
                  <img
                    src={img.src}
                    alt={monthName}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${!loadedImages[i] ? 'opacity-0' : 'opacity-100'}`}
                    style={{ filter: expandedIdx === i ? "blur(4px) sepia(0.2)" : "sepia(0.3) contrast(1.05) brightness(1.05)" }}
                    onLoad={() => onImgLoad(i)}
                  />
                   {expandedIdx === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-10"
                    >
                      <p className="text-white text-center text-sm md:text-base italic leading-relaxed px-4 font-display drop-shadow-md">
                        &ldquo;{formatDescription(img.description ?? '', i, images.length)}&rdquo;
                      </p>
                    </motion.div>
                  )}
                </div>
                <p className="text-center text-xs text-stone-500 mt-2 font-hand select-none">
                  {img.date}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical polaroid stack */}
      <div className="flex md:hidden flex-col items-center gap-5 w-full max-w-xs mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="bg-white p-2.5 pb-2 rounded-sm shadow-lg cursor-pointer select-none w-full"
            initial={{ rotate: ROTATIONS[i % ROTATIONS.length], opacity: 0, y: 20 }}
            animate={inView ? { rotate: ROTATIONS[i % ROTATIONS.length], opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + i * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
              {!loadedImages[i] && <HeartLoader />}
              <img
                src={img.src}
                alt={`${monthName} - Foto ${i + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${!loadedImages[i] ? 'opacity-0' : 'opacity-100'}`}
                style={{ filter: expandedIdx === i ? "blur(4px) sepia(0.2)" : "sepia(0.3) contrast(1.05) brightness(1.05)" }}
                onLoad={() => onImgLoad(i)}
              />
              {expandedIdx === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-10"
                >
                  <p className="text-white text-center text-sm italic leading-relaxed px-4 font-display drop-shadow-md">
                    &ldquo;{img.description ?? ''}&rdquo;
                  </p>
                </motion.div>
              )}
            </div>
            <p className="text-center text-xs text-stone-500 mt-1.5 font-hand select-none">
              {img.date}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
