// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const collections = [
//   {
//     title: "Nikkah & Engagement Plaques",
//     description: "Celebrate your special day with custom plaques featuring your names, dates, and preserved flowers",
//     itemCount: "45+ designs",
//     link: "/shop?category=plaques",
//   },
//   {
//     title: "Preserved Flower Jewellery",
//     description: "Wear your wedding flowers forever with our beautiful preserved flower earrings and necklaces",
//     itemCount: "30+ pieces",
//     link: "/shop?category=jewellery",
//   },
//   {
//     title: "Personalised Name Plaques",
//     description: "Custom name plaques perfect for nurseries, home decor, or special gifts",
//     itemCount: "50+ styles",
//     link: "/shop?category=name-plaques",
//   },
//   {
//     title: "Tea Coasters",
//     description: "Elegant resin coasters with pressed flowers and gold accents for your home",
//     itemCount: "25+ sets",
//     link: "/shop?category=coasters",
//   },
//   {
//     title: "Vanity Trays",
//     description: "Beautiful resin trays to organize your jewelry and accessories in style",
//     itemCount: "20+ designs",
//     link: "/shop?category=trays",
//   },
//   {
//     title: "Clock Collection",
//     description: "Functional art pieces combining time-telling with stunning resin designs",
//     itemCount: "15+ clocks",
//     link: "/shop?category=clocks",
//   },
//   {
//     title: "Accessories",
//     description: "Keychains, bookmarks, and other small resin treasures",
//     itemCount: "40+ items",
//     link: "/shop?category=accessories",
//   },
//   {
//     title: "Soy Candles",
//     description: "Hand-poured soy candles with resin decorative elements",
//     itemCount: "12+ scents",
//     link: "/shop?category=candles",
//   },
// ];

// const Collections = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
      
//       {/* Page Header */}
//       <section className="bg-gradient-soft py-20 border-b border-border">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
//             Our Collections
//           </h1>
//           <p className="font-body text-lg text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
//             Explore our carefully curated collections of handmade resin art. Each piece is crafted with love and attention to detail.
//           </p>
//         </div>
//       </section>

//       {/* Collections Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {collections.map((collection, index) => (
//               <Link
//                 key={index}
//                 to={collection.link}
//                 className="group block animate-fade-in-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="glass rounded-3xl p-8 hover-lift transition-smooth h-full">
//                   {/* Collection Number */}
//                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-6">
//                     <span className="font-heading text-xl font-bold text-white">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
//                     {collection.title}
//                   </h3>
//                   <p className="font-body text-muted-foreground mb-4 leading-relaxed">
//                     {collection.description}
//                   </p>

//                   {/* Meta */}
//                   <div className="flex items-center justify-between pt-4 border-t border-border/50">
//                     <span className="font-body text-sm text-accent font-semibold">
//                       {collection.itemCount}
//                     </span>
//                     <Button
//                       variant="ghost"
//                       className="group-hover:text-primary transition-smooth p-0 h-auto"
//                     >
//                       Explore
//                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     </Button>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="mt-16 text-center animate-fade-in">
//             <div className="glass rounded-3xl p-12 max-w-3xl mx-auto">
//               <h2 className="font-heading text-3xl font-bold mb-4">
//                 Can't Find What You're Looking For?
//               </h2>
//               <p className="font-body text-muted-foreground mb-6">
//                 We specialize in custom orders! Tell us your vision and we'll bring it to life.
//               </p>
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-gradient-primary hover:opacity-90 transition-smooth px-8"
//               >
//                 <Link to="/custom-order">
//                   Create Custom Order
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Collections;












// grok image code 
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const collections = [
//   {
//     title: "Nikkah & Engagement Plaques",
    
//     itemCount: "45+ designs",
//     link: "/shop?category=plaques",
//     image: "https://img.drz.lazcdn.com/g/kf/Scdc471fdca5b4b04a38864f4380551acR.jpg_720x720q80.jpg"
//   },
//   {
//     title: "Preserved Flower Jewellery",
//     description: "Wear your wedding flowers forever with our beautiful preserved flower earrings and necklaces",
//     itemCount: "30+ pieces",
//     link: "/shop?category=jewellery",
//     image: "https://5.imimg.com/data5/SELLER/Default/2024/3/401445607/UR/RI/NW/94862174/resin-alphabet-keychain-500x500.jpg"
//   },
//   {
//     title: "Personalised Name Plaques",
//     description: "Custom name plaques perfect for nurseries, home decor, or special gifts",
//     itemCount: "50+ styles",
//     link: "/shop?category=name-plaques",
//     image: "https://m.media-amazon.com/images/I/91ZRueBfRFL._AC_UY1100_.jpg"
//   },
//   {
//     title: "Tea Coasters",
//     description: "Elegant resin coasters with pressed flowers and gold accents for your home",
//     itemCount: "25+ sets",
//     link: "/shop?category=coasters",
//     image: "https://i.postimg.cc/K8qsRjFV/Screenshot-2025-11-25-231831.jpg"
//   },
//   {
//     title: "Vanity Trays",
//     description: "Beautiful resin trays to organize your jewelry and accessories in style",
//     itemCount: "20+ designs",
//     link: "/shop?category=trays",
//     image: "https://i.etsystatic.com/24617142/r/il/383f13/3535529787/il_fullxfull.3535529787_7osd.jpg"
//   },
//   {
//     title: "Clock Collection",
//     description: "Functional art pieces combining time-telling with stunning resin designs",
//     itemCount: "15+ clocks",
//     link: "/shop?category=clocks",
//     image: "https://m.media-amazon.com/images/I/61s6RYdbLEL._AC_UY1000_.jpg"
//   },
//   {
//     title: "Accessories",
//     description: "Keychains, bookmarks, and other small resin treasures",
//     itemCount: "40+ items",
//     link: "/shop?category=accessories",
//     image: "https://theartking.in/cdn/shop/files/84650.jpg?v=1734944114&width=1445"
//   },
//   {
//     title: "",
//     description: "Custome Keychain",
  
//     link: "/shop?category=candles",
//     image: "https://i.postimg.cc/mZy4hZHT/Gemini-Generated-Image-npicamnpicamnpic.png"
//   },
// ];

// const Collections = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
//       <Navbar />

//       {/* Page Header */}
//       <section className="bg-gradient-soft py-20 border-b border-border">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//             Our Collections
//           </h1>
//           <p className="font-body text-lg text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in">
//             Explore our carefully curated collections of handmade resin art. Each piece is crafted with love and attention to detail.
//           </p>
//         </div>
//       </section>

//       {/* Collections Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {collections.map((collection, index) => (
//               <Link
//                 key={index}
//                 to={collection.link}
//                 className="group block animate-fade-in-up rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="relative h-80 overflow-hidden">
//                   <img 
//                     src={collection.image}
//                     alt={collection.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
//                   {/* Overlay Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                     <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur mb-4">
//                       <span className="font-heading text-2xl font-bold">
//                         {String(index + 1).padStart(2, '0')}
//                       </span>
//                     </div>
                    
//                     <h3 className="font-heading text-3xl font-bold mb-3 drop-shadow-lg">
//                       {collection.title}
//                     </h3>
//                     <p className="font-body text-white/90 mb-4 drop-shadow-md line-clamp-2">
//                       {collection.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="font-bold text-lg bg-white/20 backdrop-blur px-4 py-2 rounded-full">
//                         {collection.itemCount}
//                       </span>
//                       <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full hover:bg-white/30 transition">
//                         <span className="font-semibold">Explore</span>
//                         <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="mt-20 text-center">
//             <div className="glass rounded-3xl p-16 max-w-4xl mx-auto bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur">
//               <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
//                 Can't Find What You're Looking For?
//               </h2>
//               <p className="font-body text-xl text-white/90 mb-10 max-w-2xl mx-auto">
//                 We specialize in custom orders! Tell us your vision and we'll bring it to life with preserved flowers, gold, and pure magic.
//               </p>
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition"
//               >
//                 <Link to="/custom-order">
//                   Create Your Custom Piece
//                   <ArrowRight className="ml-3 h-6 w-6" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Collections;





import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const collections = [
   {
    title: "Nikkah & Engagement Plaques",
    
    itemCount: "45+ designs",
    link: "/shop?category=plaques",
    image: "https://img.drz.lazcdn.com/g/kf/Scdc471fdca5b4b04a38864f4380551acR.jpg_720x720q80.jpg"
  },
  {
    title: "Preserved Flower Jewellery",
    description: "Wear your wedding flowers forever with our beautiful preserved flower earrings and necklaces",
    itemCount: "30+ pieces",
    link: "/shop?category=jewellery",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/401445607/UR/RI/NW/94862174/resin-alphabet-keychain-500x500.jpg"
  },
  {
    title: "Personalised Name keychains",
    description: "Custom name plaques perfect for nurseries, home decor, or special gifts",
    itemCount: "50+ styles",
    link: "/shop?category=name-plaques",
    image: "https://m.media-amazon.com/images/I/91ZRueBfRFL._AC_UY1100_.jpg"
  },
  {
    title: "Couple Name Keychains",
    description: "Elegant resin coasters with pressed flowers and gold accents for your home",
    itemCount: "25+ sets",
    link: "/shop?category=coasters",
    image: "https://i.postimg.cc/K8qsRjFV/Screenshot-2025-11-25-231831.jpg"
  },
  {
    title: "Custom pic Keychains",
    description: "Beautiful resin trays to organize your jewelry and accessories in style",
    itemCount: "20+ designs",
    link: "/shop?category=trays",
    image: "https://i.etsystatic.com/24617142/r/il/383f13/3535529787/il_fullxfull.3535529787_7osd.jpg"
  },
  {
    title: "Clock Collection",
    description: "Functional art pieces combining time-telling with stunning resin designs",
    itemCount: "15+ clocks",
    link: "/shop?category=clocks",
    image: "https://m.media-amazon.com/images/I/61s6RYdbLEL._AC_UY1000_.jpg"
  },
  {
    title: "Accessories",
    description: "Keychains, bookmarks, and other small resin treasures",
    itemCount: "40+ items",
    link: "/shop?category=accessories",
    image: "https://theartking.in/cdn/shop/files/84650.jpg?v=1734944114&width=1445"
  },
  {
    title: "Resin Bookmark Collection",
    description: "Custome Keychain",
  
    link: "/shop?category=candles",
    image: "https://i.postimg.cc/mZy4hZHT/Gemini-Generated-Image-npicamnpicamnpic.png"
  
  
  },

{
  title: "Crystal Bracelets",
    description: "Custome Keychain",
  
    link: "/shop?category=candles",
    image: "https://i.postimg.cc/mgVL6Y4V/Whats-App-Image-2025-11-13-at-16-44-11-690dbfbe.jpg"


},
{  title: "Clock Collection",
    description: "Custome Keychain",
  
    link: "/shop?category=candles",
    image: "https://pacificresinart.in/cdn/shop/files/rn-image_picker_lib_temp_53cac97d-c009-408e-bbb9-6eb68fa4903a.webp"


},

];
const Collections = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Navbar />

        {/* Header */}
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Collections
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Handcrafted with love, preserved forever in resin
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                  onClick={() => setSelectedImage(collection.image)}
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-5xl font-bold opacity-30">0{index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-white/90 mb-4 line-clamp-2">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-white/20 backdrop-blur px-5 py-2 rounded-full text-lg font-semibold">
                        {collection.itemCount}
                      </span>
                      <Link
                        to={collection.link}
                        className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Screen Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-screen p-8">
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="max-w-full max-h-screen object-contain rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur rounded-full p-3 hover:bg-white/40 transition"
              >
                <X className="h-8 w-8 text-white" />
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Collections;