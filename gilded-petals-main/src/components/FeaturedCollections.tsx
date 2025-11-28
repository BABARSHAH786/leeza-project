import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import collectionJewellery from "@/assets/collection-jewellery.jpg";
import collectionPlaques from "@/assets/collection-plaques.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

const collections = [
  {
    title: "Preserved Flower Jewellery",
    description: "Your flowers deserve to live forever. Turn your special day's blooms into wearable art.",
    image: collectionJewellery,
    link: "/collections/jewellery",
    color: "primary",
  },
  {
    title: "Nikkah & Engagement Plaques",
    description: "Fully customised resin name plaques to match your theme, style and event.",
    image: collectionPlaques,
    link: "/collections/plaques",
    color: "secondary",
  },
  {
    title: "Elegant Accessories",
    description: "Coasters, vanity trays, and decorative pieces to elevate your space.",
    image: collectionAccessories,
    link: "/collections/accessories",
    color: "accent",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-accent text-2xl text-accent mb-2 block">Explore Our</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured Collections
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collections of resin art, each piece crafted with love and attention to detail
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              to={collection.link}
              className="group block animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-lg hover-glow transition-smooth">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="font-body text-white/90 text-sm mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-fit bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-foreground transition-smooth"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
