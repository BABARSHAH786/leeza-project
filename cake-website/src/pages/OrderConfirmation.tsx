import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Order } from '../types';
import { format } from 'date-fns';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const order = location.state?.order as Order;

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order not found</h2>
          <Link to="/" className="text-pink-500 hover:text-pink-600 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your order. We've received your request and will start preparing your delicious cake!
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Order Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Order ID:</span>
                <div className="font-mono font-medium">{order.id}</div>
              </div>
              <div>
                <span className="text-gray-600">Order Date:</span>
                <div className="font-medium">{format(new Date(order.createdAt), 'PPpp')}</div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Customer Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{order.customerName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="font-medium">{order.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="font-medium">{order.phone}</span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Delivery Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{order.deliveryDate} • {order.deliveryTime}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span>{order.deliveryAddress}</span>
              </div>
              {order.specialNotes && (
                <div className="flex items-start space-x-2">
                  <span className="text-gray-600 flex-shrink-0">Notes:</span>
                  <span className="italic">{order.specialNotes}</span>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Order Items</h3>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.size} • {item.flavor}</p>
                    {item.customMessage && (
                      <p className="text-sm text-pink-600 italic">Message: "{item.customMessage}"</p>
                    )}
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="font-medium text-gray-900">
                    ₨{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Summary */}
          <div className="border-t pt-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₨{(order.total - 200).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₨200</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-2">
                <span>Total</span>
                <span>₨{order.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium capitalize">
                  {order.paymentMethod.replace('_', ' ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status and Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">What Happens Next?</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-pink-600">1</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Order Confirmation</div>
                <div className="text-sm text-gray-600">We'll send you an email confirmation shortly</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-600">2</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Preparation</div>
                <div className="text-sm text-gray-600">Our bakers will start preparing your cake</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-600">3</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Delivery</div>
                <div className="text-sm text-gray-600">We'll deliver your cake at the scheduled time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/orders"
            className="flex-1 bg-pink-500 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300"
          >
            View Order History
          </Link>
          <Link
            to="/products"
            className="flex-1 bg-gray-200 text-gray-900 text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Order More Cakes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Questions about your order? Contact us:</p>
          <p className="font-medium">
            <span className="inline-flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+92 333 504 8593</span>
            </span>
            {' • '}
            <span className="inline-flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>leezasarwar0@gmail.com</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;