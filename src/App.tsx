import { useState } from 'react';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { LoginScreen } from './components/auth/LoginScreen';
import { RegisterScreen } from './components/auth/RegisterScreen';
import { RoleSelection } from './components/auth/RoleSelection';
import { BuyerHome } from './components/buyer/BuyerHome';
import { ProductDetails } from './components/buyer/ProductDetails';
import { SellerDashboard } from './components/seller/SellerDashboard';
import { ProductCRUD } from './components/seller/ProductCRUD';
import { SellerProfile } from './components/seller/SellerProfile';
import { SellerOrders } from './components/seller/SellerOrders';
import { SellerAnalytics } from './components/seller/SellerAnalytics';
import { ChatScreen } from './components/shared/ChatScreen';
import { OrderFlow } from './components/shared/OrderFlow';
import { PaymentScreen } from './components/shared/PaymentScreen';

type Screen = 
  | 'welcome' 
  | 'login' 
  | 'register' 
  | 'role-selection'
  | 'buyer-home'
  | 'product-details'
  | 'seller-dashboard'
  | 'product-crud'
  | 'seller-profile'
  | 'seller-orders'
  | 'seller-analytics'
  | 'chat'
  | 'order'
  | 'payment';

type UserRole = 'buyer' | 'seller' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const navigateTo = (screen: Screen, data?: any) => {
    if (data?.product) setSelectedProduct(data.product);
    if (data?.editProduct) setEditingProduct(data.editProduct);
    setCurrentScreen(screen);
  };

  const simpleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    if (role === 'buyer') {
      setCurrentScreen('buyer-home');
    } else {
      setCurrentScreen('seller-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-0">
      <div className="w-full max-w-sm min-h-[calc(100vh-2rem)] bg-white rounded-3xl shadow-2xl overflow-hidden md:max-w-none md:w-full md:h-full md:rounded-none md:shadow-none md:min-h-screen">
        {currentScreen === 'welcome' && <WelcomeScreen onNavigate={simpleNavigate} />}
        {currentScreen === 'login' && <LoginScreen onNavigate={simpleNavigate} />}
        {currentScreen === 'register' && <RegisterScreen onNavigate={simpleNavigate} />}
        {currentScreen === 'role-selection' && <RoleSelection onSelectRole={handleRoleSelect} />}
        {currentScreen === 'buyer-home' && <BuyerHome onNavigate={navigateTo} />}
        {currentScreen === 'product-details' && <ProductDetails product={selectedProduct} onNavigate={navigateTo} />}
        {currentScreen === 'seller-dashboard' && <SellerDashboard onNavigate={navigateTo} />}
        {currentScreen === 'product-crud' && <ProductCRUD product={editingProduct} onNavigate={simpleNavigate} />}
        {currentScreen === 'seller-profile' && <SellerProfile onNavigate={simpleNavigate} />}
        {currentScreen === 'seller-orders' && <SellerOrders onNavigate={simpleNavigate} />}
        {currentScreen === 'seller-analytics' && <SellerAnalytics onNavigate={simpleNavigate} />}
        {currentScreen === 'chat' && <ChatScreen onNavigate={simpleNavigate} />}
        {currentScreen === 'order' && <OrderFlow product={selectedProduct} onNavigate={simpleNavigate} />}
        {currentScreen === 'payment' && <PaymentScreen onNavigate={simpleNavigate} />}
      </div>
    </div>
  );
}
