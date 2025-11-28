// src/pages/Payment.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Payment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Payment Methods
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* JazzCash */}
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <div className="text-6xl mb-6">JazzCash</div>
            <div className="bg-green-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl">JazzCash</span>
            </div>
            <p className="text-2xl font-bold mb-4">JazzCash Number</p>
            <p className="text-3xl font-bold text-green-600">0345-2178023</p>
            <p className="text-lg mt-4 text-gray-600">Name: Your Full Name</p>
            <p className="text-sm text-gray-500 mt-6">Payment karne ke baad screenshot WhatsApp pe bhej dein</p>
          </div>

          {/* Bank Transfer */}
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <div className="text-6xl mb-6">Bank</div>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">Bank Name</p>
                <p className="text-xl">Meezan Bank / HBL / UBL</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Account Title</p>
                <p className="text-xl">Your Full Name</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Account Number / IBAN</p>
                <p className="text-2xl font-bold text-purple-600">PK00XXXX XXXX XXXX XXXX XXXX</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-8">Screenshot WhatsApp pe bhej dein</p>
          </div>

        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Order Place Karne Ka Tareeka</h2>
          <ol className="text-left text-lg space-y-3 max-w-2xl mx-auto">
            <li>1. Product pasand karein (Shop ya Custom Order form bhar dein)</li>
            <li>2. Payment JazzCash ya Bank mein kar dein</li>
            <li>3. Screenshot + apna name/address WhatsApp pe bhej dein → <strong>0345-2178023</strong></li>
            <li>4. Order confirm ho jayega aur banne shuru ho jayega!</li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <a href="https://wa.me/923452178023" className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full text-xl font-bold">
            Order Place Karein WhatsApp Pe
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}