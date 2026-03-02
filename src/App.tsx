import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Stays from "./pages/Stays";
import SlowLife from "./pages/SlowLife";
import Dining from "./pages/Dining";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import TheHouse from "./pages/TheHouse";
import TheCafe from "./pages/TheCafe";
import ShepherdHostel from "./pages/ShepherdHostel";
import Collaborate from "./pages/Collaborate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/stays/the-house" element={<TheHouse />} />
        <Route path="/stays/shepherd-hostel" element={<ShepherdHostel />} />
        <Route path="/slow-life" element={<SlowLife />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/dining/cafe" element={<TheCafe />} />
        <Route path="/story" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
