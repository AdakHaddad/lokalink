import { useState } from 'react';
import { ArrowLeft, Camera, MapPin, Phone, Mail, Globe, Clock, Edit2 } from 'lucide-react';

interface SellerProfileProps {
  onNavigate: (screen: string) => void;
}

export function SellerProfile({ onNavigate }: SellerProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    businessName: 'Green Valley Farm',
    ownerName: 'John Smith',
    email: 'contact@greenvalley.com',
    phone: '+62 812 3456 7890',
    address: 'Jl. Raya Bogor No. 123, Jakarta Timur',
    description: 'We are a family-owned farm committed to providing fresh, organic vegetables to our local community.',
    website: 'www.greenvalley.com',
    operatingHours: '08:00 - 18:00'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto md:max-w-4xl md:mx-auto md:shadow-lg md:rounded-3xl md:overflow-hidden">
      {/* Header with Cover Image */}
      <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-700 md:h-64">
        <button 
          onClick={() => onNavigate('seller-dashboard')}
          className="absolute top-6 left-6 bg-white/90 p-2 rounded-full shadow-lg z-10 md:top-8 md:left-8 md:p-3"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700 md:w-7 md:h-7" />
        </button>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="absolute top-6 right-6 bg-white/90 p-2 rounded-full shadow-lg z-10 md:top-8 md:right-8 md:p-3"
        >
          <Edit2 className="w-6 h-6 text-gray-700 md:w-7 md:h-7" />
        </button>

        {/* Profile Image */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:-bottom-20">
          <div className="relative">
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center text-emerald-600 md:w-40 md:h-40 md:border-6">
              <span className="text-4xl md:text-5xl">🌿</span>
            </div>
            {isEditing && (
              <button className="absolute bottom-2 right-2 bg-orange-600 text-white p-2 rounded-full shadow-lg md:bottom-4 md:right-4 md:p-3">
                <Camera className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex-1 px-6 pt-20 pb-6 md:px-12 md:pt-24 md:pb-12">
        {/* Business Name & Rating */}
        <div className="text-center mb-6 md:mb-8">
          {isEditing ? (
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              className="w-full text-center mb-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 md:px-6 md:py-3 md:text-lg"
            />
          ) : (
            <h1 className="mb-2 md:text-2xl md:mb-4">{formData.businessName}</h1>
          )}
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2 md:gap-3 md:mb-4 md:text-base">
            <span className="text-yellow-500">⭐</span>
            <span>4.8 Rating</span>
            <span>•</span>
            <span>142 Reviews</span>
          </div>
          <div className="inline-flex bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full md:px-6 md:py-3 md:text-base">
            Verified UMKM
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-3 md:text-xl md:mb-4">About Business</h3>
          {isEditing ? (
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none md:px-6 md:py-4 md:text-lg"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed md:text-base">{formData.description}</p>
          )}
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-4 md:text-xl md:mb-6">Contact Information</h3>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="bg-gray-100 p-3 rounded-xl md:p-4">
                <Phone className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1 md:text-base">Phone</p>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 md:px-4 md:py-3 md:text-lg"
                  />
                ) : (
                  <p className="text-gray-900 md:text-base">{formData.phone}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="bg-gray-100 p-3 rounded-xl md:p-4">
                <Mail className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1 md:text-base">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 md:px-4 md:py-3 md:text-lg"
                  />
                ) : (
                  <p className="text-gray-900 md:text-base">{formData.email}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="bg-gray-100 p-3 rounded-xl md:p-4">
                <MapPin className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1 md:text-base">Address</p>
                {isEditing ? (
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    rows={2}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none md:px-4 md:py-3 md:text-lg"
                  />
                ) : (
                  <p className="text-gray-900 md:text-base">{formData.address}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="bg-gray-100 p-3 rounded-xl md:p-4">
                <Clock className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1 md:text-base">Operating Hours</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.operatingHours}
                    onChange={(e) => setFormData({...formData, operatingHours: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 md:px-4 md:py-3 md:text-lg"
                  />
                ) : (
                  <p className="text-gray-900 md:text-base">{formData.operatingHours}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="bg-gray-100 p-3 rounded-xl md:p-4">
                <Globe className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1 md:text-base">Website</p>
                {isEditing ? (
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 md:px-4 md:py-3 md:text-lg"
                  />
                ) : (
                  <p className="text-gray-900 md:text-base">{formData.website}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Business Stats */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-4 md:text-xl md:mb-6">Business Performance</h3>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <div className="bg-emerald-50 rounded-2xl p-4 text-center md:p-6">
              <p className="text-emerald-600 mb-1 md:text-xl md:mb-2">24</p>
              <p className="text-gray-600 md:text-base">Products</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4 text-center md:p-6">
              <p className="text-orange-600 mb-1 md:text-xl md:mb-2">156</p>
              <p className="text-gray-600 md:text-base">Orders</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 text-center md:p-6">
              <p className="text-blue-600 mb-1 md:text-xl md:mb-2">89</p>
              <p className="text-gray-600 md:text-base">Customers</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <button
            onClick={handleSave}
            className="w-full bg-orange-600 text-white py-4 rounded-2xl hover:bg-orange-700 transition-colors mb-6 md:py-5 md:text-lg"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}
