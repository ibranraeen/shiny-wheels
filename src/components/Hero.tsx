// import { ArrowRight, Star } from 'lucide-react';

// const Hero = () => {
//   const handleWhatsAppBooking = () => {
//     const message = encodeURIComponent("Hi, I want to book a service. Please help me choose the right package for my vehicle.");
//     window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('public/hero.jpg')`
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//         <div className="mb-6">
//           <div className="flex items-center justify-center space-x-1 mb-4">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//             ))}
//             <span className="ml-2 text-sm opacity-90">4.9/5 (500+ Happy Customers)</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
//             <span className="block">Professional Car & Bike</span>
//             <span className="block text-blue-400">Wash Services</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
//             With 25+ years experience in professional car & bike wash, tyre services, and detailing.
//             Your vehicle deserves the best care.
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button
//             onClick={handleWhatsAppBooking}
//             className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl"
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
//             </svg>
//             <span>Book via WhatsApp</span>
//             <ArrowRight size={20} />
//           </button>

//           <button
//             onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
//             className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
//           >
//             Explore Services
//           </button>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
//             <div className="text-sm opacity-80">Happy Customers</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
//             <div className="text-sm opacity-80">Years Experience</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-blue-400 mb-2">8am-11pm</div>
//             <div className="text-sm opacity-80">Service Available</div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Hi, I want to book a service. Please help me choose the right package for my vehicle.");
    window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('public/hero.jpg')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block">Professional Car & Bike</span>
          <span className="block text-blue-400">Wash Services</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-xl mx-auto">
          25+ years of professional car care and detailing services
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleWhatsAppBooking}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>
            <span>Book Now</span>
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;