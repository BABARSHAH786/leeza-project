import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer & UI/UX Designer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-0"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-pink-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-60 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-bounce delay-700"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 ">
                <img
                  src="https://github.com/LeezaSarwar.png"
                  alt="Leeza Sarwar"
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Leeza Sarwar
            </span>
          </h1>

          {/* Animated Typing Text */}
          <div className="text-xl md:text-3xl text-gray-300 mb-8 min-h-[40px] animate-in fade-in slide-in-from-right duration-1000 delay-500">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            Passionate about creating beautiful, functional, and user-friendly applications. 
            Specializing in modern web technologies and innovative solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Eye className="mr-2" size={20} />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;