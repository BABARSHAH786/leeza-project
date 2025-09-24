import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
            alt="Beautiful cakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Leeza Cakes
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            Crafting sweet memories with every bite. Freshly baked, lovingly decorated, perfectly delicious.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Link
              to="/products"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float-slow"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Leeza Cakes?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about creating exceptional cakes that bring joy to your special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest ingredients for the most delicious results</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Orders</h3>
              <p className="text-gray-600">Personalized cakes tailored to your special occasions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in taste and presentation</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Baked fresh every day for optimal taste and quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Cakes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              After placing your order, please confirm it by contacting us on WhatsApp at 03350458593...
            </p>
           
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and delicious cake creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Order Your Perfect Cake?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us make your celebration extra special with our delicious custom cakes
          </p>
          <Link
            to="/products"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 group"
          >
            <span>Start Your Order</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;