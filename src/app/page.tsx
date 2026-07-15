import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Infrastructure from "@/components/sections/Infrastructure";
import Products from "@/components/sections/Products";
import GroupBanner from "@/components/sections/GroupBanner";
import Clients from "@/components/sections/Clients";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Infrastructure />
        <Products />
        <GroupBanner />
        <Clients />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
