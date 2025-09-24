import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span>+92 333 504 8593</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>leezasarwar0@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block hover:text-pink-400 transition-colors duration-300">Home</a>
              <a href="/products" className="block hover:text-pink-400 transition-colors duration-300">Products</a>
              <a href="/about" className="block hover:text-pink-400 transition-colors duration-300">About Us</a>
              <a href="/contact" className="block hover:text-pink-400 transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/leeza-sarwar-21ab61339"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/LeezaSarwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/LeezaSarwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Leeza Cakes. All rights reserved. Made with ❤️ for delicious moments.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;