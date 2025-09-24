import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import { Order } from '../types';
import { useAuth } from '../context/AuthContext';
import { format } from 'date-fns';

const Orders: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      const allOrders = JSON.parse(localStorage.getItem('leeza_orders') || '[]');
      const userOrders = allOrders.filter((order: Order) => order.userId === user.id);
      setOrders(userOrders.sort((a: Order, b: Order) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ));
    }
  }, [user]);

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case 'ready':
        return <Package className="w-5 h-5 text-green-500" />;
      case 'delivered':
        return <Truck className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-blue-100 text-blue-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'delivered':
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to view orders</h2>
          <Link to="/login" className="text-pink-500 hover:text-pink-600 font-medium">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You haven't placed any orders yet. Start browsing our delicious cakes!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300 group"
            >
              <span>Browse Cakes</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Order Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order #{order.id.slice(-8)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Placed on {format(new Date(order.createdAt), 'PPP')}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    <span className="flex items-center space-x-1">
                      {getStatusIcon(order.status)}
                      <span className="capitalize">{order.status}</span>
                    </span>
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      ₨{order.total.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {order.items.reduce((sum, item) => sum + item.quantity, 0)} items
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="flex items-center space-x-4 mb-4">
                {order.items.slice(0, 3).map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                ))}
                {order.items.length > 3 && (
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-600">+{order.items.length - 3}</span>
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {order.items[0].name}
                    {order.items.length > 1 && ` and ${order.items.length - 1} more`}
                  </p>
                  <p className="text-sm text-gray-600">
                    Delivery: {order.deliveryDate} • {order.deliveryTime}
                  </p>
                </div>
              </div>

              {/* Order Actions */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-gray-600">
                  <span className="capitalize">{order.paymentMethod.replace('_', ' ')}</span>
                  {order.specialNotes && ' • Special instructions included'}
                </div>
                <div className="flex space-x-3">
                  <button className="text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors duration-300">
                    View Details
                  </button>
                  {order.status === 'delivered' && (
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors duration-300">
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300 group"
          >
            <span>Order More Cakes</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;