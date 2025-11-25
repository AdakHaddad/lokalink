import { ArrowLeft, TrendingUp, Users, ShoppingBag, DollarSign, Calendar } from 'lucide-react';

interface SellerAnalyticsProps {
  onNavigate: (screen: string) => void;
}

const mockAnalytics = {
  totalRevenue: 'Rp 2.4M',
  totalOrders: 156,
  totalCustomers: 89,
  averageOrderValue: 'Rp 15,384',
  monthlyGrowth: '+12.5%',
  topProducts: [
    { name: 'Fresh Organic Vegetables', sales: 45, revenue: 'Rp 2,025,000' },
    { name: 'Artisan Sourdough Bread', sales: 32, revenue: 'Rp 1,120,000' },
    { name: 'Local Honey', sales: 28, revenue: 'Rp 980,000' }
  ],
  recentActivity: [
    { type: 'order', description: 'New order from John Doe', time: '2 hours ago' },
    { type: 'customer', description: 'New customer registered', time: '5 hours ago' },
    { type: 'product', description: 'Product "Fresh Vegetables" viewed 25 times', time: '1 day ago' }
  ]
};

export function SellerAnalytics({ onNavigate }: SellerAnalyticsProps) {
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
          <h2 className="text-white md:text-xl">Analytics</h2>
          <div className="w-6 md:w-8" /> {/* Spacer */}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-white md:w-6 md:h-6" />
              <span className="text-white/80 text-sm md:text-base">Revenue</span>
            </div>
            <p className="text-white text-lg md:text-xl font-semibold">{mockAnalytics.totalRevenue}</p>
            <p className="text-green-300 text-xs md:text-sm">{mockAnalytics.monthlyGrowth} this month</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-5 h-5 text-white md:w-6 md:h-6" />
              <span className="text-white/80 text-sm md:text-base">Orders</span>
            </div>
            <p className="text-white text-lg md:text-xl font-semibold">{mockAnalytics.totalOrders}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-white md:w-6 md:h-6" />
              <span className="text-white/80 text-sm md:text-base">Customers</span>
            </div>
            <p className="text-white text-lg md:text-xl font-semibold">{mockAnalytics.totalCustomers}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-white md:w-6 md:h-6" />
              <span className="text-white/80 text-sm md:text-base">Avg Order</span>
            </div>
            <p className="text-white text-lg md:text-xl font-semibold">{mockAnalytics.averageOrderValue}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 md:px-8 md:py-8 space-y-6 md:space-y-8">
        {/* Top Products */}
        <div className="bg-white rounded-2xl p-4 shadow-sm md:p-6 md:rounded-3xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:text-xl">Top Products</h3>
          <div className="space-y-3 md:space-y-4">
            {mockAnalytics.topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-semibold text-sm md:w-10 md:h-10 md:text-base">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium md:text-base">{product.name}</p>
                    <p className="text-gray-600 text-sm">{product.sales} sales</p>
                  </div>
                </div>
                <p className="text-orange-600 font-semibold md:text-base">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-4 shadow-sm md:p-6 md:rounded-3xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:text-xl">Recent Activity</h3>
          <div className="space-y-3 md:space-y-4">
            {mockAnalytics.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 md:w-10 md:h-10">
                  {activity.type === 'order' && <ShoppingBag className="w-4 h-4 text-gray-600 md:w-5 md:h-5" />}
                  {activity.type === 'customer' && <Users className="w-4 h-4 text-gray-600 md:w-5 md:h-5" />}
                  {activity.type === 'product' && <TrendingUp className="w-4 h-4 text-gray-600 md:w-5 md:h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 text-sm md:text-base">{activity.description}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for Charts */}
        <div className="bg-white rounded-2xl p-4 shadow-sm md:p-6 md:rounded-3xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:text-xl">Sales Trend</h3>
          <div className="h-32 bg-gray-50 rounded-xl flex items-center justify-center md:h-40">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2 md:w-10 md:h-10" />
              <p className="text-gray-500 text-sm md:text-base">Chart visualization coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}