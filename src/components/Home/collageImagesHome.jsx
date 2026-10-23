import { useState } from "react"
import i4 from "../../images/1.png"
import i2 from "../../images/2.png"
import i3 from "../../images/3.png"
import i1 from "../../geoPhotos/spiti-valley.png"
import i5 from "../../images/5.png"
import i6 from "../../images/6.png"
import i7 from "../../geoPhotos/rock-garden-chandigarh.png"
import i8 from "../../images/10.png"
import i9 from "../../images/9.png"
import rosegarder from "../../geoPhotos/rock-garden-chandigarh.png"


const sampleImages = [
  i1,i2,i3,i4,i5,i6,i7,i8,i9
]

export function EventGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="grid grid-cols-3 gap-2 h-full p-4">
        {sampleImages.map((src, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              index % 3 === 0 ? "row-span-2" : "row-span-1"
            } ${
              hoveredIndex === index
                ? "scale-105 z-10 shadow-xl"
                : hoveredIndex !== null
                ? "scale-95 opacity-70"
                : "scale-100"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`Collage sample ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse" />
      <div className="absolute bottom-8 left-8 w-6 h-6 bg-primary/30 rounded-full animate-bounce" />
    </div>
  )
}
