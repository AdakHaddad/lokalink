import { useState } from 'react';
import { ArrowLeft, MapPin, Truck, Package, Plus, Minus, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OrderFlowProps {
  product: any;
  onNavigate: (screen: string) => void;
}

export function OrderFlow({ product, onNavigate }: OrderFlowProps) {
  const [quantity, setQuantity] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [address, setAddress] = useState('Jl. Sudirman No. 45, Jakarta Selatan');

  if (!product) return null;

  const subtotal = parseInt(product.price.replace(/\D/g, '')) * quantity;
  const deliveryFee = deliveryMethod === 'delivery' ? 10000 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="h-full flex flex-col bg-gray-50 md:max-w-4xl md:mx-auto md:shadow-lg md:rounded-3xl md:overflow-hidden">
      {/* Header */}
      <div className="bg-emerald-600 px-6 py-6 rounded-b-3xl md:px-8 md:py-8">
        <div className="flex items-center gap-4 mb-2">
          <button 
            onClick={() => onNavigate('product-details', { product })}
            className="text-white md:hidden"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white md:text-2xl">Checkout</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-48 md:px-8 md:py-8 md:pb-8">
        {/* Product Summary */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm md:p-6 md:mb-6">
          <h3 className="mb-3 md:text-xl md:mb-4">Order Summary</h3>
          <div className="flex gap-4 md:gap-6">
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 md:w-24 md:h-24">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2 md:text-lg">{product.name}</h3>
              <p className="text-emerald-600 mb-2 md:text-base">{product.price}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors md:w-10 md:h-10"
                >
                  <Minus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <span className="text-gray-900 md:text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-200 transition-colors md:w-10 md:h-10"
                >
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Method */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm md:p-6 md:mb-6">
          <h3 className="mb-4 md:text-xl md:mb-6">Delivery Method</h3>
          <div className="space-y-3 md:space-y-4">
            <button
              onClick={() => setDeliveryMethod('delivery')}
              className={`w-full p-4 rounded-xl border-2 transition-all md:p-6 ${
                deliveryMethod === 'delivery'
                  ? 'border-emerald-600 bg-emerald-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`p-2 rounded-lg md:p-3 ${
                  deliveryMethod === 'delivery' ? 'bg-emerald-600' : 'bg-gray-100'
                }`}>
                  <Truck className={`w-5 h-5 md:w-6 md:h-6 ${
                    deliveryMethod === 'delivery' ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-gray-900 md:text-lg">Home Delivery</h3>
                  <p className="text-gray-600 md:text-base">Delivered to your address</p>
                </div>
                <span className="text-gray-900 md:text-base">Rp 10,000</span>
              </div>
            </button>

            <button
              onClick={() => setDeliveryMethod('pickup')}
              className={`w-full p-4 rounded-xl border-2 transition-all md:p-6 ${
                deliveryMethod === 'pickup'
                  ? 'border-emerald-600 bg-emerald-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`p-2 rounded-lg md:p-3 ${
                  deliveryMethod === 'pickup' ? 'bg-emerald-600' : 'bg-gray-100'
                }`}>
                  <Package className={`w-5 h-5 md:w-6 md:h-6 ${
                    deliveryMethod === 'pickup' ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-gray-900 md:text-lg">Self Pickup</h3>
                  <p className="text-gray-600 md:text-base">Pick up at seller location</p>
                </div>
                <span className="text-emerald-600 md:text-base">Free</span>
              </div>
            </button>
          </div>
        </div>

        {/* Delivery Address */}
        {deliveryMethod === 'delivery' && (
          <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm md:p-6 md:mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="md:text-xl">Delivery Address</h3>
              <button className="text-emerald-600 md:text-base">Change</button>
            </div>
            <div className="flex gap-3 md:gap-4">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1 md:w-6 md:h-6" />
              <div>
                <p className="text-gray-900 mb-1 md:text-base">Home</p>
                <p className="text-gray-600 md:text-base">{address}</p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Summary */}
        <div className="bg-white rounded-2xl p-4 shadow-sm md:p-6">
          <h3 className="mb-4 md:text-xl md:mb-6">Payment Details</h3>
          <div className="space-y-3 md:space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600 md:text-base">Subtotal</span>
              <span className="text-gray-900 md:text-base">Rp {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 md:text-base">Delivery Fee</span>
              <span className="text-gray-900 md:text-base">
                {deliveryFee === 0 ? 'Free' : `Rp ${deliveryFee.toLocaleString()}`}
              </span>
            </div>
            <div className="pt-3 border-t border-gray-200 flex justify-between md:pt-4">
              <span className="text-gray-900 md:text-lg">Total</span>
              <span className="text-emerald-600 md:text-lg">Rp {total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl p-4 mt-4 shadow-sm md:p-6 md:mt-6">
          <h3 className="mb-3 md:text-xl md:mb-4">Order Notes (Optional)</h3>
          <textarea
            placeholder="Add any special instructions..."
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none md:px-6 md:py-4 md:text-base"
          />
        </div>
      </div>

      {/* Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg md:relative md:border-t-0 md:shadow-none md:p-8">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <div>
            <p className="text-gray-600 mb-1 md:text-base">Total Payment</p>
            <p className="text-emerald-600 md:text-xl">Rp {total.toLocaleString()}</p>
          </div>
          <button
            onClick={() => onNavigate('payment')}
            className="bg-emerald-600 text-white px-8 py-4 rounded-2xl hover:bg-emerald-700 transition-colors flex items-center gap-2 md:px-10 md:py-5 md:text-lg"
          >
            Continue to Payment
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
