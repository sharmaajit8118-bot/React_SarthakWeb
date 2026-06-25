import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import EnquiryForm from "./components/EnquiryForm";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";

function App() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <EnquiryForm />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}

export default App;
