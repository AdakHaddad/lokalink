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
    <div className="h-full flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className={`${slide.color} rounded-full p-8 mb-8`}>
          <Icon className="w-20 h-20 text-white" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-center mb-4">
          {slide.title}
        </h1>
        
        <p className="text-center text-gray-600 mb-12">
          {slide.description}
        </p>

        {/* Pagination Dots */}
        <div className="flex gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-emerald-600' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 space-y-3">
        <button
          onClick={handleNext}
          className="w-full bg-emerald-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
        >
          {currentSlide === slides.length - 1 ? 'Mulai' : 'Lanjut'}
          <ChevronRight className="w-5 h-5" />
        </button>
        
        {currentSlide < slides.length - 1 && (
          <button
            onClick={() => onNavigate('login')}
            className="w-full text-gray-600 py-4"
          >
            Lewati
          </button>
        )}
      </div>
    </div>
  );
}