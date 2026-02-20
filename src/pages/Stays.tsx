import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Bath, Mountain, Flame, ChefHat, Car } from "lucide-react";
import heroImg from "@/assets/the-house-room.jpg";
import kathkuniWall from "@/assets/kathkuni-wall.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import shepherdHostel from "@/assets/shepherd-hostel.jpg";
import fireStove from "@/assets/fire-stove.jpg";
import forestLight from "@/assets/forest-light.jpg";

const accommodations = [
  {
    id: "kathkuni-house",
    name: "Entire Kathkuni House",
    tagline: "Full Villa Experience",
    description:
      "Experience the complete Kathkuni House with all 6 bedrooms — 2 duplex suites and 2 deluxe rooms. Perfect for families, groups, or retreats seeking an exclusive mountain getaway with private dining, outdoor spaces, and dedicated chef and staff service.",
    features: [
      { icon: Users, text: "6-16 guests" },
      { icon: Bath, text: "6 bedrooms" },
      { icon: ChefHat, text: "Exclusive chef & staff" },
      { icon: Mountain, text: "Panoramic views" },
    ],
    details: [
      "2 Duplex suites with hot tubs",
      "2 Deluxe attic rooms",
      "Private dining area",
      "Exclusive outdoor spaces",
      "Wood-fired fireplace",
      "Full kitchen access",
    ],
    img: heroImg,
    airbnbLink: "https://www.airbnb.com",
  },
  {
    id: "heritage-wing",
    name: "Heritage Wing",
    tagline: "4 Bedroom Valley View",
    description:
      "The valley-facing section of the Kathkuni Villa offers an exclusive verandah and panoramic mountain views. Ideal for medium-sized groups wanting privacy while sharing the heritage experience.",
    features: [
      { icon: Users, text: "4-8 guests" },
      { icon: Bath, text: "4 bedrooms" },
      { icon: Mountain, text: "Valley views" },
      { icon: Flame, text: "Fireplace" },
    ],
    details: [
      "Exclusive verandah access",
      "Panoramic valley views",
      "Traditional Kathkuni interiors",
      "Shared dining space",
      "Wood-fired heating",
    ],
    img: kathkuniWall,
    airbnbLink: "https://www.airbnb.com",
  },
  {
    id: "winter-blue",
    name: "Winter Blue Duplex Studio",
    tagline: "Signature Two-Level Suite",
    description:
      "Our signature two-level suite offers a thoughtfully crafted lifestyle experience with panoramic mountain views. Features a stone hot tub, fireplace, and kitchenette — perfect for couples seeking an intimate mountain retreat.",
    features: [
      { icon: Users, text: "2 guests" },
      { icon: Bath, text: "Private bathroom" },
      { icon: Flame, text: "Stone hot tub & fireplace" },
      { icon: Mountain, text: "Panoramic views" },
    ],
    details: [
      "Two-level duplex design",
      "Private stone hot tub",
      "Indoor fireplace",
      "Kitchenette",
      "Work desk",
      "Mountain-facing balcony",
    ],
    img: shepherdHostel,
    airbnbLink: "https://www.airbnb.com",
  },
  {
    id: "summer-gold",
    name: "Summer Gold Duplex Suite",
    tagline: "North-Facing Premium Suite",
    description:
      "A north-facing premium suite with panoramic views featuring wooden floors, earthen walls, and hanging verandas. Includes stone hot tub and fireplace for the ultimate mountain comfort.",
    features: [
      { icon: Users, text: "2 guests" },
      { icon: Bath, text: "Private bathroom" },
      { icon: Flame, text: "Hot tub & fireplace" },
      { icon: Mountain, text: "North-facing views" },
    ],
    details: [
      "Premium duplex layout",
      "Wooden floors & earthen walls",
      "Hanging verandas",
      "Private stone hot tub",
      "Cozy fireplace",
      "Kitchenette facilities",
    ],
    img: fireStove,
    airbnbLink: "https://www.airbnb.com",
  },
  {
    id: "fall-maroon",
    name: "Fall Maroon Attic Room",
    tagline: "Cozy Double Room",
    description:
      "A charming double room tucked in the attic with a queen bed, kitchenette, and garden-view balcony. The perfect retreat for couples or solo travelers seeking simplicity with comfort.",
    features: [
      { icon: Users, text: "2 guests" },
      { icon: Bath, text: "Attached shower" },
      { icon: Mountain, text: "Garden views" },
    ],
    details: [
      "Queen bed",
      "Attached shower bath",
      "Small kitchenette",
      "Garden-view balcony",
      "Traditional decor",
    ],
    img: woodTexture,
    airbnbLink: "https://www.airbnb.com",
  },
  {
    id: "spring-green",
    name: "Spring Green Attic Room",
    tagline: "Mountain View Double",
    description:
      "A cozy double room with queen bed, attached shower bath, and a small balcony offering views of snow peaks and the village. Simple, comfortable, and connected to the landscape.",
    features: [
      { icon: Users, text: "2 guests" },
      { icon: Bath, text: "Attached shower" },
      { icon: Mountain, text: "Snowpeak & village views" },
    ],
    details: [
      "Queen bed",
      "Attached shower bath",
      "Small balcony",
      "Snowpeak views",
      "Village atmosphere",
    ],
    img: forestLight,
    airbnbLink: "https://www.airbnb.com",
  },
];

const policies = [
  { label: "Check-in", value: "2:00 PM" },
  { label: "Check-out", value: "12:00 PM" },
  { label: "Cancellation", value: "14 days notice required" },
  { label: "Payment", value: "Full payment before arrival" },
  { label: "Breakfast", value: "9:00 AM - 11:00 AM" },
  { label: "Dinner", value: "8:00 PM - 11:00 PM" },
];

const Stays = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <PageTransition>
      <main className="bg-background overflow-x-hidden">
        <Navigation />

        {/* Hero */}
        <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img src={heroImg} alt="Kathkuni House interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/40" />
          </motion.div>
          <div className="relative z-10 flex flex-col justify-end h-full pb-16 px-6 md:px-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-background/60 mb-4"
            >
              Book Your Stay
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl text-background font-normal"
            >
              Accommodation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-sans text-base text-background/70 mt-4 max-w-xl"
            >
              From full villa experiences to intimate attic rooms — find your perfect mountain retreat
              in our restored 100-year-old Kathkuni house.
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.3] mb-8">
                Stay in a living piece of Himalayan heritage.
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                Our accommodations are housed in a meticulously restored Kathkuni-style house,
                featuring traditional wood-and-stone construction that has stood for over a century.
                Each space blends authentic heritage with modern comfort.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Whether you're seeking a full villa experience with exclusive staff or a cozy
                attic room with mountain views, we offer spaces designed for conscious travelers
                who appreciate slow living and sustainable design.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Accommodations */}
        {accommodations.map((room, i) => (
          <section
            key={room.id}
            id={room.id}
            className={`py-16 md:py-24 px-6 md:px-12 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className={i % 2 === 1 ? "lg:order-1 lg:[direction:ltr]" : ""}>
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                      {room.tagline}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl mb-4">{room.name}</h3>
                    <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {room.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <feature.icon className="w-4 h-4" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {room.details.map((detail, j) => (
                        <p key={j} className="font-sans text-sm text-muted-foreground/70">
                          • {detail}
                        </p>
                      ))}
                    </div>

                    <a
                      href={room.airbnbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-sans text-xs tracking-[0.2em] uppercase bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors"
                    >
                      Book on Airbnb
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}

        {/* Policies & Practical Info */}
        <section className="py-24 md:py-36 px-6 md:px-12 bg-secondary/50">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">
                Practical Information
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
                Before You Arrive
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {policies.map((policy, i) => (
                <ScrollReveal key={policy.label} delay={i * 0.1}>
                  <div className="text-center">
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      {policy.label}
                    </p>
                    <p className="font-serif text-lg">{policy.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="bg-background p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Car className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl mb-3">Getting Here</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                      We are located 4km up a dirt road from Naggar (approximately 30-minute drive).
                      The remote location is part of the experience — please plan accordingly.
                    </p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      <strong>Complimentary shuttle service:</strong><br />
                      Pickup: 12:30 PM - 9:00 PM<br />
                      Drop-off: 10:30 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mt-6">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    <strong>Note:</strong> We do not have 24-hour staff on site.
                    Late-night service charges apply between 11 PM and 6 AM.
                    A 5% service fee applies after 48 hours of booking.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 md:py-32 px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl italic mb-6">
              Questions about your stay?
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-8 max-w-lg mx-auto">
              We're happy to help you plan your mountain retreat.
              Reach out via WhatsApp or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919816650400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+919816650400"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                Call +91 98166 50400
              </a>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Stays;
