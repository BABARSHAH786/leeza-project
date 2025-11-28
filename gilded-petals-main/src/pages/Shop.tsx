// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, SlidersHorizontal, Heart } from "lucide-react";

// const Shop = () => {
//   // Mock product data
//   const products = Array.from({ length: 12 }, (_, i) => ({
//     id: i + 1,
//     name: `Resin Art Piece ${i + 1}`,
//     price: 2500 + i * 500,
//     image: "/api/placeholder/400/400",
//     category: i % 3 === 0 ? "Plaques" : i % 3 === 1 ? "Jewellery" : "Accessories",
//   }));

//   return (
//     <div className="min-h-screen">
//       <Navbar />
      
//       {/* Page Header */}
//       <section className="bg-gradient-soft py-16 border-b border-border">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
//             Shop All Collections
//           </h1>
//           <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto animate-fade-in">
//             Discover our complete range of handmade resin art pieces
//           </p>
//         </div>
//       </section>

//       {/* Shop Content */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           {/* Filters and Search */}
//           <div className="flex flex-col md:flex-row gap-4 mb-8">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//               <Input
//                 placeholder="Search products..."
//                 className="pl-10"
//               />
//             </div>
//             <Button variant="outline" className="gap-2">
//               <SlidersHorizontal className="h-5 w-5" />
//               Filters
//             </Button>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {products.map((product, index) => (
//               <div
//                 key={product.id}
//                 className="group animate-fade-in-up hover-lift"
//                 style={{ animationDelay: `${index * 0.05}s` }}
//               >
//                 <div className="bg-card rounded-2xl overflow-hidden shadow-md hover-glow transition-smooth">
//                   {/* Image */}
//                   <div className="relative aspect-square overflow-hidden bg-muted">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     {/* Quick Actions */}
//                     <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <Button
//                         size="icon"
//                         variant="secondary"
//                         className="rounded-full bg-white/90 backdrop-blur-sm"
//                       >
//                         <Heart className="h-5 w-5" />
//                       </Button>
//                     </div>
//                     <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <Button className="w-full bg-gradient-primary hover:opacity-90">
//                         Quick View
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-4">
//                     <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">
//                       {product.category}
//                     </span>
//                     <h3 className="font-heading text-lg font-semibold mt-1 mb-2">
//                       {product.name}
//                     </h3>
//                     <div className="flex items-center justify-between">
//                       <span className="font-body text-xl font-bold text-primary">
//                         Rs. {product.price.toLocaleString()}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Shop;





// grok live update code  


// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, SlidersHorizontal, Heart } from "lucide-react";
// import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabaseClient";  // ← Ye line add ki hai

// const Shop = () => {
//   // ← Yahan se Supabase data fetch kar rahe hain
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await supabase
//         .from("flower_products")
//         .select("*")
//         .order("created_at", { ascending: false });

//       setProducts(data || []);
//       setLoading(false);
//     };

//     fetchProducts();

//     // ← Realtime updates (jab admin add/delete karega to shop pe turant dikhega)
//     const channel = supabase
//       .channel("flower_products")
//       .on(
//         "postgres_changes",
//         { event: "*", schema: "public", table: "flower_products" },
//         () => fetchProducts()
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, []);

//   // Agar loading ho raha ho to tera beautiful loader dikhega
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-2xl font-heading">Loading amazing products...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Page Header */}
//       <section className="bg-gradient-soft py-16 border-b border-border">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
//             Shop All Collections
//           </h1>
//           <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto animate-fade-in">
//             Discover our complete range of handmade resin art pieces
//           </p>
//         </div>
//       </section>

//       {/* Shop Content */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           {/* Filters and Search */}
//           <div className="flex flex-col md:flex-row gap-4 mb-8">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//               <Input placeholder="Search products..." className="pl-10" />
//             </div>
//             <Button variant="outline" className="gap-2">
//               <SlidersHorizontal className="h-5 w-5" />
//               Filters
//             </Button>
//           </div>

//           {/* Product Grid - Ab live data aa raha hai */}
//           {products.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-2xl text-muted-foreground">No products yet. Admin will add soon!</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {products.map((product, index) => (
//                 <div
//                   key={product.id}
//                   className="group animate-fade-in-up hover-lift"
//                   style={{ animationDelay: `${index * 0.05}s` }}
//                 >
//                   <div className="bg-card rounded-2xl overflow-hidden shadow-md hover-glow transition-smooth">
//                     {/* Image */}
//                     <div className="relative aspect-square overflow-hidden bg-muted">
//                       <img
//                         src={product.image_url || "/api/placeholder/400/400"}
//                         alt={product.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <Button size="icon" variant="secondary" className="rounded-full bg-white/90 backdrop-blur-sm">
//                           <Heart className="h-5 w-5" />
//                         </Button>
//                       </div>
//                       <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <Button className="w-full bg-gradient-primary hover:opacity-90">
//                           Quick View
//                         </Button>
//                       </div>
//                     </div>

//                     {/* Product Info */}
//                     <div className="p-4">
//                       <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">
//                         Resin Art
//                       </span>
//                       <h3 className="font-heading text-lg font-semibold mt-1 mb-2">
//                         {product.title}
//                       </h3>
//                       <div className="flex items-center justify-between">
//                         <span className="font-body text-xl font-bold text-primary">
//                           Rs. {Number(product.price).toLocaleString()}
//                         </span>
//                       </div>
                    
                    
//                     </div>
//                   </div>
//                 </div>
              
              
              
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Shop;





// src/pages/Shop.tsx
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Heart, ShoppingBag, Sparkles, Search } from "lucide-react";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const allProducts = [
//   { id: 1, title: "Eternal Love Nikkah Plaque", price: 8500, category: "plaque", img: "https://static.wixstatic.com/media/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg" },
//   { id: 2, title: "Preserved Rose Gold Earrings", price: 4500, category: "jewellery", img: "https://i.postimg.cc/xdvLJFVt/Screenshot-2025-11-26-001624.jpg" },
//   { id: 3, title: "Ocean Wave Coasters Set", price: 4800, category: "coasters", img: "https://i.postimg.cc/SRMSR3wp/Screenshot-2025-11-26-001854.jpg" },
//   { id: 4, title: "Galaxy Resin Vanity Tray", price: 7200, category: "tray", img: "https://i.postimg.cc/s2xvy6D2/Screenshot-2025-11-26-002029.jpg" },
//   { id: 5, title: "Baby Name Welcome Plaque", price: 5800, category: "plaque", img: "https://i.imgur.com/5pL9mQw.jpeg" },
//   { id: 6, title: "Golden Floral Wall Clock", price: 9500, category: "clock", img: "https://i.imgur.com/7vR3kLm.jpeg" },

  
// ];

// export default function Shop() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [hoveredId, setHoveredId] = useState<number | null>(null);

//   const filteredProducts = allProducts.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
//       <Navbar />

//       {/* Hero */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className=""
//       >
//         <div className="absolute inset-0 ">
//           <img src="https://i.postimg.cc/hGz6Bzvp/Gemini-Generated-Image-8qptwl8qptwl8qpt.png" className="w-full h-full object-cover" />
//         </div>
//         <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
//           <motion.h1 
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-5xl md:text-7xl font-bold mb-4"
//           >
//             Gilded Petals Shop
//           </motion.h1>
//           <motion.p 
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl md:text-2xl mb-8"
//           >
//             Handcrafted Resin Art • Made with Love in Pakistan
//           </motion.p>

//           {/* WORKING SEARCH BOX */}
//           <motion.div 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="relative w-full max-w-xl"
//           >
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-purple-300" />
//             <Input
//               type="text"
//               placeholder="Search products... (e.g., plaque, earrings, tray)"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-14 pr-6 py-7 text-lg rounded-full bg-white/20 backdrop-blur-lg border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-white/50"
//             />
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Products Grid */}
//       <section className="container mx-auto px-6 py-20">
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-3xl text-gray-500">No products found for "{searchTerm}"</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//             {filteredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 80 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 onHoverStart={() => setHoveredId(product.id)}
//                 onHoverEnd={() => setHoveredId(null)}
//                 className="group"
//               >
//                 <motion.div
//                   whileHover={{ y: -25, rotate: 2 }}
//                   className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
//                 >
//                   <div className="aspect-square overflow-hidden relative">
//                     <motion.img
//                       src={product.img}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.2 }}
//                       transition={{ duration: 0.9 }}
//                     />
                    
//                     {/* Magic Glow */}
//                     <motion.div
//                       animate={{ opacity: hoveredId === product.id ? 0.6 : 0 }}
//                       className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-transparent"
//                     />

//                     {/* Floating Heart + Sparkles */}
//                     {hoveredId === product.id && (
//                       <>
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1, rotate: 360 }}
//                           transition={{ duration: 0.5 }}
//                           className="absolute top-4 right-4 bg-white rounded-full p-4 shadow-2xl"
//                         >
//                           <Heart className="h-7 w-7 text-pink-600 fill-pink-600" />
//                         </motion.div>
//                         <Sparkles className="absolute top-10 left-8 h-10 w-10 text-yellow-300 animate-pulse" />
//                         <Sparkles className="absolute bottom-16 right-10 h-8 w-8 text-yellow-300 animate-pulse delay-300" />
//                       </>
//                     )}
//                   </div>

//                   <div className="p-6 bg-gradient-to-b from-white to-purple-50">
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
//                     <div className="flex items-center justify-between mt-6">
//                       <motion.span 
//                         animate={{ scale: hoveredId === product.id ? 1.15 : 1 }}
//                         className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//                       >
//                         Rs. {product.price.toLocaleString()}
//                       </motion.span>

//                       <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//                         <Button
//                           onClick={() => window.open(`https://wa.me/923452178023?text=Assalam%20o%20Alaikum!%20I'm%20interested%20in:%20${encodeURIComponent(product.title)}%20-%20Rs.${product.price}`, "_blank")}
//                           className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full px-6 py-3 shadow-xl"
//                         >
//                           <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
//                         </Button>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }










































// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Heart, ShoppingBag, Sparkles, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence import kiya
// import { useState, useEffect } from "react"; // useEffect import kiya

// // Hero Images for automatic cycling - Yahan aap apni pasand ki images add kar sakte hain
// const heroImages = [
//     { id: 1, url: "https://i.postimg.cc/hGz6Bzvp/Gemini-Generated-Image-8qptwl8qptwl8qpt.png" }, // Aapki original image
//     { id: 2, url: "https://bookhero.co.nz/cdn/shop/files/26086363482702.jpg?v=1759203866&width=640" }, // Meri banayi hui realistic image 1
//     { id: 3, url: "https://i.pinimg.com/736x/56/d7/a7/56d7a736190973f64695565884dbaa46.jpg" }, // Meri banayi hui realistic image 2
//     { id: 4, url: "https://i.postimg.cc/7Ycgbftw/Screenshot-2025-11-27-174641.jpg" }, // Meri banayi hui realistic image 3 (jewellery focused)
// ];


// const allProducts = [
//   { id: 1, title: "Eternal Love Nikkah Plaque", price: 8500, category: "plaque", img: "https://static.wixstatic.com/media/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg" },
//   { id: 2, title: "Preserved Rose Gold Earrings", price: 4500, category: "jewellery", img: "https://i.postimg.cc/xdvLJFVt/Screenshot-2025-11-26-001624.jpg" },
//   { id: 3, title: "Ocean Wave Coasters Set", price: 4800, category: "coasters", img: "https://i.postimg.cc/SRMSR3wp/Screenshot-2025-11-26-001854.jpg" },
//   { id: 4, title: "Galaxy Resin Vanity Tray", price: 7200, category: "tray", img: "https://i.postimg.cc/s2xvy6D2/Screenshot-2025-11-26-002029.jpg" },
//   { id: 5, title: "Baby Name Welcome Plaque", price: 5800, category: "plaque", img: "https://i.imgur.com/5pL9mQw.jpeg" },
//   { id: 6, title: "Golden Floral Wall Clock", price: 9500, category: "clock", img: "https://i.imgur.com/7vR3kLm.jpeg" },
//   // Aap yahan aur products add kar sakte hain
// ];

// export default function Shop() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [hoveredId, setHoveredId] = useState<number | null>(null);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0); // Hero image index ke liye state

//     // Hero Section Image Cycling Effect
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
//         }, 3000); // Har 3 seconds mein image change hogi

//         return () => clearInterval(interval);
//     }, []);

//     const filteredProducts = allProducts.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
//             <Navbar />

//             {/* Hero Section */}
//             <motion.section 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden" // height ko screen ke barabar kiya
//             >
//                 {/* Background Image with Animation */}
//                 <AnimatePresence initial={false}>
//                     <motion.img
//                         key={heroImages[currentImageIndex].id} // Key change karne se animation trigger hoga
//                         src={heroImages[currentImageIndex].url}
//                         initial={{ opacity: 0, scale: 1.05 }}
//                         animate={{ opacity: 0.2, scale: 1 }} // Opacity kam rakha hai taaki text dikhe
//                         exit={{ opacity: 0, scale: 1.05 }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                         className="absolute inset-0 w-full h-full object-cover"
//                         alt="Hero Background" 
//                     />
//                 </AnimatePresence>

//                 {/* Content Overlay */}
//                 <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full">
//                     <motion.h1 
//                         initial={{ y: 50, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         className="text-5xl md:text-7xl font-bold mb-4"
//                     >
//                         Gilded Petals Shop
//                     </motion.h1>
//                     <motion.p 
//                         initial={{ y: 30, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.4 }}
//                         className="text-xl md:text-2xl mb-8"
//                     >
//                         The Keychain Lab & Jewellery • Handcrafted Resin Art • Made with Love in Pakistan
//                     </motion.p>

//                     {/* WORKING SEARCH BOX */}
//                     <motion.div 
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ delay: 0.6 }}
//                         className="relative w-full max-w-xl"
//                     >
//                         <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-purple-300" />
//                         <Input
//                             type="text"
//                             placeholder="Search products... (e.g., plaque, earrings, tray)"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="pl-14 pr-6 py-7 text-lg rounded-full bg-white/20 backdrop-blur-lg border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-white/50"
//                         />
//                     </motion.div>
//                 </div>
//             </motion.section>

//             {/* Products Grid - Products ko hero section ke neeche dhakel diya */}
//             <section className="container mx-auto px-6 py-20 mt-[-100px] relative z-20"> {/* margin-top adjust kiya */}
//                 {filteredProducts.length === 0 ? (
//                     <div className="text-center py-20">
//                         <p className="text-3xl text-gray-500">No products found for "{searchTerm}"</p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//                         {filteredProducts.map((product, index) => (
//                             <motion.div
//                                 key={product.id}
//                                 initial={{ opacity: 0, y: 80 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 onHoverStart={() => setHoveredId(product.id)}
//                                 onHoverEnd={() => setHoveredId(null)}
//                                 className="group"
//                             >
//                                 <motion.div
//                                     whileHover={{ y: -25, rotate: 2 }}
//                                     className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
//                                 >
//                                     <div className="aspect-square overflow-hidden relative">
//                                         <motion.img
//                                             src={product.img}
//                                             alt={product.title}
//                                             className="w-full h-full object-cover"
//                                             whileHover={{ scale: 1.2 }}
//                                             transition={{ duration: 0.9 }}
//                                         />
                                        
//                                         {/* Magic Glow */}
//                                         <motion.div
//                                             animate={{ opacity: hoveredId === product.id ? 0.6 : 0 }}
//                                             className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-transparent"
//                                         />

//                                         {/* Floating Heart + Sparkles */}
//                                         {hoveredId === product.id && (
//                                             <>
//                                                 <motion.div
//                                                     initial={{ scale: 0 }}
//                                                     animate={{ scale: 1, rotate: 360 }}
//                                                     transition={{ duration: 0.5 }}
//                                                     className="absolute top-4 right-4 bg-white rounded-full p-4 shadow-2xl"
//                                                 >
//                                                     <Heart className="h-7 w-7 text-pink-600 fill-pink-600" />
//                                                 </motion.div>
//                                                 <Sparkles className="absolute top-10 left-8 h-10 w-10 text-yellow-300 animate-pulse" />
//                                                 <Sparkles className="absolute bottom-16 right-10 h-8 w-8 text-yellow-300 animate-pulse delay-300" />
//                                             </>
//                                         )}
//                                     </div>

//                                     <div className="p-6 bg-gradient-to-b from-white to-purple-50">
//                                         <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
//                                         <div className="flex items-center justify-between mt-6">
//                                             <motion.span 
//                                                 animate={{ scale: hoveredId === product.id ? 1.15 : 1 }}
//                                                 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//                                             >
//                                                 Rs. {product.price.toLocaleString()}
//                                             </motion.span>

//                                             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//                                                 <Button
//                                                     onClick={() => window.open(`https://wa.me/923452178023?text=Assalam%20o%20Alaikum!%20I'm%20interested%20in:%20${encodeURIComponent(product.title)}%20-%20Rs.${product.price}`, "_blank")}
//                                                     className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full px-6 py-3 shadow-xl"
//                                                 >
//                                                     <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
//                                                 </Button>
//                                             </motion.div>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 )}
//             </section>

//             <Footer />
//         </div>
//     );
// }























// without updata admin data 
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Heart, ShoppingBag, Sparkles, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const heroImages = [
//   { id: 1, url: "https://i.postimg.cc/hGz6Bzvp/Gemini-Generated-Image-8qptwl8qptwl8qpt.png" },
//   { id: 2, url: "https://bookhero.co.nz/cdn/shop/files/26086363482702.jpg?v=1759203866&width=640" },
//   { id: 3, url: "https://i.pinimg.com/736x/56/d7/a7/56d7a736190973f64695565884dbaa46.jpg" },
//   { id: 4, url: "https://i.postimg.cc/7Ycgbftw/Screenshot-2025-11-27-174641.jpg" },
// ];

// const allProducts = [
//   { id: 1, title: "Eternal Love Nikkah Plaque", price: 8500, category: "plaque", img: "https://static.wixstatic.com/media/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg" },
//   { id: 2, title: "Preserved Rose Gold Earrings", price: 4500, category: "jewellery", img: "https://i.postimg.cc/xdvLJFVt/Screenshot-2025-11-26-001624.jpg" },
//   { id: 3, title: "Ocean Wave Coasters Set", price: 4800, category: "coasters", img: "https://i.postimg.cc/SRMSR3wp/Screenshot-2025-11-26-001854.jpg" },
//   { id: 4, title: "Galaxy Resin Vanity Tray", price: 7200, category: "tray", img: "https://i.postimg.cc/s2xvy6D2/Screenshot-2025-11-26-002029.jpg" },
//   { id: 5, title: "Baby Name Welcome Plaque", price: 5800, category: "plaque", img: "https://www.skillshare.com/blog/wp-content/uploads/2024/01/1_D7PD5LR3l0_WRW86Na6S-29fkmMr66j1rx-xuSHdEY-tBkw6mP7v4CdKuRJ5VaWEB4mZ0OP1ya1ZsF3YAXfiPle3dzDcsJJZxtEbK-gcfz6NXtqDxJM9JeMUr2MNgxKCwqroQXC.png" },
//   { id: 6, title: "Golden Floral Wall Clock", price: 9500, category: "clock", img: "https://adastrajewelry.com/admin/admin/ckeditor/uploads/resin5.webp" },
//  { id: 6, title: "Golden Floral Wall Clock", price: 9500, category: "clock", img: "https://smithandtrade.com/cdn/shop/files/c6dc3lqzqkcwitkkritw.jpg?v=1721184370" },

// ];

// export default function Shop() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const filteredProducts = allProducts.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
//       <Navbar />
// {/* HERO SECTION – FIXED & PREMIUM */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Images – Sharp & Full Quality */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImageIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.8, ease: "easeInOut" }}
//             className="absolute inset-0"
//           >
//             <img
//               src={heroImages[currentImageIndex].url}
//               alt="Resin Art Hero"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Premium Gradient Overlay – Text pop karega */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//         {/* Content */}
//         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold text-black drop-shadow-2xl"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             Gilded Petals Shop
//           </motion.h1>

//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-xl md:text-2xl lg:text-3xl text-black/90 mt-4 font-light tracking-wide drop-shadow-lg"
//           >
//             The Keychain Lab & Jewellery • Handcrafted Resin Art • Made with Love in Pakistan
//           </motion.p>

//           {/* Search Bar */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-10 max-w-2xl mx-auto"
//           >
//             <div className="relative">
//               <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/70" />
//               <Input
//                 type="text"
//                 placeholder="Search products... (plaque, earrings, tray...)"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-16 pr-8 py-8 text-lg rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-white/40 shadow-2xl"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Down Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </motion.div>
//       </section>

//       {/* Products Grid */}
//       <section className="container mx-auto px-6 py-24">
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-3xl text-gray-500 py-20">No products found for "{searchTerm}"</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//             {filteredProducts.map((product, i) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 onHoverStart={() => setHoveredId(product.id)}
//                 onHoverEnd={() => setHoveredId(null)}
//                 className="group"
//               >
//                 {/* Product Card – Same as before, no change */}
//                 <motion.div whileHover={{ y: -20 }} className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
//                   <div className="aspect-square relative overflow-hidden">
//                     <motion.img
//                       src={product.img}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.15 }}
//                       transition={{ duration: 0.8 }}
//                     />
//                     <motion.div
//                       animate={{ opacity: hoveredId === product.id ? 0.5 : 0 }}
//                       className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/40 to-transparent"
//                     />
//                     {hoveredId === product.id && (
//                       <>
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1, rotate: 360 }}
//                           className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-2xl"
//                         >
//                           <Heart className="h-7 w-7 text-pink-600 fill-pink-600" />
//                         </motion.div>
//                         <Sparkles className="absolute top-10 left-8 h-10 w-10 text-yellow-300 animate-pulse" />
//                       </>
//                     )}
//                   </div>

//                   <div className="p-6 bg-gradient-to-b from-white to-purple-50">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{product.title}</h3>
//                     <div className="flex items-center justify-between mt-4">
//                       <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                         Rs. {product.price.toLocaleString()}
//                       </span>
//                       <Button
//                         onClick={() => window.open(`https://wa.me/923452178023?text=I'm%20interested%20in:%20${encodeURIComponent(product.title)}%20-%20Rs.${product.price}`, "_blank")}
//                         className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full px-6 py-3 shadow-xl"
//                       >
//                         <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
//                       </Button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }











































// File: src/app/shop/page.tsx  (ya jahan bhi tumhara shop page hai)

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Heart, ShoppingBag, Sparkles, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabaseClient";

// const heroImages = [
//   { id: 1, url: "https://i.postimg.cc/hGz6Bzvp/Gemini-Generated-Image-8qptwl8qptwl8qpt.png" },
//   { id: 2, url: "https://bookhero.co.nz/cdn/shop/files/26086363482702.jpg?v=1759203866&width=640" },
//   { id: 3, url: "https://i.pinimg.com/736x/56/d7/a7/56d7a736190973f64695565884dbaa46.jpg" },
//   { id: 4, url: "https://i.postimg.cc/7Ycgbftw/Screenshot-2025-11-27-174641.jpg" },
// ];

// const allProducts = [
//   { id: 1, title: "Eternal Love Nikkah Plaque", price: 8500, category: "plaque", img: "https://static.wixstatic.com/media/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg" },
//   { id: 2, title: "Preserved Rose Gold Earrings", price: 4500, category: "jewellery", img: "https://i.postimg.cc/xdvLJFVt/Screenshot-2025-11-26-001624.jpg" },
//   { id: 3, title: "Ocean Wave Coasters Set", price: 4800, category: "coasters", img: "https://i.postimg.cc/SRMSR3wp/Screenshot-2025-11-26-001854.jpg" },
//   { id: 4, title: "Galaxy Resin Vanity Tray", price: 7200, category: "tray", img: "https://i.postimg.cc/s2xvy6D2/Screenshot-2025-11-26-002029.jpg" },
//   { id: 5, title: "Baby Name Welcome Plaque", price: 5800, category: "plaque", img: "https://www.skillshare.com/blog/wp-content/uploads/2024/01/1_D7PD5LR3l0_WRW86Na6S-29fkmMr66j1rx-xuSHdEY-tBkw6mP7v4CdKuRJ5VaWEB4mZ0OP1ya1ZsF3YAXfiPle3dzDcsJJZxtEbK-gcfz6NXtqDxJM9JeMUr2MNgxKCwqroQXC.png" },
//   { id: 6, title: "Golden Floral Wall Clock", price: 9500, category: "clock", img: "https://adastrajewelry.com/admin/admin/ckeditor/uploads/resin5.webp" },
//  { id: 6, title: "Golden Floral Wall Clock", price: 9500, category: "clock", img: "https://smithandtrade.com/cdn/shop/files/c6dc3lqzqkcwitkkritw.jpg?v=1721184370" },

// ];

// export default function Shop() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // Live + Realtime data from Supabase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await supabase
//         .from("flower_products")
//         .select("*")
//         .order("created_at", { ascending: false });
//       setProducts(data || []);
//       setLoading(false);
//     };

//     fetchProducts();

//     // Realtime updates — admin add karega to turant dikhega!
//     const channel = supabase
//       .channel("flower_products")
//       .on("postgres_changes", { event: "*", schema: "public", table: "flower_products" }, () => {
//         fetchProducts();
//       })
//       .subscribe();

//     // Hero image cycle
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
//     }, 4000);

//     return () => {
//       supabase.removeChannel(channel);
//       clearInterval(interval);
//     };
//   }, []);

//   const filteredProducts = products.filter(p =>
//     p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     p.category?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-rose-50">
//         <p className="text-3xl font-bold text-purple-600 animate-pulse">Loading your beautiful products...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
//       <Navbar />

//       {/* GORGEOUS HERO SECTION */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div key={currentImageIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.8 }}>
//             <img src={heroImages[currentImageIndex].url} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
//           </motion.div>
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             Gilded Petals Shop
//           </motion.h1>
//           <motion.p className="text-2xl text-white/90 mt-4 font-light">
//             Handcrafted Resin Art • Made with Love in Pakistan
//           </motion.p>

//           {/* Search in Hero */}
//           <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="mt-10 max-w-2xl mx-auto">
//             <div className="relative">
//               <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/70" />
//               <Input
//                 placeholder="Search plaques, earrings, trays..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-16 py-8 rounded-full bg-white/20 backdrop-blur-xl text-white placeholder-white/70 border-white/30"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* LIVE PRODUCTS FROM ADMIN */}
//       <section className="container mx-auto px-6 py-24 -mt-20 relative z-10">
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-3xl text-gray-600 py-20">No products found</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//             {filteredProducts.map((product, i) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 onHoverStart={() => setHoveredId(product.id)}
//                 onHoverEnd={() => setHoveredId(null)}
//                 className="group"
//               >
//                 <motion.div whileHover={{ y: -20 }} className="bg-white rounded-3xl overflow-hidden shadow-2xl">
//                   <div className="aspect-square relative overflow-hidden">
//                     <img
//                       src={product.image_url || product.img || "/placeholder.jpg"}
//                       alt={product.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <motion.div
//                       animate={{ opacity: hoveredId === product.id ? 0.4 : 0 }}
//                       className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/40 to-transparent"
//                     />
//                     {hoveredId === product.id && (
//                       <>
//                         <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-2xl">
//                           <Heart className="h-7 w-7 text-pink-600 fill-pink-600" />
//                         </motion.div>
//                         <Sparkles className="absolute top-10 left-8 h-10 w-10 text-yellow-300 animate-pulse" />
//                       </>
//                     )}
//                   </div>

//                   <div className="p-6 bg-gradient-to-b from-white to-purple-50">
//                     <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
//                     <div className="flex items-center justify-between mt-4">
//                       <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                         Rs. {Number(product.price).toLocaleString()}
//                       </span>
//                       <Button
//                         onClick={() => window.open(`https://wa.me/923452178023?text=I'm interested in: ${encodeURIComponent(product.title)} - Rs.${product.price}`, "_blank")}
//                         className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full px-6 py-3 shadow-xl"
//                       >
//                         <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
//                       </Button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }
































// wroking code with live data or product from admin plus tumhare products

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Heart, ShoppingBag, Sparkles, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabaseClient";

// const heroImages = [
//   { id: 1, url: "https://i.postimg.cc/hGz6Bzvp/Gemini-Generated-Image-8qptwl8qptwl8qpt.png" },
//   { id: 2, url: "https://bookhero.co.nz/cdn/shop/files/26086363482702.jpg?v=1759203866&width=640" },
//   { id: 3, url: "https://i.pinimg.com/736x/56/d7/a7/56d7a736190973f64695565884dbaa46.jpg" },
//   { id: 4, url: "https://i.postimg.cc/7Ycgbftw/Screenshot-2025-11-27-174641.jpg" },
// ];

// // TUMHARE SAB PRODUCTS — YE HAMESHA DIKHEGA
// const myProducts = [
//   { id: "local-1", title: "Eternal Love Nikkah Plaque", price: 8500, category: "plaque", img: "https://static.wixstatic.com/media/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg" },
//   { id: "local-2", title: "Preserved Rose Gold Earrings", price: 4500, category: "jewellery", img: "https://i.postimg.cc/xdvLJFVt/Screenshot-2025-11-26-001624.jpg" },
//   { id: "local-3", title: "Ocean Wave Coasters Set", price: 4800, category: "coasters", img: "https://i.postimg.cc/SRMSR3wp/Screenshot-2025-11-26-001854.jpg" },
//   { id: "local-4", title: "Galaxy Resin Vanity Tray", price: 7200, category: "tray", img: "https://i.postimg.cc/s2xvy6D2/Screenshot-2025-11-26-002029.jpg" },
//   { id: "local-5", title: "Baby Name Welcome Plaque", price: 5800, category: "plaque", img: "https://i.imgur.com/5pL9mQw.jpeg" },
//   { id: "local-6", title: "Golden Floral Wall Clock", price: 9500, category: "clock", img: "https://smithandtrade.com/cdn/shop/files/c6dc3lqzqkcwitkkritw.jpg?v=1721184370" },
//   // Aur jitne chahe add kar sakti ho
// ];

// export default function Shop() {
//   const [adminProducts, setAdminProducts] = useState<any[]>([]); // Sirf admin wale
//   const [searchTerm, setSearchTerm] = useState("");
//   const [hoveredId, setHoveredId] = useState<string | number | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Admin se live data laao
//     async function getAdminProducts() {
//       const { data } = await supabase
//         .from("flower_products")
//         .select("*")
//         .order("created_at", { ascending: false });

//       setAdminProducts(data || []);
//       setLoading(false);
//     }

//     getAdminProducts();

//     // Realtime — admin add karega to turant dikhega
//     const channel = supabase
//       .channel("realtime-shop")
//       .on("postgres_changes", { event: "*", schema: "public", table: "flower_products" }, () => {
//         getAdminProducts();
//       })
//       .subscribe();

//     // Hero cycle
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
//     }, 4000);

//     return () => {
//       supabase.removeChannel(channel);
//       clearInterval(interval);
//     };
//   }, []);

//   // FINAL LIST = Admin products + Tumhare products
//   const allDisplayedProducts = [...adminProducts, ...myProducts];

//   const filteredProducts = allDisplayedProducts.filter(product =>
//     product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.category?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
//       <Navbar />

//       {/* SAME HERO */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImageIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.8 }}
//             className="absolute inset-0"
//           >
//             <img src={heroImages[currentImageIndex].url} alt="hero" className="w-full h-full object-cover" />
//           </motion.div>
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//           <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Gilded Petals Shop
//           </motion.h1>
//           <motion.p className="text-xl md:text-3xl text-white/90 mt-4">
//             The Keychain Lab & Jewellery • Handcrafted with Love
//           </motion.p>
//           <motion.div className="mt-10 max-w-2xl mx-auto">
//             <div className="relative">
//               <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/70" />
//               <Input
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 className="pl-16 py-8 rounded-full bg-white/20 backdrop-blur-xl text-white"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* PRODUCTS — ADMIN + TUMHARE DONO DIKHEGA */}
//       <section className="container mx-auto px-6 py-24 -mt-20">
//         {loading && adminProducts.length === 0 ? (
//           <p className="text-center text-3xl text-purple-600 py-20">Loading live products...</p>
//         ) : filteredProducts.length === 0 ? (
//           <p className="text-center text-3xl text-gray-500 py-20">No products found</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//             {filteredProducts.map((product, i) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 onHoverStart={() => setHoveredId(product.id)}
//                 onHoverEnd={() => setHoveredId(null)}
//                 className="group"
//               >
//                 <motion.div whileHover={{ y: -20 }} className="bg-white rounded-3xl overflow-hidden shadow-2xl">
//                   <div className="aspect-square relative overflow-hidden">
//                     <motion.img
//                       src={product.image_url || product.img || product.image}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.15 }}
//                     />
//                     <motion.div
//                       animate={{ opacity: hoveredId === product.id ? 0.5 : 0 }}
//                       className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/40 to-transparent"
//                     />
//                     {hoveredId === product.id && (
//                       <>
//                         <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-2xl">
//                           <Heart className="h-7 w-7 text-pink-600 fill-pink-600" />
//                         </motion.div>
//                         <Sparkles className="absolute top-10 left-8 h-10 w-10 text-yellow-300 animate-pulse" />
//                       </>
//                     )}
//                   </div>
//                   <div className="p-6 bg-gradient-to-b from-white to-purple-50">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{product.title}</h3>
//                     <div className="flex justify-between items-center">
//                       <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                         Rs. {Number(product.price).toLocaleString()}
//                       </span>
//                       <Button
//                         onClick={() => window.open(`https://wa.me/923452178023?text=I'm%20interested%20in:%20${encodeURIComponent(product.title)}%20-%20Rs.${product.price}`, "_blank")}
//                         className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6"
//                       >
//                         <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
//                       </Button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }



















// src/app/shop/page.tsx  ← PURA REPLACE KAR DO

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingBag, Sparkles, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const heroImages = [
  { id: 1, url: "https://i.postimg.cc/hGz6Bzvp/Gemini-Generated-Image-8qptwl8qptwl8qpt.png" },
  { id: 2, url: "https://bookhero.co.nz/cdn/shop/files/26086363482702.jpg?v=1759203866&width=640" },
  { id: 3, url: "https://i.pinimg.com/736x/56/d7/a7/56d7a736190973f64695565884dbaa46.jpg" },
  { id: 4, url: "https://i.postimg.cc/7Ycgbftw/Screenshot-2025-11-27-174641.jpg" },
];

// TUMHARE PRODUCTS — HAMESHA SABSE UPAR DIKHEGA
const myProducts = [
  { id: "my-1", title: "Eternal Love Nikkah Plaque", price: 500, category: "plaque", img: "https://static.wixstatic.com/media/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6fca26_7794a3438bc249e6a711f0783c3af9b5~mv2.jpeg" },
  { id: "my-2", title: "Preserved Rose Gold Earrings", price: 500, category: "jewellery", img: "https://i.postimg.cc/xdvLJFVt/Screenshot-2025-11-26-001624.jpg" },
  { id: "my-3", title: "Ocean Wave Coasters Set (3 pcs)", price: 750, category: "coasters", img: "https://i.postimg.cc/SRMSR3wp/Screenshot-2025-11-26-001854.jpg" },
  { id: "my-4", title: "Galaxy Resin Vanity Tray", price: 750, category: "tray", img: "https://i.postimg.cc/s2xvy6D2/Screenshot-2025-11-26-002029.jpg" },
  { id: "my-5", title: "Baby Name Welcome Plaque", price: 900, category: "plaque", img: "https://i.postimg.cc/hjBSgqV2/Gemini-Generated-Image-nnuie2nnuie2nnui.png" },
  { id: "my-6", title: "Golden Floral Wall Clock", price: 500, category: "clock", img: "https://smithandtrade.com/cdn/shop/files/c6dc3lqzqkcwitkkritw.jpg?v=1721184370" },
];

export default function Shop() {
  const [adminProducts, setAdminProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdminProducts() {
      const { data } = await supabase
        .from("flower_products")
        .select("*")
        .order("created_at", { ascending: false });

      setAdminProducts(data || []);
      setLoading(false);
    }

    fetchAdminProducts();

    // Realtime — admin add karega to turant update ho jayega
    const channel = supabase
      .channel("shop-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "flower_products" }, () => {
        fetchAdminProducts();
      })
      .subscribe();

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, []);

  // TUMHARE PRODUCTS UPAR + ADMIN KE PRODUCTS NEECHE
  const allProducts = [...myProducts, ...adminProducts];

  const filteredProducts = allProducts.filter(product =>
    (product.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.category || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img src={heroImages[currentImageIndex].url} alt="Hero" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gilded Petals Shop
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mt-4 font-light tracking-wide drop-shadow-lg"
          >
            The Keychain Lab & Jewellery • Handcrafted Resin Art • Made with Love in Pakistan
          </motion.p>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/70" />
              <Input
                placeholder="Search products... (plaque, earrings, tray...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-16 pr-8 py-8 text-lg rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-white/40 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="container mx-auto px-6 py-24">
        {loading && adminProducts.length === 0 ? (
          <p className="text-center text-3xl font-bold text-purple-600 py-32">Loading beautiful products...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-3xl text-gray-500 py-32">No products found for "{searchTerm}"</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredId(product.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group"
              >
                <motion.div whileHover={{ y: -20 }} className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-square relative overflow-hidden">
                    <motion.img
                      src={product.image_url || product.img || "/placeholder.jpg"}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.div
                      animate={{ opacity: hoveredId === product.id ? 0.5 : 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/40 to-transparent"
                    />
                    {hoveredId === product.id && (
                      <>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-2xl">
                          <Heart className="h-7 w-7 text-pink-600 fill-pink-600" />
                        </motion.div>
                        <Sparkles className="absolute top-10 left-8 h-10 w-10 text-yellow-300 animate-pulse" />
                      </>
                    )}
                  </div>

                  <div className="p-6 bg-gradient-to-b from-white to-purple-50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{product.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Rs. {Number(product.price).toLocaleString()}
                      </span>
                      <Button
                        onClick={() => window.open(`https://wa.me/923452178023?text=I'm%20interested%20in:%20${encodeURIComponent(product.title)}%20-%20Rs.${product.price}`, "_blank")}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full px-6 py-3 shadow-xl"
                      >
                        <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}