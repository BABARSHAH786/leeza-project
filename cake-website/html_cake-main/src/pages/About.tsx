import React from 'react';
import { Award, Users, Heart, Clock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion for Baking',
      description: 'Every cake is made with love and attention to detail, ensuring each bite is a moment of pure joy.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Ingredients',
      description: 'We source only the finest ingredients to create cakes that taste as good as they look.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We work closely with you to create your perfect cake.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fresh Daily',
      description: 'All our cakes are baked fresh daily to ensure maximum flavor and quality.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Leeza Cakes</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Crafting sweet memories since day one, with a passion for creating exceptional cakes 
            that bring joy to every celebration.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-50" 
             style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'}}></div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Leeza Cakes, where every creation tells a story of passion, 
                  dedication, and the pursuit of perfection. Founded by Leeza Sarwar, 
                  our bakery began as a dream to share the joy of exceptional cakes with our community.
                </p>
                <p>
                  What started in a small kitchen has grown into a beloved bakery known for 
                  creating memorable moments through our delicious, beautifully crafted cakes. 
                  Each recipe has been perfected over time, combining traditional techniques 
                  with modern flavors.
                </p>
                <p>
                  Today, we continue to honor our commitment to quality, using only the finest 
                  ingredients and putting love into every creation. Whether it's a birthday, 
                  wedding, or just because, we're here to make your celebrations extra special.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1721164/pexels-photo-1721164.jpeg"
                alt="Baker at work"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-float-delay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from selecting ingredients to serving our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:bg-pink-50 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto opacity-90">
              To create exceptional cakes that bring people together, celebrate life's special moments, 
              and spread joy one delicious bite at a time. We believe that every celebration deserves 
              a cake as unique and special as the moment itself.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">50+</div>
              <div className="text-gray-600">Cake Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">5</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">100%</div>
              <div className="text-gray-600">Fresh Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Order?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create something special for your next celebration. Get in touch to discuss your custom cake needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Browse Our Cakes
            </a>
            <a
              href="/contact"
              className="bg-white border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;