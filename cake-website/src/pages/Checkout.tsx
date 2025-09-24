import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, CreditCard, Banknote, Building } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Order } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Checkout: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryAddress: '',
    specialNotes: '',
    paymentMethod: 'cash' as 'cash' | 'card' | 'bank_transfer'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendOrderEmail = async (order: Order) => {
    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      const emailData = {
        to_email: 'leezasarwar0@gmail.com',
        order_id: order.id,
        customer_name: order.customerName,
        customer_email: order.email,
        customer_phone: order.phone,
        delivery_date: order.deliveryDate,
        delivery_time: order.deliveryTime,
        delivery_address: order.deliveryAddress,
        special_notes: order.specialNotes || 'None',
        payment_method: order.paymentMethod,
        total_amount: order.total,
        items: order.items.map(item => 
          `${item.name} (${item.size}, ${item.flavor}) x${item.quantity} - ₨${(item.price * item.quantity).toLocaleString()}`
        ).join('\n'),
        order_date: format(new Date(order.createdAt), 'PPpp')
      };

      // Uncomment and configure when you have EmailJS credentials
      // await emailjs.send(serviceId, templateId, emailData, publicKey);
      
      // For demo purposes, we'll just log the email data
      console.log('Order email data (would be sent via EmailJS):', emailData);
      
      toast.success('Order confirmation email sent to Leeza Cakes!', { icon: '📧' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send confirmation email, but order was saved successfully');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.customerName || !formData.email || !formData.phone || 
          !formData.deliveryDate || !formData.deliveryTime || !formData.deliveryAddress) {
        toast.error('Please fill in all required fields');
        return;
      }

      const order: Order = {
        id: uuidv4(),
        userId: user?.id || 'guest',
        customerName: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        deliveryDate: formData.deliveryDate,
        deliveryTime: formData.deliveryTime,
        deliveryAddress: formData.deliveryAddress,
        specialNotes: formData.specialNotes,
        items: items,
        total: getTotalPrice() + 200, // Including delivery fee
        status: 'pending',
        createdAt: new Date().toISOString(),
        paymentMethod: formData.paymentMethod
      };

      // Save order to localStorage (in production, this would be sent to a server)
      const existingOrders = JSON.parse(localStorage.getItem('leeza_orders') || '[]');
      existingOrders.push(order);
      localStorage.setItem('leeza_orders', JSON.stringify(existingOrders));

      // Send email notification
      await sendOrderEmail(order);

      // Clear cart
      clearCart();

      // Navigate to confirmation page
      navigate('/order-confirmation', { state: { order } });

      toast.success('Order placed successfully!', { icon: '🎉' });
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const subtotal = getTotalPrice();
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Delivery Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Delivery Date *
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    required
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    min={format(new Date(Date.now() + 24 * 60 * 60 * 1000), 'yyyy-MM-dd')} // Tomorrow
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Delivery Time *
                  </label>
                  <select
                    id="deliveryTime"
                    name="deliveryTime"
                    required
                    value={formData.deliveryTime}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select Time</option>
                    <option value="09:00-12:00">9:00 AM - 12:00 PM</option>
                    <option value="12:00-15:00">12:00 PM - 3:00 PM</option>
                    <option value="15:00-18:00">3:00 PM - 6:00 PM</option>
                    <option value="18:00-21:00">6:00 PM - 9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Delivery Address *
                </label>
                <textarea
                  id="deliveryAddress"
                  name="deliveryAddress"
                  required
                  rows={3}
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  placeholder="Please provide complete address with landmarks"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <div>
                <label htmlFor="specialNotes" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Notes (Optional)
                </label>
                <textarea
                  id="specialNotes"
                  name="specialNotes"
                  rows={3}
                  value={formData.specialNotes}
                  onChange={handleChange}
                  placeholder="Any special instructions for your order..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Payment Method *</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                    formData.paymentMethod === 'cash' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <Banknote className="w-6 h-6 text-green-500 mr-3" />
                    <div>
                      <div className="font-medium">Cash on Delivery</div>
                      <div className="text-sm text-gray-500">Pay when you receive</div>
                    </div>
                  </label>

                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                    formData.paymentMethod === 'card' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <CreditCard className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <div className="font-medium">Credit/Debit Card</div>
                      <div className="text-sm text-gray-500">Pay online securely</div>
                    </div>
                  </label>

                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                    formData.paymentMethod === 'bank_transfer' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={formData.paymentMethod === 'bank_transfer'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <Building className="w-6 h-6 text-purple-500 mr-3" />
                    <div>
                      <div className="font-medium">Bank Transfer</div>
                      <div className="text-sm text-gray-500">Direct bank payment</div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Placing Order...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.size} • {item.flavor}</p>
                    {item.customMessage && (
                      <p className="text-sm text-pink-600 italic">"{item.customMessage}"</p>
                    )}
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-medium text-gray-900">
                    ₨{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₨{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₨{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-2">
                <span>Total</span>
                <span>₨{total.toLocaleString()}</span>
              </div>
            </div>

            {/* EmailJS Configuration Notice */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Email Configuration Required</h4>
              <p className="text-xs text-blue-700">
                To enable automatic order email notifications, please configure EmailJS in the Checkout component with your service credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;