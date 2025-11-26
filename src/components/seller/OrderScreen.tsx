import React, { useState } from 'react';
import { ArrowLeft, Package, Clock, CheckCircle, XCircle, Eye, Truck } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface Order {
  id: string;
  customerName: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
}

interface OrderScreenProps {
  onNavigate: (screen: string) => void;
}

const OrderScreen: React.FC<OrderScreenProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('all');

  // Mock orders data
  const orders: Order[] = [
    {
      id: 'ORD001',
      customerName: 'John Doe',
      productName: 'Fresh Tomatoes',
      quantity: 5,
      totalPrice: 25.00,
      status: 'pending',
      orderDate: '2024-01-15',
    },
    {
      id: 'ORD002',
      customerName: 'Jane Smith',
      productName: 'Organic Carrots',
      quantity: 3,
      totalPrice: 15.00,
      status: 'confirmed',
      orderDate: '2024-01-14',
    },
    {
      id: 'ORD003',
      customerName: 'Mike Johnson',
      productName: 'Green Lettuce',
      quantity: 2,
      totalPrice: 8.00,
      status: 'shipped',
      orderDate: '2024-01-13',
      deliveryDate: '2024-01-16',
    },
    {
      id: 'ORD004',
      customerName: 'Sarah Wilson',
      productName: 'Red Onions',
      quantity: 4,
      totalPrice: 12.00,
      status: 'delivered',
      orderDate: '2024-01-12',
      deliveryDate: '2024-01-15',
    },
    {
      id: 'ORD005',
      customerName: 'Tom Brown',
      productName: 'Potatoes',
      quantity: 10,
      totalPrice: 20.00,
      status: 'cancelled',
      orderDate: '2024-01-11',
    },
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const filteredOrders = activeTab === 'all' ? orders : orders.filter(order => order.status === activeTab);

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    // In a real app, this would update the order status via API
    console.log(`Updating order ${orderId} to status ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4 md:max-w-full">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('seller-dashboard')}
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">Orders</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 md:max-w-4xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            {filteredOrders.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Package className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 text-center">No orders found</p>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <Badge className={getStatusColor(order.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(order.status)}
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </div>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Customer</p>
                          <p className="font-medium">{order.customerName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Product</p>
                          <p className="font-medium">{order.productName} (x{order.quantity})</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Order Date</p>
                          <p className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total</p>
                          <p className="font-medium text-green-600">${order.totalPrice.toFixed(2)}</p>
                        </div>
                      </div>

                      {order.deliveryDate && (
                        <div>
                          <p className="text-sm text-gray-600">Delivery Date</p>
                          <p className="font-medium">{new Date(order.deliveryDate).toLocaleDateString()}</p>
                        </div>
                      )}

                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        {order.status === 'pending' && (
                          <Button
                            size="sm"
                            onClick={() => handleStatusChange(order.id, 'confirmed')}
                            className="flex-1"
                          >
                            Confirm Order
                          </Button>
                        )}
                        {order.status === 'confirmed' && (
                          <Button
                            size="sm"
                            onClick={() => handleStatusChange(order.id, 'shipped')}
                            className="flex-1"
                          >
                            Mark as Shipped
                          </Button>
                        )}
                        {order.status === 'shipped' && (
                          <Button
                            size="sm"
                            onClick={() => handleStatusChange(order.id, 'delivered')}
                            className="flex-1"
                          >
                            Mark as Delivered
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderScreen;