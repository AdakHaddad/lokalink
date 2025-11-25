import { Plus, Package, ShoppingBag, TrendingUp, Users, Menu, Bell, Edit, Trash2, Eye } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SellerDashboardProps {
  onNavigate: (screen: string, data?: any) => void;
}

const mockSellerProducts = [
  {
    id: 1,
    name: 'Fresh Organic Vegetables',
    price: 'Rp 45,000',
    stock: 25,
    sold: 142,
    image: 'https://images.unsplash.com/photo-1631692994621-d26f83cf4db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldCUyMGZvb2R8ZW58MXx8fHwxNzYzOTg2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'active'
  },
  {
    id: 2,
    name: 'Artisan Sourdough Bread',
    price: 'Rp 35,000',
    stock: 8,
    sold: 89,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjQwNjEwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'active'
  }
];

export function SellerDashboard({ onNavigate }: SellerDashboardProps) {
  return (
    <div className="h-full flex flex-col bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-700 px-6 pt-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <button className="text-white">
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-white">UMKM Dashboard</h2>
          <button className="text-white relative">
            <Bell className="w-6 h-6" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-5 h-5 text-white" />
              <span className="text-white/80">Total Sales</span>
            </div>
            <p className="text-white">Rp 2.4M</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-white" />
              <span className="text-white/80">Products</span>
            </div>
            <p className="text-white">24</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white/80">Orders</span>
            </div>
            <p className="text-white">156</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white/80">Customers</span>
            </div>
            <p className="text-white">89</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2>Quick Actions</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('product-crud', { editProduct: null })}
            className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 hover:bg-emerald-100 transition-colors"
          >
            <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <p className="text-center text-gray-900">Add Product</p>
          </button>
          <button
            onClick={() => onNavigate('seller-profile')}
            className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 hover:bg-blue-100 transition-colors"
          >
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <Edit className="w-6 h-6 text-white" />
            </div>
            <p className="text-center text-gray-900">Edit Profile</p>
          </button>
        </div>
      </div>

      {/* Products List */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2>My Products</h2>
          <button className="text-orange-600">View All</button>
        </div>

        <div className="space-y-3">
          {mockSellerProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 mb-1 truncate">{product.name}</h3>
                      <p className="text-orange-600">{product.price}</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-xs ml-2">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span>Stock: {product.stock}</span>
                    <span>•</span>
                    <span>Sold: {product.sold}</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                <button className="flex-1 py-2 bg-gray-50 text-gray-700 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button
                  onClick={() => onNavigate('product-crud', { editProduct: product })}
                  className="flex-1 py-2 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="py-2 px-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 rounded-t-3xl shadow-lg mt-auto">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-orange-600">
            <div className="p-2 bg-orange-50 rounded-xl">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <span className="text-xs">Dashboard</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <div className="p-2 rounded-xl">
              <Package className="w-6 h-6" />
            </div>
            <span className="text-xs">Orders</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <div className="p-2 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs">Analytics</span>
          </button>
          <button 
            onClick={() => onNavigate('seller-profile')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <div className="p-2 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
