import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import heroHome from "@/assets/hero-home.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import theHouseRoom from "@/assets/the-house-room.jpg";
import kathkuniWall from "@/assets/kathkuni-wall.jpg";
import handsWorking from "@/assets/hands-working.jpg";
import villagePath from "@/assets/village-path.jpg";
import fireStove from "@/assets/fire-stove.jpg";
import forestLight from "@/assets/forest-light.jpg";
import cafeFood from "@/assets/cafe-food.jpg";
import shepherdHostel from "@/assets/shepherd-hostel.jpg";
import villagePanorama from "@/assets/gallery-village-panorama.jpg";
import blogKathkuni from "@/assets/blog-kathkuni-detail.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
}

const images: GalleryImage[] = [
  { src: heroHome, alt: "Morning light through Kathkuni window", category: "Light Studies", aspect: "landscape" },
  { src: woodTexture, alt: "Deodar cedar grain, aged 200 years", category: "Material Portraits", aspect: "portrait" },
  { src: kathkuniWall, alt: "Wood-stone interlocking Kathkuni joint", category: "Material Portraits", aspect: "landscape" },
  { src: handsWorking, alt: "Artisan hands shaping reclaimed wood", category: "Hands at Work", aspect: "square" },
  { src: fireStove, alt: "The fire stove — centre of winter life", category: "The Fire Stove", aspect: "landscape" },
  { src: villagePath, alt: "Stone steps between Chachogi houses", category: "Village Texture", aspect: "portrait" },
  { src: forestLight, alt: "Afternoon light through deodar forest", category: "Light Studies", aspect: "landscape" },
  { src: theHouseRoom, alt: "The House — wabi-sabi room interior", category: "Spaces", aspect: "landscape" },
  { src: cafeFood, alt: "Wood-fired siddu on a clay plate", category: "Food Stories", aspect: "square" },
  { src: shepherdHostel, alt: "The Shepherd Hostel — radical simplicity", category: "Spaces", aspect: "landscape" },
  { src: villagePanorama, alt: "Chachogi village at golden hour", category: "Village Texture", aspect: "landscape" },
  { src: blogKathkuni, alt: "Kathkuni beam joint detail", category: "Material Portraits", aspect: "landscape" },
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
