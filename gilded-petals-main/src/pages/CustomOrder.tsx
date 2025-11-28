// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Upload } from "lucide-react";

// const CustomOrder = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
      
//       {/* Page Header */}
//       <section className="bg-gradient-soft py-16 border-b border-border">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
//             Create Your Custom Piece
//           </h1>
//           <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto animate-fade-in">
//             Let's bring your vision to life. Fill out the form below and we'll create something uniquely yours
//           </p>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in">
//               <form className="space-y-6">
//                 {/* Personal Information */}
//                 <div className="space-y-4">
//                   <h3 className="font-heading text-2xl font-semibold mb-4">Your Information</h3>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="name">Full Name *</Label>
//                       <Input id="name" placeholder="Enter your name" required />
//                     </div>
//                     <div>
//                       <Label htmlFor="phone">WhatsApp Number *</Label>
//                       <Input id="phone" type="tel" placeholder="+92 300 1234567" required />
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="email">Email Address *</Label>
//                     <Input id="email" type="email" placeholder="your@email.com" required />
//                   </div>
//                 </div>

//                 {/* Order Details */}
//                 <div className="space-y-4 pt-6 border-t border-border/50">
//                   <h3 className="font-heading text-2xl font-semibold mb-4">Order Details</h3>
                  
//                   <div>
//                     <Label htmlFor="product-type">Product Type *</Label>
//                     <Select>
//                       <SelectTrigger id="product-type">
//                         <SelectValue placeholder="Select product type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="plaque">Custom Plaque</SelectItem>
//                         <SelectItem value="jewellery">Preserved Flower Jewellery</SelectItem>
//                         <SelectItem value="coasters">Coasters Set</SelectItem>
//                         <SelectItem value="tray">Vanity Tray</SelectItem>
//                         <SelectItem value="other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div>
//                     <Label htmlFor="color-theme">Color Theme *</Label>
//                     <Input id="color-theme" placeholder="e.g., Rose pink and gold" required />
//                   </div>

//                   <div>
//                     <Label htmlFor="text">Custom Text / Names</Label>
//                     <Input id="text" placeholder="e.g., Sarah & Ahmed" />
//                   </div>

//                   <div>
//                     <Label htmlFor="instructions">Special Instructions</Label>
//                     <Textarea
//                       id="instructions"
//                       placeholder="Tell us about your vision, any specific requirements, or inspiration..."
//                       rows={5}
//                     />
//                   </div>
//                 </div>

//                 {/* Image Upload */}
//                 <div className="space-y-4 pt-6 border-t border-border/50">
//                   <h3 className="font-heading text-2xl font-semibold mb-4">Reference Images</h3>
                  
//                   <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-smooth cursor-pointer">
//                     <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
//                     <p className="font-body text-muted-foreground mb-2">
//                       Click to upload or drag and drop
//                     </p>
//                     <p className="font-body text-sm text-muted-foreground">
//                       Upload images for inspiration or preserved flowers
//                     </p>
//                     <Input type="file" multiple className="hidden" />
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="pt-6">
//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-lg py-6"
//                   >
//                     Submit Custom Order Request
//                   </Button>
//                   <p className="font-body text-sm text-muted-foreground text-center mt-4">
//                     We'll review your request and get back to you within 24 hours
//                   </p>
//                 </div>
//               </form>
//             </div>

//             {/* Processing Info */}
//             <div className="mt-8 glass rounded-2xl p-6 animate-fade-in">
//               <h4 className="font-heading text-lg font-semibold mb-3">Processing Timeline</h4>
//               <ul className="font-body text-muted-foreground space-y-2">
//                 <li>✨ Standard custom orders: 12-18 business days</li>
//                 <li>🌸 Preserved flower orders: 20-30 business days</li>
//                 <li>📦 Shipping time: 3-5 business days (domestic)</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default CustomOrder;






// add what'sapp 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useState } from "react";

const CustomOrder = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState("");
  const [colorTheme, setColorTheme] = useState("");
  const [customText, setCustomText] = useState("");
  const [instructions, setInstructions] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Image upload handle
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);

      // Create preview URLs
      const previews = files.map(file => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  // Form submit → WhatsApp pe jayega
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !productType || !colorTheme) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    let message = `NEW CUSTOM ORDER REQUEST

Name: ${name}
WhatsApp: ${phone}
Email: ${email}
Product Type: ${productType}
Color Theme: ${colorTheme}
Custom Text: ${customText || "None"}
Special Instructions: ${instructions || "None"}

Reference Images Attached: ${images.length > 0 ? images.length + " image(s)" : "No images uploaded"}
`;

    // Add note about images
    if (images.length > 0) {
      message += "\nCustomer has uploaded reference images. They will send them directly on WhatsApp.";
    }

    const whatsappUrl = `https://wa.me/923452178023?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setName(""); setPhone(""); setEmail(""); setProductType(""); setColorTheme(""); setCustomText(""); setInstructions("");
    setImages([]); setImagePreviews([]);
    setLoading(false);

    alert("Form submitted! Ab customer apni images directly WhatsApp pe bhej dega!");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-soft py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
            Create Your Custom Piece
          </h1>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto animate-fade-in">
            Let's bring your vision to life. Fill out the form below and we'll create something uniquely yours
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-heading text-2xl font-semibold mb-4">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label htmlFor="name">Full Name *</Label><Input id="name" value={name} onChange={e => setName(e.target.value)} required /></div>
                    <div><Label htmlFor="phone">WhatsApp Number *</Label><Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required /></div>
                  </div>
                  <div><Label htmlFor="email">Email Address *</Label><Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
                </div>

                {/* Order Details */}
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="font-heading text-2xl font-semibold mb-4">Order Details</h3>
                  <div>
                    <Label>Product Type *</Label>
                    <Select value={productType} onValueChange={setProductType}>
                      <SelectTrigger><SelectValue placeholder="Select product type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Custom Plaque">Custom Plaque</SelectItem>
                        <SelectItem value="Preserved Flower Jewellery">Preserved Flower Jewellery</SelectItem>
                        <SelectItem value="Coasters Set">Coasters Set</SelectItem>
                        <SelectItem value="Vanity Tray">Vanity Tray</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div><Label>Color Theme *</Label><Input value={colorTheme} onChange={e => setColorTheme(e.target.value)} placeholder="e.g., Rose pink and gold" required /></div>
                  <div><Label>Custom Text / Names</Label><Input value={customText} onChange={e => setCustomText(e.target.value)} placeholder="e.g., Sarah & Ahmed" /></div>
                  <div><Label>Special Instructions</Label><Textarea value={instructions} onChange={e => setInstructions(e.target.value)} rows={5} /></div>
                </div>

                {/* Image Upload - AB PROPERLY KAAM KAREGA */}
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="font-heading text-2xl font-semibold mb-4">Reference Images</h3>
                  <label htmlFor="image-upload" className="block">
                    <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="font-body text-muted-foreground mb-2">Click to upload images</p>
                      <p className="font-body text-sm text-muted-foreground">Max 5 images (customer will send on WhatsApp)</p>
                    </div>
                    <Input
                      id="image-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>

                  {/* Image Previews */}
                  {imagePreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {imagePreviews.map((preview, i) => (
                        <img key={i} src={preview} alt="Preview" className="w-full h-32 object-cover rounded-lg shadow-md" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-lg py-6"
                  >
                    {loading ? "Opening WhatsApp..." : "Submit via WhatsApp"}
                  </Button>
                  <p className="font-body text-sm text-muted-foreground text-center mt-4">
                    We'll contact you on WhatsApp within 24 hours
                  </p>
                </div>
              </form>
            </div>

            {/* Processing Info */}
            <div className="mt-8 glass rounded-2xl p-6 animate-fade-in">
              <h4 className="font-heading text-lg font-semibold mb-3">Processing Timeline</h4>
              <ul className="font-body text-muted-foreground space-y-2">
                <li>Standard custom orders: 12-18 business days</li>
                <li>Preserved flower orders: 20-30 business days</li>
                <li>Shipping time: 3-5 business days (domestic)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomOrder;
