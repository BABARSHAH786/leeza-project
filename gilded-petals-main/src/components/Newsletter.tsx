import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto animate-fade-in">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
            <Mail className="h-10 w-10 text-white" />
          </div>

          {/* Content */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Our Latest Creations
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new collection launches, 
            and inspiration for your next custom piece. Plus, get 10% off your first order!
          </p>

          {/* Newsletter Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 bg-white border-border/50"
            />
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-smooth whitespace-nowrap px-8"
            >
              Subscribe Now
            </Button>
          </div>

          {/* Privacy Note */}
          <p className="font-body text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
