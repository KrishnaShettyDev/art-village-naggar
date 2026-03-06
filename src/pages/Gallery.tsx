import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
// Gallery images
import gallery1 from "@/assets/gallery/Gallery 1.webp";
import gallery2 from "@/assets/gallery/Gallery 2.webp";
import gallery3 from "@/assets/gallery/Gallery 3.webp";
import gallery4 from "@/assets/gallery/Gallery 4.webp";
import gallery5 from "@/assets/gallery/Gallery 5.webp";
import gallery6 from "@/assets/gallery/Gallery 6.webp";
import gallery7 from "@/assets/gallery/Gallery 7.webp";
import gallery8 from "@/assets/gallery/Gallery 8.webp";
import gallery9 from "@/assets/gallery/Gallery 9.webp";
import gallery10 from "@/assets/gallery/Gallery 10.webp";
import gallery11 from "@/assets/gallery/Gallery 11.webp";
import gallery12 from "@/assets/gallery/Gallery 12.webp";
import gallery14 from "@/assets/gallery/Gallery 14.webp";
import gallery15 from "@/assets/gallery/ Gallery 15.webp";
import gallery16 from "@/assets/gallery/Gallery 16.webp";
import gallery17 from "@/assets/gallery/Gallery 17.webp";
import gallery18 from "@/assets/gallery/Gallery 18.webp";
import gallery19 from "@/assets/gallery/Gallery 19.webp";
import gallery20 from "@/assets/gallery/Gallery 20.webp";
import gallery22 from "@/assets/gallery/Gallery 22.webp";
import gallery23 from "@/assets/gallery/Gallery 23.webp";
import gallery25 from "@/assets/gallery/Gallery 25.webp";
import gallery26 from "@/assets/gallery/Gallery 26.webp";
import gallery29 from "@/assets/gallery/Gallery 29.webp";
import gallery31 from "@/assets/gallery/Gallery 31.webp";
import gallery32 from "@/assets/gallery/Gallery 32.webp";
import gallery33 from "@/assets/gallery/Gallery 33.webp";
import gallery34 from "@/assets/gallery/Gallery 34.webp";
import gallery35 from "@/assets/gallery/Gallery 35.webp";
import gallery36 from "@/assets/gallery/Gallery 36.webp";
import gallery37 from "@/assets/gallery/Gallery 37.webp";
import gallery38 from "@/assets/gallery/Gallery 38.webp";
import gallery40 from "@/assets/gallery/Gallery 40.webp";
import gallery41 from "@/assets/gallery/Gallery 41.webp";
import gallery43 from "@/assets/gallery/Gallery 43.webp";
import gallery45 from "@/assets/gallery/Gallery 45.webp";
import gallery47 from "@/assets/gallery/Gallery 47.webp";
import gallery49 from "@/assets/gallery/Gallery 49.webp";
import gallery50 from "@/assets/gallery/Gallery 50.webp";
import gallery51 from "@/assets/gallery/Gallery 51.webp";
import gallery54 from "@/assets/gallery/Gallery 54.webp";
import gallery55 from "@/assets/gallery/Gallery 55.webp";
import gallery58 from "@/assets/gallery/Gallery 58.webp";
import gallery59 from "@/assets/gallery/Gallery 59.webp";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
}

const images: GalleryImage[] = [
  { src: gallery1, alt: "Kathkuni architecture detail", category: "Architecture", aspect: "landscape" },
  { src: gallery2, alt: "Mountain view from the village", category: "Landscapes", aspect: "landscape" },
  { src: gallery3, alt: "Traditional wooden interiors", category: "Spaces", aspect: "landscape" },
  { src: gallery4, alt: "Village life and culture", category: "Village Life", aspect: "portrait" },
  { src: gallery5, alt: "Deodar forest pathway", category: "Nature", aspect: "landscape" },
  { src: gallery6, alt: "Kathkuni wall texture", category: "Architecture", aspect: "square" },
  { src: gallery7, alt: "Morning light through windows", category: "Light Studies", aspect: "landscape" },
  { src: gallery8, alt: "Traditional craftsmanship", category: "Crafts", aspect: "landscape" },
  { src: gallery9, alt: "Valley panorama", category: "Landscapes", aspect: "landscape" },
  { src: gallery10, alt: "Cozy room interior", category: "Spaces", aspect: "portrait" },
  { src: gallery11, alt: "Village pathway", category: "Village Life", aspect: "landscape" },
  { src: gallery12, alt: "Wooden beam details", category: "Architecture", aspect: "landscape" },
  { src: gallery14, alt: "Sunset over the mountains", category: "Landscapes", aspect: "landscape" },
  { src: gallery15, alt: "Traditional stone work", category: "Architecture", aspect: "square" },
  { src: gallery16, alt: "Forest morning mist", category: "Nature", aspect: "landscape" },
  { src: gallery17, alt: "Rustic dining setup", category: "Spaces", aspect: "landscape" },
  { src: gallery18, alt: "Hand-carved woodwork", category: "Crafts", aspect: "portrait" },
  { src: gallery19, alt: "Village temple architecture", category: "Architecture", aspect: "landscape" },
  { src: gallery20, alt: "Snow-capped peaks view", category: "Landscapes", aspect: "landscape" },
  { src: gallery22, alt: "Traditional fireplace", category: "Spaces", aspect: "square" },
  { src: gallery23, alt: "Artisan at work", category: "Crafts", aspect: "portrait" },
  { src: gallery25, alt: "Deodar forest canopy", category: "Nature", aspect: "landscape" },
  { src: gallery26, alt: "Stone and wood detail", category: "Architecture", aspect: "landscape" },
  { src: gallery29, alt: "Village gathering space", category: "Village Life", aspect: "landscape" },
  { src: gallery31, alt: "Mountain trail", category: "Nature", aspect: "portrait" },
  { src: gallery32, alt: "Balcony view", category: "Spaces", aspect: "landscape" },
  { src: gallery33, alt: "Traditional textiles", category: "Crafts", aspect: "square" },
  { src: gallery34, alt: "Golden hour in the valley", category: "Light Studies", aspect: "landscape" },
  { src: gallery35, alt: "Carved wooden door", category: "Architecture", aspect: "portrait" },
  { src: gallery36, alt: "Local flora", category: "Nature", aspect: "landscape" },
  { src: gallery37, alt: "Warm interior lighting", category: "Spaces", aspect: "landscape" },
  { src: gallery38, alt: "Village elder portrait", category: "Village Life", aspect: "portrait" },
  { src: gallery40, alt: "Himalayan landscape", category: "Landscapes", aspect: "landscape" },
  { src: gallery41, alt: "Cooking by fire", category: "Village Life", aspect: "square" },
  { src: gallery43, alt: "Ancient tree trunk", category: "Nature", aspect: "landscape" },
  { src: gallery45, alt: "Room with a view", category: "Spaces", aspect: "landscape" },
  { src: gallery47, alt: "Traditional tools", category: "Crafts", aspect: "portrait" },
  { src: gallery49, alt: "Sunrise over ridges", category: "Light Studies", aspect: "landscape" },
  { src: gallery50, alt: "Kathkuni joint system", category: "Architecture", aspect: "landscape" },
  { src: gallery51, alt: "Veranda seating", category: "Spaces", aspect: "square" },
  { src: gallery54, alt: "Wild flowers", category: "Nature", aspect: "portrait" },
  { src: gallery55, alt: "Evening atmosphere", category: "Light Studies", aspect: "landscape" },
  { src: gallery58, alt: "Community celebration", category: "Village Life", aspect: "landscape" },
  { src: gallery59, alt: "Mountain silhouettes", category: "Landscapes", aspect: "landscape" },
];

const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory);

  return (
    <PageTransition>
    <main className="bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Gallery
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.15] mb-6">
              Materials. Light.<br />Hands. Fire.
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
              The visual language of Art Village — wood grain, stone texture, forest light,
              and the people who make this place what it is.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category filters */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-6xl mx-auto flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-sans text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-colors ${
                selectedCategory === cat
                  ? "border-foreground text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <ScrollReveal key={`${img.src}-${i}`} delay={i * 0.05}>
              <div
                className="break-inside-avoid cursor-pointer group overflow-hidden"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    img.aspect === "portrait" ? "aspect-[3/4]" : img.aspect === "square" ? "aspect-square" : "aspect-[3/2]"
                  }`}
                  loading="lazy"
                />
                <div className="py-2">
                  <p className="font-sans text-xs text-muted-foreground">{img.alt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-background/60 hover:text-background transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-background/50 font-sans text-sm">
              {filtered[lightboxIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
    </PageTransition>
  );
};

export default Gallery;
