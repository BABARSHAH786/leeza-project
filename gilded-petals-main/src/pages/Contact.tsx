// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
      
//       {/* Page Header */}
//       <section className="bg-gradient-soft py-16 border-b border-border">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
//             Get In Touch
//           </h1>
//           <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto animate-fade-in">
//             Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="animate-fade-in">
//               <div className="glass rounded-3xl p-8">
//                 <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
//                 <form className="space-y-4">
//                   <div>
//                     <Label htmlFor="contact-name">Your Name *</Label>
//                     <Input id="contact-name" placeholder="Enter your name" required />
//                   </div>
                  
//                   <div>
//                     <Label htmlFor="contact-email">Email Address *</Label>
//                     <Input id="contact-email" type="email" placeholder="your@email.com" required />
//                   </div>

//                   <div>
//                     <Label htmlFor="contact-phone">Phone Number</Label>
//                     <Input id="contact-phone" type="tel" placeholder="+92 300 1234567" />
//                   </div>

//                   <div>
//                     <Label htmlFor="contact-subject">Subject *</Label>
//                     <Input id="contact-subject" placeholder="How can we help?" required />
//                   </div>

//                   <div>
//                     <Label htmlFor="contact-message">Message *</Label>
//                     <Textarea
//                       id="contact-message"
//                       placeholder="Tell us more about your inquiry..."
//                       rows={6}
//                       required
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
//                   >
//                     Send Message
//                   </Button>
//                 </form>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               {/* Contact Cards */}
//               <div className="glass rounded-3xl p-8">
//                 <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
//                       <Phone className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-heading font-semibold mb-1">Phone</h3>
//                       <p className="font-body text-muted-foreground">+92 300 1234567</p>
//                       <p className="font-body text-sm text-muted-foreground">Mon-Sat, 10am-7pm</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
//                       <Mail className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-heading font-semibold mb-1">Email</h3>
//                       <p className="font-body text-muted-foreground">hello@resinartstudio.com</p>
//                       <p className="font-body text-sm text-muted-foreground">We reply within 24 hours</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
//                       <MapPin className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-heading font-semibold mb-1">Location</h3>
//                       <p className="font-body text-muted-foreground">Lahore, Pakistan</p>
//                       <p className="font-body text-sm text-muted-foreground">Shipping nationwide</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
//                       <MessageCircle className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-heading font-semibold mb-1">WhatsApp</h3>
//                       <p className="font-body text-muted-foreground">Chat with us directly</p>
//                       <Button variant="link" className="p-0 h-auto font-body text-primary">
//                         Start Chat
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media */}
//               <div className="glass rounded-3xl p-8">
//                 <h2 className="font-heading text-2xl font-bold mb-6">Follow Us</h2>
//                 <p className="font-body text-muted-foreground mb-6">
//                   Stay connected for updates, new collections, and inspiration
//                 </p>
//                 <div className="flex space-x-4">
//                   <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-lift">
//                     <Instagram className="h-6 w-6" />
//                   </Button>
//                   <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-lift">
//                     <Facebook className="h-6 w-6" />
//                   </Button>
//                   <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-lift">
//                     <MessageCircle className="h-6 w-6" />
//                   </Button>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="glass rounded-3xl p-8">
//                 <h2 className="font-heading text-2xl font-bold mb-6">Business Hours</h2>
//                 <div className="space-y-3 font-body">
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Monday - Friday</span>
//                     <span className="font-semibold">10:00 AM - 7:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Saturday</span>
//                     <span className="font-semibold">11:00 AM - 5:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Sunday</span>
//                     <span className="font-semibold">Closed</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;






// // src/pages/Contact.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setLoading(true);
    const text = `New Message from Website!%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone || "N/A"}%0ASubject: ${subject}%0A%0AMessage:%0A${message}`;
    window.open(`https://wa.me/923452178023?text=${text}`, "_blank");

    // Reset
    setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-soft py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
            Get In Touch
          </h1>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto animate-fade-in">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="glass rounded-3xl p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><Label htmlFor="name">Your Name *</Label><Input id="name" value={name} onChange={e => setName(e.target.value)} required /></div>
                  <div><Label htmlFor="email">Email Address *</Label><Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
                  <div><Label htmlFor="phone">Phone Number</Label><Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} /></div>
                  <div><Label htmlFor="subject">Subject *</Label><Input id="subject" value={subject} onChange={e => setSubject(e.target.value)} required /></div>
                  <div><Label htmlFor="msg">Message *</Label><Textarea id="msg" rows={6} value={message} onChange={e => setMessage(e.target.value)} required /></div>

                  <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-primary hover:opacity-90">
                    {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
                  </Button>
                </form>
              </div>
            </div>

            {/* TERA ORIGINAL CONTACT INFORMATION — BILKUL SAME */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass rounded-3xl p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Phone</h3>
                      <p className="font-body text-muted-foreground">+92 345 2178023</p>
                      <p className="font-body text-sm text-muted-foreground">Mon-Sat, 10am-7pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Email</h3>
                      <p className="font-body text-muted-foreground">hello@gildedpetals.com</p>
                      <p className="font-body text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Location</h3>
                      <p className="font-body text-muted-foreground">Lahore, Pakistan</p>
                      <p className="font-body text-sm text-muted-foreground">Shipping nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">WhatsApp</h3>
                      <p className="font-body text-muted-foreground">Chat with us directly</p>
                      <Button variant="default"    
                      className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white"
                      onClick={() => window.open("https://wa.me/923452178023", "_blank")}>
                        <MessageCircle className="mr-2 h-5 w-5" /> Start Chat
                      </Button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Media & Business Hours — tera original wala */}
              <div className="glass rounded-3xl p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Follow Us</h2>
                <p className="font-body text-muted-foreground mb-6">
                  Stay connected for updates, new collections, and inspiration
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-lift"><Instagram className="h-6 w-6" /></Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-lift"><Facebook className="h-6 w-6" /></Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-lift"><MessageCircle className="h-6 w-6" /></Button>
                </div>
              </div>

              <div className="glass rounded-3xl p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-3 font-body">
                  <div className="flex justify-between"><span className="text-muted-foreground">Monday - Friday</span><span className="font-semibold">10:00 AM - 7:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span className="font-semibold">11:00 AM - 5:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-semibold">Closed</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;