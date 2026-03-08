import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import villageElder from "@/assets/village-elder.jpg";
import guestsTour from "@/assets/guests-tour.jpg";
import handsWorking from "@/assets/hands-working.jpg";
import collabImage from "@/Collaborate /collab.jpg";

const VOLUNTEER_FORM_LINK = "https://forms.gle/YZymXVkZmPHkdfVX8";
const COLLABORATE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSc6NDrHl92TSHChaNpfEV28TuNY7-TeZDR3tf1l_SQouhb4_A/viewform";

const Collaborate = () => {
  return (
    <PageTransition>
      <SEO />
      <main className="bg-background overflow-x-hidden">
        <Navigation />

        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-40 md:pb-20 px-5 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-6xl mb-4"
              >
                Collaborate
              </motion.h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="py-14 md:py-28 px-5 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
              <ScrollReveal direction="left">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={guestsTour}
                    alt="Volunteering at Art Village"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="right">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6">
                    Volunteer
                  </h2>
                  <div className="space-y-4 font-sans text-base text-muted-foreground leading-relaxed">
                    <p>
                      Join us in a transformative experience at our 100-year-old Kathkuni house,
                      nestled in the heart of the Kullu valley. As part of ART (Adaptive Rural Tourism),
                      a village-based design community, you will immerse yourself in the serenity of
                      rural life while contributing to sustainable tourism initiatives.
                    </p>
                    <p>
                      Interns will have the opportunity to engage in hospitality, design projects,
                      community workshops, and day-to-day operations, all while surrounded by the
                      breathtaking beauty of forests, snow peaks, and traditional Himalayan culture.
                    </p>
                    <p>
                      This is a unique chance to live in an environmentally conscious space designed
                      with locally sourced materials and upcycled elements. You will be part of a
                      meaningful community-focused project, with exposure to local culture, traditions,
                      and the chance to help foster positive change.
                    </p>
                    <p>
                      In exchange for your contributions, we offer free long-term accommodation, meals,
                      and the invaluable experience of working in a sustainable, rural tourism environment.
                      If you're passionate about hospitality, community engagement, and design, and want
                      to make a difference in a picturesque setting, this opportunity is for you!
                    </p>
                  </div>

                  <a
                    href={VOLUNTEER_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 font-sans text-xs tracking-[0.15em] uppercase bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-all duration-300"
                  >
                    Apply Now
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Life at ART Village - Image Break */}
        <section className="py-12 md:py-16 px-5 md:px-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Life at ART Village
              </p>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed">
                "Bask in the sun and laze on our wooden verandas, witness Himachali village
                customs and festivities, or take a hike through endless country landscapes and forests."
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Collaborate Section */}
        <section className="py-14 md:py-28 px-5 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
              <ScrollReveal delay={0.2} direction="left">
                <div className="md:order-2">
                  <h2 className="font-serif text-3xl md:text-4xl mb-6">
                    Collaborate
                  </h2>
                  <div className="space-y-4 font-sans text-base text-muted-foreground leading-relaxed">
                    <p>
                      The ART Village Naggar at Chachogi offers the most authentic Himalayan natural
                      living experiences you will come across. We tend to involve local skills and
                      knowledge in every aspect of the provided experience.
                    </p>
                    <p>
                      From the architecture to design to aesthetics to food to merriment, every
                      element of the experience here represents unique cultural and ecological harmony.
                    </p>
                    <p>
                      Come join us as collaborators in the creative processes of redesigning rural
                      lifestyle, or book a stay with us and experience the magic!
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a
                      href={COLLABORATE_FORM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-all duration-300"
                    >
                      Apply Now
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <Link
                      to="/shepherd-magazine"
                      className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      View Publications
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="md:order-1 aspect-[4/5] overflow-hidden">
                  <img
                    src={collabImage}
                    alt="Collaborate with Art Village"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-14 md:py-28 px-5 md:px-12 bg-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Have questions?
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                Reach out to us and we'll help you find the right opportunity.
              </p>
              <a
                href="https://wa.me/919816650400?text=Hi%2C%20I%27m%20interested%20in%20collaborating%20with%20Art%20Village%20Naggar"
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

export default Collaborate;
