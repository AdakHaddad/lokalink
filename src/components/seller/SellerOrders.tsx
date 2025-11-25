import { ArrowLeft, Package, Eye, CheckCircle, Clock, XCircle } from 'lucide-react';

interface SellerOrdersProps {
  onNavigate: (screen: string) => void;
}

const mockOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    productName: 'Fresh Organic Vegetables',
    quantity: 2,
    totalPrice: 'Rp 90,000',
    status: 'completed',
    orderDate: '2024-01-15',
    deliveryAddress: 'Jl. Sudirman No. 123, Jakarta'
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    productName: 'Artisan Sourdough Bread',
    quantity: 1,
    totalPrice: 'Rp 35,000',
    status: 'pending',
    orderDate: '2024-01-14',
    deliveryAddress: 'Jl. Thamrin No. 456, Jakarta'
  },
  {
    id: 3,
    customerName: 'Bob Johnson',
    productName: 'Fresh Organic Vegetables',
    quantity: 3,
    totalPrice: 'Rp 135,000',
    status: 'cancelled',
    orderDate: '2024-01-13',
    deliveryAddress: 'Jl. Gatot Subroto No. 789, Jakarta'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    case 'pending':
      return <Clock className="w-5 h-5 text-yellow-600" />;
    case 'cancelled':
      return <XCircle className="w-5 h-5 text-red-600" />;
    default:
      return <Package className="w-5 h-5 text-gray-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-700';
    case 'pending':
      return 'bg-yellow-100 text-yellow-700';
    case 'cancelled':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export function SellerOrders({ onNavigate }: SellerOrdersProps) {
  return (
    <div className="h-full flex flex-col bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-700 px-6 pt-6 pb-8 rounded-b-3xl md:px-8 md:pt-8 md:pb-10">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('seller-dashboard')}
            className="text-white md:hidden"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-white md:text-xl">My Orders</h2>
          <div className="w-6 md:w-8" /> {/* Spacer */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:grid-cols-3 md:gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center md:p-6">
            <p className="text-white/80 text-sm md:text-base">Total Orders</p>
            <p className="text-white text-lg md:text-xl font-semibold">156</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center md:p-6">
            <p className="text-white/80 text-sm md:text-base">Pending</p>
            <p className="text-white text-lg md:text-xl font-semibold">12</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center md:p-6">
            <p className="text-white/80 text-sm md:text-base">Completed</p>
            <p className="text-white text-lg md:text-xl font-semibold">144</p>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-6 py-6 md:px-8 md:py-8">
        <div className="space-y-4 md:space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm md:p-6 md:rounded-3xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getStatusIcon(order.status)}
                  <div>
                    <h3 className="text-gray-900 font-medium md:text-lg">Order #{order.id}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{order.customerName}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)} md:px-4 md:py-1.5 md:text-sm`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Product:</span>
                  <span className="text-gray-900">{order.productName}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="text-gray-900">{order.quantity}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-orange-600 font-medium">{order.totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-900">{order.orderDate}</span>
                </div>
              </div>

              <div className="flex gap-2 md:gap-3">
                <button className="flex-1 py-2 bg-gray-50 text-gray-700 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors md:py-3 md:text-sm">
                  <Eye className="w-4 h-4 md:w-5 md:h-5" />
                  View Details
                </button>
                {order.status === 'pending' && (
                  <button className="flex-1 py-2 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors md:py-3 md:text-sm">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}