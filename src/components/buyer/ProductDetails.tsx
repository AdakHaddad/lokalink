import { ArrowLeft, Heart, Share2, MapPin, Star, MessageCircle, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductDetailsProps {
  product: any;
  onNavigate: (screen: string, data?: any) => void;
}

export function ProductDetails({ product, onNavigate }: ProductDetailsProps) {
  if (!product) return null;

  return (
    <div className="h-full flex flex-col bg-white md:flex-row">
      {/* Image Header */}
      <div className="relative h-80 md:h-full md:w-1/2 md:flex-shrink-0">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between md:p-6">
          <button 
            onClick={() => onNavigate('buyer-home')}
            className="bg-white/90 p-2 rounded-full shadow-lg md:p-3"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 md:w-7 md:h-7" />
          </button>
          <div className="flex gap-2">
            <button className="bg-white/90 p-2 rounded-full shadow-lg md:p-3">
              <Share2 className="w-6 h-6 text-gray-700 md:w-7 md:h-7" />
            </button>
            <button className="bg-white/90 p-2 rounded-full shadow-lg md:p-3">
              <Heart className="w-6 h-6 text-red-500 md:w-7 md:h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32 md:px-8 md:py-8 md:pb-8 md:max-w-2xl">
        {/* Product Info */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="mb-2 md:text-2xl md:mb-4">{product.name}</h1>
              <p className="text-emerald-600 md:text-xl">{product.price}</p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-xl md:px-4 md:py-3">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 md:w-6 md:h-6" />
              <span className="md:text-lg">{product.rating}</span>
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6 md:p-6 md:mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white md:w-16 md:h-16 md:text-lg">
              {product.seller.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-1 md:text-lg">{product.seller}</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="md:text-base">{product.distance} away</span>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('chat')}
              className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition-colors md:p-4"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-3 md:text-xl md:mb-4">Description</h3>
          <p className="text-gray-600 leading-relaxed md:text-base md:leading-relaxed">
            {product.category === 'Food' 
              ? 'Premium quality locally sourced products, freshly prepared daily. Our commitment to quality ensures you get the best taste and nutrition from our local farms.'
              : 'Handcrafted with care and attention to detail. Each piece is unique and made by skilled local artisans using traditional techniques passed down through generations.'
            }
          </p>
        </div>

        {/* Details */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-3 md:text-xl md:mb-4">Product Details</h3>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100 md:py-3">
              <span className="text-gray-600 md:text-base">Category</span>
              <span className="text-gray-900 md:text-base">{product.category}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100 md:py-3">
              <span className="text-gray-600 md:text-base">Availability</span>
              <span className="text-emerald-600 md:text-base">In Stock</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100 md:py-3">
              <span className="text-gray-600 md:text-base">Delivery</span>
              <span className="text-gray-900 md:text-base">Same Day</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="mb-4 md:text-xl md:mb-6">Customer Reviews</h3>
          <div className="space-y-4 md:space-y-6">
            {[
              { name: 'Sarah M.', rating: 5, comment: 'Excellent quality! Will buy again.' },
              { name: 'John D.', rating: 4, comment: 'Great product, fast delivery.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900 md:text-base">{review.name}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 md:w-5 md:h-5" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 md:text-base">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-lg md:relative md:border-t-0 md:shadow-none md:p-0 md:mt-8 md:flex md:gap-4 md:w-1/2 md:self-end">
        <div className="flex gap-3 md:flex-col md:gap-4 md:w-full">
          <button className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors md:py-6 md:text-lg">
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            Add to Cart
          </button>
          <button 
            onClick={() => onNavigate('order', { product })}
            className="flex-1 bg-orange-600 text-white py-4 rounded-2xl hover:bg-orange-700 transition-colors md:py-6 md:text-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
