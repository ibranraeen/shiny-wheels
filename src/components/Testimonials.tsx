import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Andheri West",
      rating: 5,
      text: "Amazing service! My car looks brand new after their premium detailing. The staff is professional and the pricing is very reasonable.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      service: "Premium Car Detailing"
    },
    {
      name: "Priya Sharma",
      location: "Bandra East",
      rating: 5,
      text: "Best bike wash service in Mumbai! They take care of every detail and the bike shine lasts for weeks. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      service: "Premium Bike Detailing"
    },
    {
      name: "Amit Patel",
      location: "Powai",
      rating: 5,
      text: "Quick and efficient tyre repair service. Fixed my puncture in 10 minutes and the price was very fair. Great work!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      service: "Tyre Repair"
    },
    {
      name: "Sneha Reddy",
      location: "Malad West",
      rating: 5,
      text: "Excellent wheel alignment service! My car drives much smoother now. The team is knowledgeable and uses modern equipment.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      service: "Wheel Alignment"
    },
    {
      name: "Vikram Singh",
      location: "Goregaon East",
      rating: 5,
      text: "Outstanding customer service! Booked via WhatsApp and they came to my location. Very convenient and professional.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      service: "Basic Car Wash"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 500+ satisfied customers trust us with their vehicles
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mx-4">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentSlide].location}</p>
                  <p className="text-blue-600 text-sm font-semibold">
                    {testimonials[currentSlide].service}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join our happy customers today!</p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi, I saw your great reviews and want to book a service!");
              window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>
            Book Your Service Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;