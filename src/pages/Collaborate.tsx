import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Users, Home, Utensils, Heart } from "lucide-react";
import heroImg from "@/assets/hands-working.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import villagePath from "@/assets/village-path.jpg";
import experienceCultural from "@/assets/experience-cultural.jpg";

const opportunities = [
  {
    id: "internship",
    title: "Internship Program",
    tagline: "Immersive Learning Experience",
    description:
      "Join us for an immersive internship experience at our 100-year-old Kathkuni-style house in the Kullu Valley. Interns become part of a unique initiative that blends sustainable design, cultural preservation, and community development.",
    whatYouGet: [
      "Hands-on experience in sustainable rural tourism",
      "Learning traditional construction and design techniques",
      "Exposure to community development projects",
      "Free accommodation and meals during your stay",
      "Certificate of completion",
    ],
    whatWeNeed: [
      "Design students (architecture, interior, landscape)",
      "Hospitality and tourism students",
      "Environmental and sustainability focused individuals",
      "Minimum 4-week commitment",
    ],
    applyLink: "https://forms.gle/1asR5LtLfVeVffQp9",
    img: woodTexture,
  },
  {
    id: "volunteering",
    title: "Volunteer Opportunities",
    tagline: "Give Back While Growing",
    description:
      "Our volunteer program emphasizes hospitality, design projects, community workshops, and operational support within an environmentally conscious rural setting. It's an opportunity to contribute to positive community change while experiencing authentic Himalayan life.",
    whatYouGet: [
      "Free long-term accommodation",
      "All meals included",
      "Experience working in sustainable rural tourism",
      "Engagement with local culture and traditions",
      "Flexible duration (minimum 2 weeks)",
    ],
    whatWeNeed: [
      "Help with guest services and hospitality",
      "Support for community workshops",
      "Garden and farm maintenance",
      "Content creation and documentation",
      "General operational support",
    ],
    applyLink: "https://forms.gle/hsLja1HfP7KJUuyPA",
    img: villagePath,
  },
  {
    id: "collaborations",
    title: "Creative Collaborations",
    tagline: "For Researchers, Designers & Cultural Practitioners",
    description:
      "We seek collaborators interested in redesigning rural lifestyles while experiencing authentic Himalayan living. Every element of the experience here represents unique cultural and ecological harmony — and we're always looking for new perspectives.",
    whatYouGet: [
      "Access to a living research environment",
      "Accommodation at discounted rates",
      "Connection with local artisans and community",
      "Platform to showcase your work",
      "Collaborative project opportunities",
    ],
    whatWeNeed: [
      "Researchers in vernacular architecture",
      "Sustainable design practitioners",
      "Cultural documentarians and anthropologists",
      "Artists and creative practitioners",
      "Food and culinary researchers",
    ],
    applyLink: "https://forms.gle/ZmCJe1XgUUGacFZE6",
    img: experienceCultural,
  },
];

const benefits = [
  {
    icon: Home,
    title: "Free Accommodation",
    description: "Stay in our traditional Kathkuni house while you learn and contribute.",
  },
  {
    icon: Utensils,
    title: "Meals Included",
    description: "Farm-to-table meals from our Shepherd Cafe throughout your stay.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Work alongside locals and become part of village life.",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Contribute to sustainable design and cultural preservation.",
  },
];

const Collaborate = () => {
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
            <img
              src={heroImg}
              alt="Hands working on traditional craft"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </motion.div>
          <div className="relative z-10 flex flex-col justify-end h-full pb-16 px-6 md:px-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-background/60 mb-4"
            >
              Join Our Community
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl text-background font-normal"
            >
              Collaborate
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-sans text-base text-background/70 mt-4 max-w-xl"
            >
              Internships, volunteering, and creative partnerships for those who share our vision.
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.3] mb-8">
                Become part of something meaningful.
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                ART Village Naggar is more than a place to stay — it's a living project dedicated
                to sustainable design, cultural preservation, and community development. We welcome
                individuals who share our values and want to contribute while learning.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Whether you're a student seeking hands-on experience, a volunteer wanting to give back,
                or a creative professional looking for collaboration — there's a place for you here.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">
                What We Offer
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
                Benefits of joining our community.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit.title} delay={i * 0.1}>
                  <div className="text-center">
                    <benefit.icon className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-serif text-lg mb-2">{benefit.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities */}
        {opportunities.map((opp, i) => (
          <section
            key={opp.id}
            id={opp.id}
            className={`py-24 md:py-36 px-6 md:px-12 ${i % 2 === 1 ? "bg-secondary/20" : ""}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={opp.img} alt={opp.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className={i % 2 === 1 ? "lg:order-1 lg:[direction:ltr]" : ""}>
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                      {opp.tagline}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl mb-4">{opp.title}</h2>
                    <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
                      {opp.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                          What You Get
                        </h3>
                        <ul className="space-y-2">
                          {opp.whatYouGet.map((item, j) => (
                            <li key={j} className="font-sans text-sm text-muted-foreground/80 flex items-start gap-2">
                              <span className="text-foreground mt-0.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                          What We Need
                        </h3>
                        <ul className="space-y-2">
                          {opp.whatWeNeed.map((item, j) => (
                            <li key={j} className="font-sans text-sm text-muted-foreground/80 flex items-start gap-2">
                              <span className="text-foreground mt-0.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href={opp.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors"
                    >
                      Apply Now <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}

        {/* Quote Section */}
        <section className="py-24 md:py-36 px-6 md:px-12 bg-foreground text-background">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-5xl italic leading-[1.2] mb-8">
                "Every element of the experience here represents unique cultural and ecological harmony."
              </h2>
              <p className="font-sans text-base text-background/70 leading-relaxed max-w-2xl mx-auto mb-8">
                Surrounded by forests, snow-capped peaks, and traditional architecture,
                our collaborators find inspiration in the meeting point of ancient wisdom
                and contemporary sustainable practice.
              </p>
              <p className="font-sans text-sm text-background/50">
                Ideal for those valuing slow living and sustainable practices.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 md:py-32 px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Have questions?
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-8 max-w-lg mx-auto">
              We're happy to discuss opportunities and find the right fit for your skills and interests.
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
              <Link
                to="/contact"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                Contact Page
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Collaborate;
