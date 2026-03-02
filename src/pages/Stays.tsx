import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import ImageCarousel from "@/components/ImageCarousel";
import { motion } from "framer-motion";

// Import images
import theHouseRoom from "@/assets/the-house-room.jpg";
import kathkuniWall from "@/assets/kathkuni-wall.jpg";
import kathkuniDoor from "@/assets/kathkuni-door.jpg";
import shepherdHostel from "@/assets/shepherd-hostel.jpg";
import balconyView from "@/assets/balcony-view.jpg";
import cafeSpace from "@/assets/cafe-space.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import nightArchitecture from "@/assets/night-architecture.jpg";
import forestLight from "@/assets/forest-light.jpg";
import fireStove from "@/assets/fire-stove.jpg";
import villageElder from "@/assets/village-elder.jpg";
import guestsTour from "@/assets/guests-tour.jpg";

const accommodations = [
  {
    id: "kathkuni-house",
    name: "Entire Kathkuni House (6 Bedrooms)",
    description:
      "Whole House with 2 duplex suites, 2 delux rooms, dining area & outdoors, exclusive service of chef & staff, can accommodate 6 – 16 guests.",
    images: [theHouseRoom, kathkuniWall, cafeSpace, nightArchitecture],
    airbnbLink: "https://www.airbnb.co.in/rooms/1093498029501498953",
  },
  {
    id: "heritage-wing",
    name: "Heritage Wing (4 Bedrooms)",
    description:
      "Entire valley facing side of the Kathkuni Villa. With exclusive access to the sprawling verandhas and the spectacular views.",
    images: [kathkuniWall, balconyView, kathkuniDoor, theHouseRoom],
    airbnbLink: "https://www.airbnb.co.in/rooms/1190498029501498123",
  },
  {
    id: "winter-blue",
    name: "Winter Blue Duplex Studio",
    description:
      "A signature suite that has been thoughtfully crafted to offer a superb instagrammable lifestyle experience. It offers panoramic views, a healing stone hottub with a view, a charming fireplace and much more.",
    images: [cafeSpace, theHouseRoom, nightArchitecture, balconyView],
    airbnbLink: "https://www.airbnb.co.in/rooms/1093498029501498954",
  },
  {
    id: "summer-gold",
    name: "Summer Gold Duplex Suite",
    description:
      "North facing premium suite that offers panoramic views, wood floors, earthen walls, hanging verandas, a healing stone hottub, and a fireplace to make your stay extra soothing and unforgettable.",
    images: [balconyView, cafeSpace, kathkuniDoor, theHouseRoom],
    airbnbLink: "https://www.airbnb.co.in/rooms/1093498029501498955",
  },
  {
    id: "fall-maroon",
    name: "Fall Maroon Attic Room",
    description:
      "Double room with kitchenette, queen bed and an attached shower bath. Attached balcony with ample sun and garden side views.",
    images: [woodTexture, theHouseRoom, forestLight, kathkuniWall],
    airbnbLink: "https://www.airbnb.co.in/rooms/1093498029501498956",
  },
  {
    id: "spring-green",
    name: "Spring Green Attic Room",
    description:
      "Double room with queen beds and attached shower bath. Small balcony with Snowpeak and village side views.",
    images: [fireStove, balconyView, theHouseRoom, cafeSpace],
    airbnbLink: "https://www.airbnb.co.in/rooms/1093498029501498957",
  },
];

const Stays = () => {
  return (
    <PageTransition>
      <main className="bg-background overflow-x-hidden">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-6xl mb-4"
              >
                Accommodation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-sans text-sm tracking-[0.15em] text-muted-foreground"
              >
                Entire Villa • Duplex Suites • Rooms • Capsules
              </motion.p>
            </ScrollReveal>
          </div>
        </section>

        {/* Accommodations Grid */}
        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {accommodations.map((accommodation, index) => (
                <ScrollReveal key={accommodation.id} delay={index * 0.1}>
                  <div className="group">
                    {/* Image Carousel */}
                    <ImageCarousel
                      images={accommodation.images}
                      alt={accommodation.name}
                    />

                    {/* Content */}
                    <div className="pt-5">
                      <h3 className="font-serif text-xl md:text-2xl mb-3">
                        {accommodation.name}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">
                        {accommodation.description}
                      </p>

                      {/* Book Button */}
                      <a
                        href={accommodation.airbnbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
                      >
                        Book on Airbnb
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Need help choosing?
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                We're happy to help you find the perfect room for your stay.
                Reach out via WhatsApp and we'll respond within a few hours.
              </p>
              <a
                href="https://wa.me/919816650400?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20stay%20at%20Art%20Village%20Naggar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.1em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Stays;
