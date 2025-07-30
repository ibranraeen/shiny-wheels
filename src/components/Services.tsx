import { Bike, Car, Settings, ShoppingCart, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Wash",
      description: "Professional car washing with premium products and techniques",
      packages: ["Basic Wash - ₹299", "Premium Detailing - ₹699"],
      whatsappText: "Hi, I want to book a Car Wash service"
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Bike Wash",
      description: "Complete bike cleaning and detailing services",
      packages: ["Basic Wash - ₹149", "Premium Detailing - ₹349"],
      whatsappText: "Hi, I want to book a Bike Wash service"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tyre Repairing",
      description: "Expert tyre repair, puncture fixing, and maintenance",
      packages: ["Puncture Fix - ₹50", "Tube Replacement - ₹150"],
      whatsappText: "Hi, I need Tyre Repairing service"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "New Tyre Sales",
      description: "Wide range of tyres from leading brands",
      packages: ["All Brands Available", "Best Market Prices"],
      whatsappText: "Hi, I want to buy new tyres"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Wheel Balancing",
      description: "Professional wheel balancing and alignment services",
      packages: ["Balancing - ₹200/wheel", "Alignment - ₹500"],
      whatsappText: "Hi, I need Wheel Balancing service"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Alignment",
      description: "Precise wheel alignment for smooth driving",
      packages: ["Front Alignment - ₹300", "Full Alignment - ₹500"],
      whatsappText: "Hi, I need Wheel Alignment service"
    }
  ];

  const handleServiceBooking = (whatsappText: string) => {
    const message = encodeURIComponent(whatsappText);
    window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive vehicle care solutions with professional expertise and premium equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-8">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"
                    >
                      {pkg}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleServiceBooking(service.whatsappText)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                  </svg>
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;