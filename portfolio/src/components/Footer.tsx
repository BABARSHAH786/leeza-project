import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/LeezaSarwar",
      name: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/leeza-sarwar-21ab61339/",
      name: "LinkedIn"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/LeezaSarwar",
      name: "Twitter"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:leezasarwar0@gmail.com",
      name: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 animate-pulse">
              Leeza Sarwar
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Creating digital experiences that matter
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">Back to Top</span>
              <div className="w-4 h-4 border-2 border-current border-b-transparent rounded-full animate-spin"></div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center mb-4 md:mb-0">
              <span>© {currentYear} Leeza Sarwar. Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            <div className="flex space-x-6">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
      </div>
    </footer>
  );
};

export default Footer;