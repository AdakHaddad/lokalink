import { useState } from 'react';
import { User, Mail, Lock, Phone, ArrowLeft } from 'lucide-react';

interface RegisterScreenProps {
  onNavigate: (screen: string) => void;
}

export function RegisterScreen({ onNavigate }: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('role-selection');
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-8 rounded-b-[3rem] sticky top-0">
        <button 
          onClick={() => onNavigate('login')}
          className="text-white mb-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white mb-2">Buat Akun</h1>
        <p className="text-emerald-100">Bergabung dengan LOKALINK</p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2">Nama Lengkap</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Nama Anda"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="email@anda.com"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-2">Nomor Telepon</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+62 812 3456 7890"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2">Konfirmasi Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 text-emerald-600 rounded"
              required
            />
            <label htmlFor="terms" className="text-gray-600">
              Saya setuju dengan Syarat & Ketentuan dan Kebijakan Privasi
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-4 rounded-2xl hover:bg-emerald-700 transition-colors mt-6"
          >
            Buat Akun
          </button>
        </form>
      </div>

      {/* Login Link */}
      <div className="p-6 text-center border-t border-gray-100">
        <p className="text-gray-600">
          Sudah punya akun?{' '}
          <button 
            onClick={() => onNavigate('login')}
            className="text-emerald-600"
          >
            Masuk
          </button>
        </p>
      </div>
    </div>
  );
}