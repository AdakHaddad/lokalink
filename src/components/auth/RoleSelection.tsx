import { ShoppingBag, Store } from 'lucide-react';

interface RoleSelectionProps {
  onSelectRole: (role: 'buyer' | 'seller') => void;
}

export function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="h-full flex flex-col p-6 md:max-w-2xl md:mx-auto md:shadow-lg md:rounded-3xl md:overflow-hidden md:p-8">
      {/* Header */}
      <div className="text-center py-12 md:py-16">
        <h1 className="mb-3 md:text-2xl md:mb-6">Pilih Peran Anda</h1>
        <p className="text-gray-600 md:text-lg">
          Bagaimana Anda ingin menggunakan LOKALINK?
        </p>
      </div>

      {/* Role Cards */}
      <div className="flex-1 flex flex-col gap-4 md:gap-6 md:flex-row">
        {/* Buyer Card */}
        <button
          onClick={() => onSelectRole('buyer')}
          className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 hover:border-blue-400 transition-all hover:scale-[1.02] group md:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 rounded-full p-6 mb-6 group-hover:scale-110 transition-transform md:p-8 md:mb-8">
              <ShoppingBag className="w-12 h-12 text-white md:w-16 md:h-16" strokeWidth={1.5} />
            </div>
            <h2 className="text-blue-900 mb-3 md:text-xl md:mb-4">Saya Pembeli</h2>
            <p className="text-blue-700 md:text-base">
              Temukan dan beli produk lokal autentik dari UMKM di sekitar Anda
            </p>
          </div>
        </button>

        {/* Seller Card */}
        <button
          onClick={() => onSelectRole('seller')}
          className="flex-1 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-8 hover:border-orange-400 transition-all hover:scale-[1.02] group md:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 rounded-full p-6 mb-6 group-hover:scale-110 transition-transform md:p-8 md:mb-8">
              <Store className="w-12 h-12 text-white md:w-16 md:h-16" strokeWidth={1.5} />
            </div>
            <h2 className="text-orange-900 mb-3 md:text-xl md:mb-4">Saya Penjual (UMKM)</h2>
            <p className="text-orange-700 md:text-base">
              Kelola produk Anda dan terhubung dengan pelanggan lokal di area Anda
            </p>
          </div>
        </button>
      </div>

      {/* Skip Option */}
      <div className="pt-6 text-center md:pt-8">
        <p className="text-gray-500 md:text-base">
          Anda dapat mengubah ini nanti di pengaturan
        </p>
      </div>
    </div>
  );
}