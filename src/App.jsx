
import Feature from "./components/Feature/Feature";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Manage from "./components/Section/Manage";
import Testimonial from "./components/Testimonial/Testimonial";
import Media from "./components/Media/Media";
import Spotlight from "./components/Spotlight/Spotlight";
import MediaFeature from "./components/MediaFeature/MediaFeature";
import Faqs from "./components/Faqs/Faqs";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Partners from "./components/Partners/Partners";
import Testimonial2 from "./components/Testimonial/Testimonial2";
import Testimonial3 from "./components/Testimonial/Testimonial3";
import Testimonial4 from "./components/Testimonial/Testimonial4";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Partners />
        <Manage />
        <Feature />
        <Testimonial />
        <Testimonial2 />
        <Testimonial3 />
        <Testimonial4 />
        <Media />
        <Spotlight />
        <MediaFeature />
        <Faqs />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
