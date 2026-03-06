import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const exploreLinks = [
  { to: "/slow-life", label: "Slow Life" },
  { to: "/experiences", label: "Experiences" },
  { to: "/dining", label: "Dining" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/story", label: "Our Story" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on a page with a hero (dark background at top)
  const hasHero = ["/", "/slow-life", "/experiences"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close explore dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setExploreOpen(false);
    if (exploreOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [exploreOpen]);

  // Determine navbar style based on scroll and page
  const showSolidBg = scrolled || !hasHero;
  const textColorClass = showSolidBg ? "text-foreground" : "text-background";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolidBg
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12">
          <Link
            to="/"
            className={`font-serif text-lg tracking-wide transition-colors ${textColorClass}`}
          >
            Art Village Naggar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Explore Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExploreOpen(!exploreOpen);
                }}
                className={`flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-70 ${textColorClass}`}
              >
                Explore
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${exploreOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full left-0 mt-4 bg-background border border-border shadow-lg min-w-[160px]"
                  >
                    {exploreLinks.map((link) => (
                      <Link
                        key={link.to + link.label}
                        to={link.to}
                        onClick={() => setExploreOpen(false)}
                        className="block px-4 py-3 font-sans text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collaborate Link */}
            <Link
              to="/collaborate"
              className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-70 ${textColorClass}`}
            >
              Collaborate
            </Link>

            {/* Book Your Stay CTA */}
            <Link
              to="/stays"
              className={`font-sans text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-colors ${
                showSolidBg
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "bg-background text-foreground hover:bg-background/90"
              }`}
            >
              Book Your Stay
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 transition-colors ${textColorClass}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-foreground flex flex-col items-center justify-center overflow-y-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 md:right-12 text-background p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center gap-6 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-2xl md:text-3xl transition-opacity duration-300 ${
                    location.pathname === "/"
                      ? "text-background opacity-100"
                      : "text-background/60 hover:text-background hover:opacity-100"
                  }`}
                >
                  Home
                </Link>
              </motion.div>

              {/* Explore Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-center"
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-background/40 mb-3">
                  Explore
                </p>
                <div className="flex flex-col items-center gap-3">
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.to + link.label}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`font-serif text-xl md:text-2xl transition-opacity duration-300 ${
                        location.pathname === link.to
                          ? "text-background opacity-100"
                          : "text-background/60 hover:text-background hover:opacity-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Stays */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/stays"
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-2xl md:text-3xl transition-opacity duration-300 ${
                    location.pathname === "/stays"
                      ? "text-background opacity-100"
                      : "text-background/60 hover:text-background hover:opacity-100"
                  }`}
                >
                  Stays
                </Link>
              </motion.div>

              {/* Collaborate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/collaborate"
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-2xl md:text-3xl transition-opacity duration-300 ${
                    location.pathname === "/collaborate"
                      ? "text-background opacity-100"
                      : "text-background/60 hover:text-background hover:opacity-100"
                  }`}
                >
                  Collaborate
                </Link>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-2xl md:text-3xl transition-opacity duration-300 ${
                    location.pathname === "/contact"
                      ? "text-background opacity-100"
                      : "text-background/60 hover:text-background hover:opacity-100"
                  }`}
                >
                  Contact
                </Link>
              </motion.div>

              {/* Book CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-6"
              >
                <Link
                  to="/stays"
                  onClick={() => setIsOpen(false)}
                  className="inline-block font-sans text-xs tracking-[0.15em] uppercase px-6 py-3 bg-background text-foreground hover:bg-background/90 transition-colors"
                >
                  Book Your Stay
                </Link>
              </motion.div>
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-background/40 text-sm font-sans tracking-widest uppercase"
            >
              Embrace slow living
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
