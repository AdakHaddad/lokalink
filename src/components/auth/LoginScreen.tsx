import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  onNavigate: (screen: string) => void;
}

export function LoginScreen({ onNavigate }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('role-selection');
  };

  return (
    <div className="h-full flex flex-col md:max-w-md md:mx-auto md:shadow-lg md:rounded-3xl md:overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-12 rounded-b-[3rem] md:px-8 md:py-16">
        <div className="mt-8 md:mt-12">
          <h1 className="text-white mb-2 md:text-2xl md:mb-4">Selamat Datang!</h1>
          <p className="text-emerald-100 md:text-lg">Masuk untuk melanjutkan</p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8 md:px-8 md:py-12">
        <form onSubmit={handleLogin} className="space-y-5 md:space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 mb-2 md:text-base">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 md:w-6 md:h-6" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent md:pl-14 md:pr-6 md:py-5 md:text-lg"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 mb-2 md:text-base">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 md:w-6 md:h-6" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent md:pl-14 md:pr-14 md:py-5 md:text-lg"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5 md:w-6 md:h-6" /> : <Eye className="w-5 h-5 md:w-6 md:h-6" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-emerald-600 md:text-base">
              Lupa Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-4 rounded-2xl hover:bg-emerald-700 transition-colors mt-6 md:py-5 md:text-lg"
          >
            Masuk
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6 md:gap-6 md:my-8">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 md:text-base">atau</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full bg-white border border-gray-300 text-gray-700 py-4 rounded-2xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 md:py-5 md:text-lg"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Lanjutkan dengan Google
          </button>
        </form>
      </div>

      {/* Sign Up Link */}
      <div className="p-6 text-center border-t border-gray-100 md:p-8">
        <p className="text-gray-600 md:text-base">
          Belum punya akun?{' '}
          <button 
            onClick={() => onNavigate('register')}
            className="text-emerald-600"
          >
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
}