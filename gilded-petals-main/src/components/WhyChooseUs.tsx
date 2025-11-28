import { Heart, Sparkles, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Handmade with Love",
    description: "Each piece is carefully crafted by hand with attention to every detail",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "We use only the finest resin and materials for lasting beauty",
  },
  {
    icon: Clock,
    title: "Timeless Preservation",
    description: "Your memories preserved forever in stunning resin art",
  },
  {
    icon: Award,
    title: "Full Customisation",
    description: "Every piece can be personalized to match your vision perfectly",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-accent text-2xl text-accent mb-2 block">Why Choose</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Resin Art Studio
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to creating pieces that capture your most precious memories with artistry and care
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-3xl p-8 hover-lift transition-smooth">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 transition-bounce group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass rounded-3xl p-8 text-center animate-fade-in">
          <p className="font-body text-lg text-muted-foreground mb-4">
            Every piece is made to order with a processing time of{" "}
            <span className="font-semibold text-primary">3-4 days</span> for standard items
            and <span className="font-semibold text-primary">5-7 days</span> for flower preservation
          </p>
          <p className="font-accent text-xl text-accent">
            Patience brings the most beautiful results ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
