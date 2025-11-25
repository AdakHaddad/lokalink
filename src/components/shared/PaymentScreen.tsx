import { useState } from 'react';
import { ArrowLeft, Wallet, CreditCard, Building2, QrCode, CheckCircle2 } from 'lucide-react';

interface PaymentScreenProps {
  onNavigate: (screen: string) => void;
}

export function PaymentScreen({ onNavigate }: PaymentScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState('qris');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onNavigate('buyer-home');
    }, 2500);
  };

  const paymentMethods = [
    { id: 'qris', name: 'QRIS', icon: QrCode, color: 'bg-purple-600' },
    { id: 'wallet', name: 'E-Wallet', icon: Wallet, color: 'bg-blue-600' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, color: 'bg-green-600' },
    { id: 'bank', name: 'Bank Transfer', icon: Building2, color: 'bg-orange-600' }
  ];

  if (showSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 p-8">
        <div className="bg-white rounded-full p-6 mb-6 animate-bounce">
          <CheckCircle2 className="w-20 h-20 text-emerald-600" />
        </div>
        <h1 className="text-white text-center mb-3">Payment Successful!</h1>
        <p className="text-emerald-100 text-center mb-8">
          Your order has been placed successfully
        </p>
        <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-600 px-6 py-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('order')}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white">Payment</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        {/* Amount */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-6 mb-6 text-center">
          <p className="text-emerald-100 mb-2">Total Payment</p>
          <h1 className="text-white">Rp 55,000</h1>
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h3 className="mb-4">Select Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full p-4 rounded-2xl border-2 transition-all ${
                    paymentMethod === method.id
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${method.color} p-3 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-gray-900">{method.name}</h3>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      paymentMethod === method.id
                        ? 'border-emerald-600 bg-emerald-600'
                        : 'border-gray-300'
                    }`}>
                      {paymentMethod === method.id && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* QRIS Display */}
        {paymentMethod === 'qris' && (
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="text-center mb-4">
              <h3 className="mb-2">Scan QR Code to Pay</h3>
              <p className="text-gray-600">Use any e-wallet app to scan</p>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="bg-white border-4 border-gray-200 rounded-2xl p-6 mb-4">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="grid grid-cols-8 grid-rows-8 gap-1 w-48 h-48">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${
                        Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'
                      } rounded-sm`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <QrCode className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-purple-900 mb-1">How to Pay</h3>
                  <ol className="text-purple-700 space-y-1 list-decimal list-inside">
                    <li>Open your e-wallet app</li>
                    <li>Scan the QR code above</li>
                    <li>Confirm the payment</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* E-Wallet Options */}
        {paymentMethod === 'wallet' && (
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="mb-4">Choose E-Wallet</h3>
            <div className="grid grid-cols-3 gap-3">
              {['GoPay', 'OVO', 'DANA', 'ShopeePay', 'LinkAja', 'Others'].map((wallet) => (
                <button
                  key={wallet}
                  className="p-4 border-2 border-gray-200 rounded-2xl hover:border-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-2" />
                  <p className="text-center text-gray-700">{wallet}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Card Input */}
        {paymentMethod === 'card' && (
          <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bank Transfer */}
        {paymentMethod === 'bank' && (
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="mb-4">Select Bank</h3>
            <div className="space-y-3">
              {['BCA', 'Mandiri', 'BNI', 'BRI'].map((bank) => (
                <button
                  key={bank}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-600 hover:bg-emerald-50 transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl" />
                  <span className="text-gray-900">Bank {bank}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
        <button
          onClick={handlePayment}
          className="w-full bg-emerald-600 text-white py-4 rounded-2xl hover:bg-emerald-700 transition-colors"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
