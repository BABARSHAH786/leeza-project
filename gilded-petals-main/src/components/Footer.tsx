import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-soft border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3  className="bg-gradient-primary text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition text-3xl">
              Resin Art Studio
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Handcrafted with love, preserving your precious memories in beautiful resin art pieces.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="hover-lift">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/collections" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/custom-order" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/care-instructions" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="font-body text-muted-foreground hover:text-primary transition-smooth">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary mt-1" />
                <span className="font-body text-muted-foreground">+923452178023</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <span className="font-body text-muted-foreground">umair.mughal2991986@gmail.com
</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="font-body text-muted-foreground">Karachi, Pakistan</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="font-body font-medium mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="flex-1"
                />
                <Button className="bg-gradient-primary hover:opacity-90 transition-smooth">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}


        {/* <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Resin Art Studio. All rights reserved. Made with {" "}
            <span className="text-primary">♥</span> in Pakistan
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <img src="/api/placeholder/40/25" alt="Payment method" className="h-6" />
            <img src="/api/placeholder/40/25" alt="Payment method" className="h-6" />
            <img src="/api/placeholder/40/25" alt="Payment method" className="h-6" />
          </div>
        </div> */}


        <div className="border-t border-border mt-8 pt-8 text-center">
  <p className="font-body text-sm text-muted-foreground">
    © {new Date().getFullYear()} Gilded Petals. All rights reserved.{" "}
    Made with <span className="text-red-500">♥</span> in Pakistan
    {" • "}
    <a
      href="https://webnbot.techkl.de/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline font-medium transition"
    >
      Made with Webnbot
    </a>
  </p>

  <div className="flex justify-center items-center space-x-6 mt-4">
    <img src="/api/placeholder/40/25" alt="JazzCash" className="h-6 opacity-80" />
    <img src="/api/placeholder/40/25" alt="Easypaisa" className="h-6 opacity-80" />
    <img src="/api/placeholder/40/25" alt="Bank Transfer" className="h-6 opacity-80" />
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
