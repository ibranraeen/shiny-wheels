import { Clock, MapPin, Phone } from 'lucide-react';

const ServiceArea = () => {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We serve customers across Mumbai and nearby locations with doorstep and center-based services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5839510950527!2d73.00177880000001!3d19.1258995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1699d6967a5%3A0x348e3b5851a9d68b!2sTEGIYA%20TYRE%20SERVICE!5e0!3m2!1sen!2sin!4v1753899573779!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              ></iframe>
            </div>
          </div>

          {/* Service Areas Info */}
          <div className="order-1 lg:order-2">

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="text-blue-600" size={24} />
                  <h4 className="font-bold text-gray-800">Visit Our Center</h4>
                </div>
                <p className="text-gray-700 mb-2">
                  Shop No 1/2, near Meena Hospital Road, Talvali, Ghansoli Gaon, Ghansoli, Navi Mumbai, Maharashtra 400701
                </p>
                <button
                  onClick={() => window.open('https://maps.app.goo.gl/7Mssr2ZHEorgQoLz9', '_blank')}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Get Directions →
                </button>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="text-green-600" size={24} />
                  <h4 className="font-bold text-gray-800">Working Hours</h4>
                </div>
                <div className="text-gray-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold">8:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">8:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="text-yellow-600" size={24} />
                  <h4 className="font-bold text-gray-800">Emergency Service</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Need urgent tyre repair or breakdown assistance?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+917977841620"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-center font-semibold transition-colors"
                  >
                    Call Now
                  </a>
                  <button
                    onClick={() => {
                      const message = encodeURIComponent("Hi, I need emergency tyre repair service!");
                      window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-center font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;