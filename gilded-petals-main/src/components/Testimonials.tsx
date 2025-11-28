import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ayesha Khan",
    rating: 5,
    text: "The preserved flower jewellery from my wedding day is absolutely stunning! I wear it all the time and get so many compliments. The quality is exceptional.",
    product: "Preserved Flower Earrings",
  },
  {
    name: "Sarah Ahmed",
    rating: 5,
    text: "My custom nikkah plaque was exactly what I envisioned! The colors, the flowers, everything was perfect. Truly a work of art that I'll treasure forever.",
    product: "Custom Nikkah Plaque",
  },
  {
    name: "Zainab Malik",
    rating: 5,
    text: "I ordered a set of coasters as a gift and they were a huge hit! The resin work is flawless and the packaging was beautiful. Will definitely order again!",
    product: "Resin Coaster Set",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-accent text-2xl text-accent mb-2 block">What Our</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Customers Say
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of happy customers who have preserved their precious memories with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-lift animate-fade-in-up border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-heading font-semibold text-lg">{testimonial.name}</p>
                <p className="font-body text-sm text-muted-foreground">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-8 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-heading text-2xl font-bold">4.9</span>
            <span className="font-body text-muted-foreground">from 50+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
