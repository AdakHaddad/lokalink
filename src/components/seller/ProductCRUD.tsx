import { useState } from 'react';
import { ArrowLeft, Upload, X, Plus } from 'lucide-react';

interface ProductCRUDProps {
  product: any;
  onNavigate: (screen: string) => void;
}

export function ProductCRUD({ product, onNavigate }: ProductCRUDProps) {
  const isEdit = Boolean(product);
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: '',
    price: product?.price?.replace('Rp ', '').replace(',', '') || '',
    stock: product?.stock?.toString() || '',
    category: product?.category || 'Food',
    images: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle product create/update
    onNavigate('seller-dashboard');
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      {/* Header */}
      <div className="bg-orange-600 px-6 py-6 rounded-b-3xl sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-2">
          <button 
            onClick={() => onNavigate('seller-dashboard')}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white">{isEdit ? 'Edit Product' : 'Add New Product'}</h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 px-6 py-6 pb-32">
        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-3">Product Images</label>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="aspect-square border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-orange-500 hover:bg-orange-50 transition-colors"
            >
              <Upload className="w-6 h-6 text-gray-400" />
              <span className="text-gray-500">Upload</span>
            </button>
            {product?.image && (
              <div className="aspect-square relative rounded-2xl overflow-hidden border-2 border-gray-200">
                <img src={product.image} alt="" className="w-full h-full object-cover" />
                <button
                  type="button"
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="e.g., Fresh Organic Vegetables"
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="Food">Food</option>
            <option value="Crafts">Crafts</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home & Decor</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Price (Rp)</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              placeholder="45000"
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Stock</label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({...formData, stock: e.target.value})}
              placeholder="25"
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Describe your product in detail..."
            rows={5}
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            required
          />
        </div>

        {/* Product Specifications */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-3">Specifications (Optional)</label>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Key (e.g., Weight)"
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Value (e.g., 500g)"
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                className="p-3 bg-red-50 text-red-600 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <button
              type="button"
              className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-orange-500 hover:text-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Specification
            </button>
          </div>
        </div>

        {/* Availability Toggle */}
        <div className="mb-6">
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div>
              <h3 className="text-gray-900 mb-1">Product Availability</h3>
              <p className="text-gray-600">Make this product visible to buyers</p>
            </div>
            <div className="relative inline-block w-14 h-8">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-600"></div>
            </div>
          </label>
        </div>
      </form>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onNavigate('seller-dashboard')}
            className="flex-1 py-4 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex-1 py-4 bg-orange-600 text-white rounded-2xl hover:bg-orange-700 transition-colors"
          >
            {isEdit ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </div>
    </div>
  );
}
