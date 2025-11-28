import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({ product, index, hoveredId, setHoveredId }) => {
    return (
        <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredId(product.id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group"
        >
            <motion.div
                whileHover={{ y: -25, rotate: 2 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
                <div className="aspect-square overflow-hidden relative">
                    <motion.img
                        src={product.image_url || "/api/placeholder/400/400"} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.9 }}
                    />
                    
                    {/* Magic Glow */}
                    <motion.div
                        animate={{ opacity: hoveredId === product.id ? 0.6 : 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-transparent"
                    />

                    {/* Floating Heart + Sparkles */}
                    {hoveredId === product.id && (
                        <>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-4 right-4 bg-white rounded-full p-4 shadow-2xl"
                            >
                                <Heart className="h-7 w-7 text-pink-600 fill-pink-600" />
                            </motion.div>
                            <Sparkles className="absolute top-10 left-8 h-10 w-10 text-yellow-300 animate-pulse" />
                            <Sparkles className="absolute bottom-16 right-10 h-8 w-8 text-yellow-300 animate-pulse delay-300" />
                        </>
                    )}
                </div>

                <div className="p-6 bg-gradient-to-b from-white to-purple-50">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
                    <div className="flex items-center justify-between mt-6">
                        <motion.span 
                            animate={{ scale: hoveredId === product.id ? 1.15 : 1 }}
                            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                        >
                            Rs. {Number(product.price).toLocaleString()}
                        </motion.span>

                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                onClick={() => window.open(`https://wa.me/923452178023?text=Assalam%20o%20Alaikum!%20I'm%20interested%20in:%20${encodeURIComponent(product.title)}%20-%20Rs.${product.price}`, "_blank")}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full px-6 py-3 shadow-xl"
                            >
                                <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProductCard;