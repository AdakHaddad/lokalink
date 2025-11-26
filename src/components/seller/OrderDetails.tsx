import { ChevronLeft, MoreVertical } from 'lucide-react';

interface OrderDetailsProps {
  onNavigate: (screen: string) => void;
}

export function OrderDetails({ onNavigate }: OrderDetailsProps) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white px-6 pt-6 pb-4 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('seller-dashboard')} className="p-2">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Order #12345</h2>
          <button className="p-2">
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Fresh Organic Vegetables</span>
              <span className="text-gray-900 font-semibold">Rp 45,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Artisan Sourdough Bread</span>
              <span className="text-gray-900 font-semibold">Rp 35,000</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Details</h3>
          <div className="space-y-2">
            <p className="text-gray-600">John Doe</p>
            <p className="text-gray-600">johndoe@example.com</p>
            <p className="text-gray-600">123 Main St, Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
