import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-resin-art.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="font-accent text-xl text-accent">Handcrafted with Love</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Art Made With Love,{" "}
            <span className="">
              Memories Preserved Forever
            </span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your special moments into timeless art. Custom resin plaques, preserved flower jewellery, 
            and unique handmade pieces crafted exclusively for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6 hover-lift"
            >
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6"
            >
              <Link to="/custom-order">
                Custom Order
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-primary mb-1">500+</div>
              <div className="font-body text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-primary mb-1">100%</div>
              <div className="font-body text-sm text-muted-foreground">Handmade</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-primary mb-1">★ 4.9</div>
              <div className="font-body text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
