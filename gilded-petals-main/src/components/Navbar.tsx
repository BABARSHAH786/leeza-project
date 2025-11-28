// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, ShoppingCart, Heart, Search } from "lucide-react";
// import { cn } from "@/lib/utils";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/shop" },
//     { name: "Collections", path: "/collections" },
//     { name: "Custom Order", path: "/custom-order" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* Top Banner */}
//       <div className="bg-gradient-primary text-white py-2 text-center text-sm font-body">
//         <p className="animate-fade-in">
//           ✨ Normal Processing: 12-18 Days | Flower Preservation: 20-30 Days ✨
//         </p>
//       </div>

//       {/* Main Navbar */}
//       <nav
//         className={cn(
//           "sticky top-0 z-50 transition-all duration-300",
//           isScrolled
//             ? "bg-white/95 backdrop-blur-md shadow-md"
//             : "bg-transparent"
//         )}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2 group">
//               <div className="text-2xl md:text-3xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent transition-smooth group-hover:scale-105">
//                 Resin Art Studio
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="font-body text-foreground hover:text-primary transition-smooth relative group"
//                 >
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               ))}
//             </div>

//             {/* Right Icons */}
//             <div className="flex items-center space-x-4">
//               <Button variant="ghost" size="icon" className="hidden md:flex">
//                 <Search className="h-5 w-5" />
//               </Button>
//               <Button variant="ghost" size="icon">
//                 <Heart className="h-5 w-5" />
//               </Button>
//               <Button variant="ghost" size="icon" className="relative">
//                 <ShoppingCart className="h-5 w-5" />
//                 <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   0
//                 </span>
//               </Button>

//               {/* Mobile Menu Toggle */}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="md:hidden"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white border-t border-border animate-fade-in">
//             <div className="container mx-auto px-4 py-4 space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="block font-body text-foreground hover:text-primary transition-smooth py-2"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;





























import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Heart, Search, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabaseClient"; // ← ye line add ki

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // Check agar admin logged in hai
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "Custom Order", path: "/custom-order" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-primary text-white py-2 text-center text-sm font-body">
        <p className="animate-fade-in">
          ✨Normal Processing: 3-4 Days | Flower Preservation: 5-7 Days✨
        </p>
      </div>

      {/* Main Navbar */}
      <nav className={cn("sticky top-0 z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent")}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div  className="bg-gradient-primary text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition">
                Resin Art Studio
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="font-body text-foreground hover:text-primary transition-smooth relative group">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Admin Login / Panel */}
              {user?.user_metadata?.role === "admin" ? (
                <div className="flex items-center gap-3">
                  <Link to="/admin" className="bg-gradient-primary text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition">
                    Admin Panel
                  </Link>
                  <Button onClick={handleLogout} variant="ghost" size="sm">
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Link to="/admin-login" className="bg-gradient-primary text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition">
                  Admin Login
                </Link>
              )}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block font-body text-foreground hover:text-primary transition-smooth py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              {user?.user_metadata?.role === "admin" ? (
                <>
                  <Link to="/admin" className="block bg-gradient-primary text-white px-5 py-3 rounded-full text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                    Admin Panel
                  </Link>
                  <button onClick={handleLogout} className="w-full text-red-600 font-bold py-2">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/admin-login" className="block bg-gradient-primary text-white px-5 py-3 rounded-full text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;