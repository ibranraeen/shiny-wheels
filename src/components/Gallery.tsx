import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Premium Car Wash",
      category: "Car Services"
    },
    {
      url: "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Professional Car Detailing",
      category: "Car Services"
    },
    {
      url: "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Bike Cleaning Service",
      category: "Bike Services"
    },
    {
      url: "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Tyre Repair & Replacement",
      category: "Tyre Services"
    },
    {
      url: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Interior Deep Cleaning",
      category: "Car Services"
    },
    {
      url: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Wheel & Rim Cleaning",
      category: "Detailing"
    },
    {
      url: "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Professional Bike Detailing",
      category: "Bike Services"
    },
    {
      url: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Tyre Service Tools",
      category: "Tyre Services"
    },
    {
      url: "https://images.pexels.com/photos/3354649/pexels-photo-3354649.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Professional Equipment",
      category: "Our Workshop"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformation! Before and after photos of our professional services
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-blue-300 mb-1">{image.category}</div>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm text-blue-300">{galleryImages[selectedImage].category}</div>
                <h3 className="text-lg font-bold">{galleryImages[selectedImage].title}</h3>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want your vehicle to look this good?</p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi, I saw your gallery and I'm impressed! I want to book a service.");
              window.open(`https://wa.me/917977841620?text=${message}`, '_blank');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>
            Book Your Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;