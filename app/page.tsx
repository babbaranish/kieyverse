import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import Founders from "@/components/Founders";
import CoreServices from "@/components/CoreServices";
import ServiceTypes from "@/components/ServiceTypes";
import ClientIndustries from "@/components/ClientIndustries";
import Clientele from "@/components/Clientele";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyOverview />
      <Founders />
      <CoreServices />
      <ServiceTypes />
      <ClientIndustries />
      <Clientele />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
