import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-soft py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="font-accent text-2xl text-accent mb-4 block">Our Story</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Preserving Memories,{" "}
              <span className=" ">
                One Piece at a Time
              </span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              At Resin Art Studio, we believe that every moment deserves to be preserved beautifully. 
              What started as a passion for art has blossomed into a mission to help people keep their 
              most precious memories alive through handcrafted resin pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every piece is handcrafted with care and attention to detail",
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "We use only the finest materials for lasting beauty",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction and memories are our top priority",
              },
              {
                icon: Sparkles,
                title: "Unique Designs",
                description: "No two pieces are alike - each is one-of-a-kind",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass rounded-3xl p-8 hover-lift transition-smooth">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 transition-bounce group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-12 animate-fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
                How It All Began
              </h2>
              
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  Resin Art Studio was born from a simple desire - to preserve the beauty of 
                  fleeting moments. After creating a custom piece to preserve my own wedding flowers, 
                  I realized how powerful it was to hold onto those precious memories in such a 
                  beautiful, tangible way.
                </p>
                
                <p>
                  What started as a personal project quickly grew into a passion. Friends and family 
                  began requesting their own pieces, and I knew I had found my calling. Today, we've 
                  helped hundreds of customers preserve their most cherished moments - from wedding 
                  flowers to baby's first photos, from engagement celebrations to memorial tributes.
                </p>
                
                <p>
                  Every piece we create tells a story. Whether it's a nikkah plaque celebrating a 
                  new beginning, preserved flower jewellery keeping memories close to your heart, 
                  or a custom name plaque welcoming a new baby - we pour our heart into making 
                  each creation perfect for you.
                </p>
                
                <p className="font-semibold text-foreground">
                  Thank you for trusting us with your precious memories. We're honored to be part 
                  of your special moments.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50 text-center">
                <p className="font-accent text-2xl text-accent">
                  With love,
                </p>
                <p className="font-heading text-xl font-semibold mt-2">
                  The Resin Art Studio Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Happy Customers" },
              { number: "100+", label: "Pieces Created" },
              { number: "4.9", label: "Average Rating" },
              { number: "100%", label: "Handmade" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-heading text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text  mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
