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

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    if (role === 'buyer') {
      setCurrentScreen('buyer-home');
    } else {
      setCurrentScreen('seller-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] min-h-[calc(100vh-2rem)] bg-white rounded-3xl shadow-2xl overflow-hidden md:max-w-none md:rounded-none md:shadow-none md:min-h-screen">
        {currentScreen === 'welcome' && <WelcomeScreen onNavigate={navigateTo} />}
        {currentScreen === 'login' && <LoginScreen onNavigate={navigateTo} />}
        {currentScreen === 'register' && <RegisterScreen onNavigate={navigateTo} />}
        {currentScreen === 'role-selection' && <RoleSelection onSelectRole={handleRoleSelect} />}
        {currentScreen === 'buyer-home' && <BuyerHome onNavigate={navigateTo} />}
        {currentScreen === 'product-details' && <ProductDetails product={selectedProduct} onNavigate={navigateTo} />}
        {currentScreen === 'seller-dashboard' && <SellerDashboard onNavigate={navigateTo} />}
        {currentScreen === 'product-crud' && <ProductCRUD product={editingProduct} onNavigate={navigateTo} />}
        {currentScreen === 'seller-profile' && <SellerProfile onNavigate={navigateTo} />}
        {currentScreen === 'chat' && <ChatScreen onNavigate={navigateTo} />}
        {currentScreen === 'order' && <OrderFlow product={selectedProduct} onNavigate={navigateTo} />}
        {currentScreen === 'payment' && <PaymentScreen onNavigate={navigateTo} />}
      </div>
    </div>
  );
}
