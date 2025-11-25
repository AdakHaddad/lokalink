import { useState } from 'react';
import { ChevronRight, MapPin, ShoppingBag, Users } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

const slides = [
  {
    icon: MapPin,
    title: 'Temukan Produk Lokal',
    description: 'Cari produk lokal autentik dan UMKM di sekitar Anda dengan pencarian berbasis lokasi',
    color: 'bg-emerald-500'
  },
  {
    icon: ShoppingBag,
    title: 'Dukung UMKM',
    description: 'Terhubung langsung dengan penjual lokal dan bantu kembangkan ekonomi komunitas Anda',
    color: 'bg-orange-500'
  },
  {
    icon: Users,
    title: 'Berkembang Bersama',
    description: 'Bergabunglah dengan komunitas pembeli dan penjual untuk menciptakan pasar lokal yang berkelanjutan',
    color: 'bg-blue-500'
  }
];

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNavigate('login');
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-full flex flex-col md:max-w-4xl md:mx-auto md:shadow-lg md:rounded-3xl md:overflow-hidden">
      {/* Slide Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 md:px-12 md:py-16">
        <div className={`${slide.color} rounded-full p-8 mb-8 md:p-12 md:mb-12`}>
          <Icon className="w-20 h-20 text-white md:w-24 md:h-24" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-center mb-4 md:text-2xl md:mb-6">
          {slide.title}
        </h1>
        
        <p className="text-center text-gray-600 mb-12 md:text-lg md:mb-16 md:max-w-2xl">
          {slide.description}
        </p>

        {/* Pagination Dots */}
        <div className="flex gap-2 mb-8 md:gap-3 md:mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all md:h-3 ${
                index === currentSlide 
                  ? 'w-8 bg-emerald-600 md:w-12' 
                  : 'w-2 bg-gray-300 md:w-3'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 md:p-8 md:pb-12">
        <button
          onClick={handleNext}
          className="w-full bg-emerald-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors md:py-6 md:text-lg"
        >
          {currentSlide === slides.length - 1 ? 'Mulai' : 'Lanjut'}
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        {currentSlide < slides.length - 1 && (
          <button
            onClick={() => onNavigate('login')}
            className="w-full text-gray-600 py-4 md:py-6 md:text-base"
          >
            Lewati
          </button>
        )}
      </div>
    </div>
  );
}