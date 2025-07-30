import { useEffect } from 'react';
import BookingForm from './components/BookingForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import ServiceArea from './components/ServiceArea';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  useEffect(() => {
    // Update page title for SEO
    document.title = 'Shiny Wheels - Professional Car & Bike Wash Services in Mumbai | Tyre Repair & Detailing';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional car wash, bike wash, tyre repair and vehicle detailing services in Mumbai. Eco-friendly, affordable, and reliable. Book via WhatsApp. Serving Andheri, Bandra, Powai and nearby areas.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional car wash, bike wash, tyre repair and vehicle detailing services in Mumbai. Eco-friendly, affordable, and reliable. Book via WhatsApp. Serving Andheri, Bandra, Powai and nearby areas.';
      document.head.appendChild(meta);
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Shiny Wheels",
      "description": "Professional car and bike wash services with tyre repair and detailing",
      "url": window.location.origin,
      "telephone": "+917977841620",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 15, Ground Floor, Sunset Point Complex",
        "addressLocality": "Andheri West",
        "addressRegion": "Mumbai",
        "postalCode": "400053",
        "addressCountry": "IN"
      },
      "openingHours": [
        "Mo-Sa 08:00-20:00",
        "Su 09:00-18:00"
      ],
      "priceRange": "₹50-₹699",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingForm />
        <Pricing />
        <Testimonials />
        <Gallery />
        <WhyChooseUs />
        <ServiceArea />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;