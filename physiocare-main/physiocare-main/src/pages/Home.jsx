import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import ContactCTA from "../components/home/ContactCTA";
import BookingSection from "../components/home/BookingSection";
import WhatsAppFloat from "../components/layout/WhatsAppFloat";


const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <BookingSection />
      <ContactCTA />
      <WhatsAppFloat/>
    </main>
  );
};

export default Home;
