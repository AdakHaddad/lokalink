import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronLeft, Download } from 'lucide-react';

interface AnalyticsScreenProps {
  onNavigate: (screen: string) => void;
}

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

export function AnalyticsScreen({ onNavigate }: AnalyticsScreenProps) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white px-6 pt-6 pb-4 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('seller-dashboard')} className="p-2">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Sales Analytics</h2>
          <button className="p-2">
            <Download className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white rounded-3xl shadow-sm p-6 h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
