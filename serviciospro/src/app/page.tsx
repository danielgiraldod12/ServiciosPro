import ContactInfo from "./components/ContactInfo";
import MainMenu from "./components/MainMenu";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";


export default function Home() {
  return (
    <div >
 
  <MainMenu/>
  <ServicesSection />
  <TestimonialsSection/>
  <ContactInfo/>
    </div>
  );
}
