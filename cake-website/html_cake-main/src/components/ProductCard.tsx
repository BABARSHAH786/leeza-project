import React, { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product, CartItem } from '../types';
import { useCart } from '../context/CartContext';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [customMessage, setCustomMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const finalPrice = Math.round(product.basePrice * selectedSize.multiplier);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: uuidv4(),
      productId: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize.name,
      flavor: selectedFlavor,
      customMessage: customMessage || undefined,
      quantity,
      price: finalPrice,
    };

    addToCart(cartItem);
    toast.success(`Added ${product.name} to cart!`, {
      icon: '🎂',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });

    // Reset form
    setQuantity(1);
    setCustomMessage('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Heart Icon */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isLiked 
              ? 'bg-pink-500 text-white' 
              : 'bg-white/90 text-gray-600 hover:bg-pink-500 hover:text-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Rating */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
          <div className="grid grid-cols-3 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => setSelectedSize(size)}
                className={`p-2 text-xs rounded-lg border-2 transition-all duration-300 font-medium ${
                  selectedSize.name === size.name
                    ? 'border-pink-500 bg-pink-50 text-pink-600'
                    : 'border-gray-200 text-gray-600 hover:border-pink-300'
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>

        {/* Flavor Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Flavor</label>
          <select
            value={selectedFlavor}
            onChange={(e) => setSelectedFlavor(e.target.value)}
            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
          >
            {product.flavors.map((flavor) => (
              <option key={flavor} value={flavor}>
                {flavor}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Custom Message (Optional)</label>
          <input
            type="text"
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="Happy Birthday, etc."
            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
          />
        </div>

        {/* Quantity and Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <div className="flex items-center border-2 border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                -
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              ₨{finalPrice.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">per cake</div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
        >
          <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;