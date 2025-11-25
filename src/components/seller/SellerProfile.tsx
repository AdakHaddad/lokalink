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
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      {/* Header with Cover Image */}
      <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-700">
        <button 
          onClick={() => onNavigate('seller-dashboard')}
          className="absolute top-6 left-6 bg-white/90 p-2 rounded-full shadow-lg z-10"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="absolute top-6 right-6 bg-white/90 p-2 rounded-full shadow-lg z-10"
        >
          <Edit2 className="w-6 h-6 text-gray-700" />
        </button>

        {/* Profile Image */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center text-emerald-600">
              <span className="text-4xl">🌿</span>
            </div>
            {isEditing && (
              <button className="absolute bottom-2 right-2 bg-orange-600 text-white p-2 rounded-full shadow-lg">
                <Camera className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex-1 px-6 pt-20 pb-6">
        {/* Business Name & Rating */}
        <div className="text-center mb-6">
          {isEditing ? (
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              className="w-full text-center mb-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          ) : (
            <h1 className="mb-2">{formData.businessName}</h1>
          )}
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            <span className="text-yellow-500">⭐</span>
            <span>4.8 Rating</span>
            <span>•</span>
            <span>142 Reviews</span>
          </div>
          <div className="inline-flex bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
            Verified UMKM
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h3 className="mb-3">About Business</h3>
          {isEditing ? (
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">{formData.description}</p>
          )}
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <h3 className="mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">Phone</p>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                ) : (
                  <p className="text-gray-900">{formData.phone}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                ) : (
                  <p className="text-gray-900">{formData.email}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">Address</p>
                {isEditing ? (
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    rows={2}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                ) : (
                  <p className="text-gray-900">{formData.address}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">Operating Hours</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.operatingHours}
                    onChange={(e) => setFormData({...formData, operatingHours: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                ) : (
                  <p className="text-gray-900">{formData.operatingHours}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Globe className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">Website</p>
                {isEditing ? (
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                ) : (
                  <p className="text-gray-900">{formData.website}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Business Stats */}
        <div className="mb-6">
          <h3 className="mb-4">Business Performance</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-50 rounded-2xl p-4 text-center">
              <p className="text-emerald-600 mb-1">24</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <p className="text-orange-600 mb-1">156</p>
              <p className="text-gray-600">Orders</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <p className="text-blue-600 mb-1">89</p>
              <p className="text-gray-600">Customers</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <button
            onClick={handleSave}
            className="w-full bg-orange-600 text-white py-4 rounded-2xl hover:bg-orange-700 transition-colors mb-6"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}
