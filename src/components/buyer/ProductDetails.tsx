import { ArrowLeft, Heart, Share2, MapPin, Star, MessageCircle, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductDetailsProps {
  product: any;
  onNavigate: (screen: string, data?: any) => void;
}

export function ProductDetails({ product, onNavigate }: ProductDetailsProps) {
  if (!product) return null;

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Image Header */}
      <div className="relative h-80">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('buyer-home')}
            className="bg-white/90 p-2 rounded-full shadow-lg"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex gap-2">
            <button className="bg-white/90 p-2 rounded-full shadow-lg">
              <Share2 className="w-6 h-6 text-gray-700" />
            </button>
            <button className="bg-white/90 p-2 rounded-full shadow-lg">
              <Heart className="w-6 h-6 text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        {/* Product Info */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="mb-2">{product.name}</h1>
              <p className="text-emerald-600">{product.price}</p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-xl">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span>{product.rating}</span>
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white">
              {product.seller.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-1">{product.seller}</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{product.distance} away</span>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('chat')}
              className="bg-emerald-600 text-white p-3 rounded-xl"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            {product.category === 'Food' 
              ? 'Premium quality locally sourced products, freshly prepared daily. Our commitment to quality ensures you get the best taste and nutrition from our local farms.'
              : 'Handcrafted with care and attention to detail. Each piece is unique and made by skilled local artisans using traditional techniques passed down through generations.'
            }
          </p>
        </div>

        {/* Details */}
        <div className="mb-6">
          <h3 className="mb-3">Product Details</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Category</span>
              <span className="text-gray-900">{product.category}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Availability</span>
              <span className="text-emerald-600">In Stock</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Delivery</span>
              <span className="text-gray-900">Same Day</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah M.', rating: 5, comment: 'Excellent quality! Will buy again.' },
              { name: 'John D.', rating: 4, comment: 'Great product, fast delivery.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900">{review.name}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg">
        <div className="flex gap-3">
          <button className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
          <button 
            onClick={() => onNavigate('order', { product })}
            className="flex-1 bg-orange-600 text-white py-4 rounded-2xl hover:bg-orange-700 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
