import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Car Wash - Basic Wash",
      price: "₹400",
      duration: "30 mins",
      features: [
        "Exterior wash & rinse",
        "Wheel cleaning",
        "Interior vacuuming",
        "Dashboard cleaning",
        "Window cleaning"
      ],
      popular: false,
      category: "Car Services"
    },
    {
      title: "Car Wash - Premium Detailing",
      price: "₹550",
      duration: "90 mins",
      features: [
        "Complete exterior wash",
        "Wax coating",
        "Interior deep cleaning",
        "Leather conditioning",
        "Engine bay cleaning",
        "Tyre shine"
      ],
      popular: true,
      category: "Car Services"
    },
    {
      title: "Bike Wash - Basic Wash",
      price: "₹100",
      duration: "20 mins",
      features: [
        "Complete bike wash",
        "Chain cleaning",
        "Wheel cleaning",
        "Basic polishing"
      ],
      popular: false,
      category: "Bike Services"
    },
    {
      title: "Bike Wash - Full Detailing",
      price: "₹150",
      duration: "45 mins",
      features: [
        "Complete bike wash",
        "Chain lubrication",
        "Chrome polishing",
        "Leather seat conditioning",
        "Engine cleaning",
        "Paint protection"
      ],
      popular: false,
      category: "Bike Services"
    },
    {
      title: "Tyre Repairing",
      price: "₹50+",
      duration: "15 mins",
      features: [
        "Puncture Fix Available",
        "Wheel Alignment Available",
        "Tube replacement",
        "Valve replacement",
        "Quality guarantee"
      ],
      popular: false,
      category: "Tyre Services"
    },
    {
      title: "Wheel Balancing",
      price: "₹300",
      duration: "30 mins",
      features: [
        "Balancing Available",
        "Alignment Available",
        "Computerized checking",
        "Road test included",
        "1 month warranty"
      ],
      popular: false,
      category: "Balancing Services"
    },
    {
      title: "Alignment",
      price: "₹500",
      duration: "30 mins",
      features: [
        "Front Alignment Available",
        "Full Alignment Available",
        "Computerized checking",
        "Road test included",
        "1 month warranty"
      ],
      popular: false,
      category: "Alignment Services"
    }
  ];

  const handleBookService = (serviceName: string) => {
    const message = encodeURIComponent(`Hi, I want to book ${serviceName}. Please provide more details.`);
    window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden charges. Premium services at affordable prices with satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${plan.popular ? 'border-blue-500' : 'border-gray-200'
                } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  <Star className="inline w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {plan.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    Duration: {plan.duration}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBookService(plan.title)}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom package? Contact us for special pricing!
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi, I need a custom service package. Please help me with pricing.");
              window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center mx-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;