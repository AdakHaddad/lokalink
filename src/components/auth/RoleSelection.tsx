import { ShoppingBag, Store } from 'lucide-react';

interface RoleSelectionProps {
  onSelectRole: (role: 'buyer' | 'seller') => void;
}

export function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="h-full flex flex-col p-6">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="mb-3">Pilih Peran Anda</h1>
        <p className="text-gray-600">
          Bagaimana Anda ingin menggunakan LOKALINK?
        </p>
      </div>

      {/* Role Cards */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Buyer Card */}
        <button
          onClick={() => onSelectRole('buyer')}
          className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 hover:border-blue-400 transition-all hover:scale-[1.02] group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 rounded-full p-6 mb-6 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-blue-900 mb-3">Saya Pembeli</h2>
            <p className="text-blue-700">
              Temukan dan beli produk lokal autentik dari UMKM di sekitar Anda
            </p>
          </div>
        </button>

        {/* Seller Card */}
        <button
          onClick={() => onSelectRole('seller')}
          className="flex-1 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-8 hover:border-orange-400 transition-all hover:scale-[1.02] group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 rounded-full p-6 mb-6 group-hover:scale-110 transition-transform">
              <Store className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-orange-900 mb-3">Saya Penjual (UMKM)</h2>
            <p className="text-orange-700">
              Kelola produk Anda dan terhubung dengan pelanggan lokal di area Anda
            </p>
          </div>
        </button>
      </div>

      {/* Skip Option */}
      <div className="pt-6 text-center">
        <p className="text-gray-500">
          Anda dapat mengubah ini nanti di pengaturan
        </p>
      </div>
    </div>
  );
}