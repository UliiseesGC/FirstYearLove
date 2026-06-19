const photos = [
  "/images/02-febrero/IMG_7240.jpeg",
  "/images/04-abril/IMG_8003.jpeg",
  "/images/05-mayo/IMG_8495.jpeg",
  "/images/08-agosto/IMG_3044.jpeg",
  "/images/09-septiembre/IMG_4911.jpeg",
  "/images/11-noviembre/IMG_6218.jpeg",
  "/images/12-diciembre/IMG_6444.jpeg",
  "/images/12-diciembre/IMG_6783.jpeg",
]

const POSITIONS = [
  { top: "5%", left: "10%", rotate: -8, delay: 0, duration: 4 },
  { top: "15%", left: "55%", rotate: 5, delay: 0.6, duration: 4.5 },
  { top: "40%", left: "5%", rotate: 3, delay: 1.2, duration: 5 },
  { top: "50%", left: "70%", rotate: -6, delay: 0.3, duration: 3.8 },
  { top: "10%", left: "75%", rotate: 7, delay: 1.8, duration: 4.2 },
  { top: "55%", left: "30%", rotate: -4, delay: 0.9, duration: 5.5 },
  { top: "30%", left: "40%", rotate: 2, delay: 1.5, duration: 4.8 },
  { top: "60%", left: "55%", rotate: -7, delay: 0, duration: 4.3 },
]

interface HeroGalleryProps {
  onScrollToBottom: () => void
}

export function HeroGallery({ onScrollToBottom }: HeroGalleryProps) {
  return (
    <div className="group relative w-full max-w-2xl mx-auto h-[350px] md:h-[420px] my-8 cursor-pointer" onClick={onScrollToBottom}>
      {photos.map((src, i) => {
        const pos = POSITIONS[i]
        return (
          <div
            key={i}
            className="absolute polaroid-float"
            style={{
              top: pos.top,
              left: pos.left,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`,
              transform: `rotate(${pos.rotate}deg)`,
            }}
          >
            <div className="bg-white p-2 pb-2.5 rounded-sm shadow-md">
              <img
                src={src}
                alt=""
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-sm sepia-[0.3] contrast-[1.05] brightness-[1.05]"
              />
            </div>
          </div>
        )
      })}

      <div className="absolute inset-0 backdrop-blur-none group-hover:backdrop-blur-[6px] transition-all duration-500 z-10 flex items-center justify-center"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        <span className="text-3xl md:text-5xl font-bold font-display opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg"
          style={{ color: "#8b1a1a" }}
        >
          Te amo
        </span>
      </div>
    </div>
  )
}
