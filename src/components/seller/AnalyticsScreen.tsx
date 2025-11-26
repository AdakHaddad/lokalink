import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, DollarSign, Package, Users, Calendar, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface AnalyticsScreenProps {
  onNavigate: (screen: string) => void;
}

const AnalyticsScreen: React.FC<AnalyticsScreenProps> = ({ onNavigate }) => {
  const [timeRange, setTimeRange] = useState('7d');

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalRevenue: 2847.50,
      totalOrders: 156,
      totalCustomers: 89,
      averageOrderValue: 18.25,
    },
    revenue: {
      daily: [120, 145, 98, 167, 203, 189, 156],
      weekly: [847, 923, 756, 1123, 945, 1089, 987],
      monthly: [3200, 3450, 2890, 4123, 3789, 4234, 3890],
    },
    orders: {
      daily: [8, 12, 6, 15, 18, 14, 11],
      weekly: [56, 67, 45, 78, 62, 89, 73],
      monthly: [234, 267, 198, 312, 289, 334, 298],
    },
    topProducts: [
      { name: 'Fresh Tomatoes', sales: 45, revenue: 225 },
      { name: 'Organic Carrots', sales: 38, revenue: 190 },
      { name: 'Green Lettuce', sales: 32, revenue: 128 },
      { name: 'Red Onions', sales: 28, revenue: 84 },
      { name: 'Potatoes', sales: 25, revenue: 125 },
    ],
    customerGrowth: {
      newCustomers: [12, 15, 8, 22, 18, 25, 20],
      returningCustomers: [45, 52, 38, 67, 59, 71, 63],
    },
  };

  const getTimeRangeData = () => {
    switch (timeRange) {
      case '7d':
        return {
          revenue: analyticsData.revenue.daily,
          orders: analyticsData.orders.daily,
          customers: analyticsData.customerGrowth.newCustomers,
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        };
      case '30d':
        return {
          revenue: analyticsData.revenue.weekly,
          orders: analyticsData.orders.weekly,
          customers: analyticsData.customerGrowth.returningCustomers,
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        };
      case '90d':
        return {
          revenue: analyticsData.revenue.monthly,
          orders: analyticsData.orders.monthly,
          customers: analyticsData.customerGrowth.newCustomers,
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        };
      default:
        return {
          revenue: analyticsData.revenue.daily,
          orders: analyticsData.orders.daily,
          customers: analyticsData.customerGrowth.newCustomers,
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        };
    }
  };

  const timeData = getTimeRangeData();

  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4 md:max-w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('seller-dashboard')}
                className="p-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-semibold text-gray-900">Analytics</h1>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 Days</SelectItem>
                <SelectItem value="30d">30 Days</SelectItem>
                <SelectItem value="90d">90 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 md:max-w-6xl">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(analyticsData.overview.totalRevenue)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-xl font-bold text-gray-900">
                    {analyticsData.overview.totalOrders}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Customers</p>
                  <p className="text-xl font-bold text-gray-900">
                    {analyticsData.overview.totalCustomers}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Order Value</p>
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(analyticsData.overview.averageOrderValue)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Top Products</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Revenue Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {timeData.revenue.map((value, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div
                        className="w-full bg-green-500 rounded-t"
                        style={{ height: `${(value / Math.max(...timeData.revenue)) * 200}px` }}
                      />
                      <span className="text-xs text-gray-600">{timeData.labels[index]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order Volume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {timeData.orders.map((value, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div
                        className="w-full bg-blue-500 rounded-t"
                        style={{ height: `${(value / Math.max(...timeData.orders)) * 200}px` }}
                      />
                      <span className="text-xs text-gray-600">{timeData.labels[index]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Top Performing Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm font-bold text-orange-600">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-600">{product.sales} sales</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{formatCurrency(product.revenue)}</p>
                        <p className="text-sm text-gray-600">revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsScreen;