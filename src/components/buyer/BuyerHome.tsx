import { useState } from 'react';
import { Search, MapPin, Filter, Menu, Bell, Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BuyerHomeProps {
  onNavigate: (screen: string, data?: any) => void;
}

const mockProducts = [
  {
    id: 1,
    name: 'Sayuran Organik Segar',
    seller: 'Green Valley Farm',
    price: 'Rp 45.000',
    distance: '1,2 km',
    image: 'https://images.unsplash.com/photo-1631692994621-d26f83cf4db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldCUyMGZvb2R8ZW58MXx8fHwxNzYzOTg2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    category: 'Makanan'
  },
  {
    id: 2,
    name: 'Mangkuk Keramik Buatan Tangan',
    seller: 'Artisan Pottery',
    price: 'Rp 125.000',
    distance: '0,8 km',
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0c3xlbnwxfHx8fDE3NjQwMDI1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    category: 'Kerajinan'
  },
  {
    id: 3,
    name: 'Kopi Spesial Premium',
    seller: 'Local Roasters',
    price: 'Rp 85.000',
    distance: '2,1 km',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2Mzk3OTMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    category: 'Makanan'
  },
  {
    id: 4,
    name: 'Roti Sourdough Artisan',
    seller: 'Corner Bakery',
    price: 'Rp 35.000',
    distance: '1,5 km',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjQwNjEwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    category: 'Makanan'
  }
];

const categories = ['Semua', 'Makanan', 'Kerajinan', 'Fashion', 'Rumah', 'Kecantikan'];

export function BuyerHome({ onNavigate }: BuyerHomeProps) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 pt-6 pb-4 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-1 text-emerald-600">
            <MapPin className="w-5 h-5" />
            <span>Jakarta, ID</span>
          </div>
          <button className="p-2 relative">
            <Bell className="w-6 h-6 text-gray-700" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari produk lokal..."
            className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button 
            onClick={() => setShowFilterModal(true)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 text-white p-2.5 rounded-xl"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Map Preview */}
      <div className="mx-6 my-4 h-48 bg-gray-200 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
            <p className="text-gray-700">Tampilan Peta</p>
            <p className="text-gray-500">Menampilkan 12 UMKM terdekat</p>
          </div>
        </div>
        {/* Mock location pins */}
        <div className="absolute top-12 left-16 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <div className="absolute top-24 right-20 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <div className="absolute bottom-16 left-1/3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2>Produk Terdekat</h2>
          <button className="text-emerald-600">Lihat Semua</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {mockProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => onNavigate('product-details', { product })}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="relative h-32">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-2 left-2 bg-emerald-600 text-white px-2 py-1 rounded-lg">
                  {product.distance}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.seller}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 rounded-t-3xl shadow-lg">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-emerald-600">
            <div className="p-2 bg-emerald-50 rounded-xl">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs">Jelajah</span>
          </button>
          <button 
            onClick={() => onNavigate('chat')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <div className="p-2 rounded-xl">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs">Pesan</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <div className="p-2 rounded-xl relative">
              <ShoppingCart className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </div>
            </div>
            <span className="text-xs">Keranjang</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <div className="p-2 rounded-xl">
              <Heart className="w-6 h-6" />
            </div>
            <span className="text-xs">Disimpan</span>
          </button>
        </div>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2>Filter</h2>
              <button onClick={() => setShowFilterModal(false)} className="text-gray-500">✕</button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-3">Jarak</h3>
                <div className="space-y-2">
                  {['< 1 km', '1-3 km', '3-5 km', '> 5 km'].map((dist) => (
                    <label key={dist} className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded" />
                      <span>{dist}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3">Rentang Harga</h3>
                <div className="space-y-2">
                  {['< Rp 50.000', 'Rp 50.000 - 100.000', '> Rp 100.000'].map((price) => (
                    <label key={price} className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded" />
                      <span>{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3">Rating</h3>
                <div className="space-y-2">
                  {['4.5+ ⭐', '4.0+ ⭐', '3.5+ ⭐'].map((rating) => (
                    <label key={rating} className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded" />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button 
                onClick={() => setShowFilterModal(false)}
                className="flex-1 py-4 border border-gray-300 rounded-2xl"
              >
                Reset
              </button>
              <button 
                onClick={() => setShowFilterModal(false)}
                className="flex-1 py-4 bg-emerald-600 text-white rounded-2xl"
              >
                Terapkan Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}