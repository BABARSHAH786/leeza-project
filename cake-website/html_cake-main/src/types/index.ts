export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  category: string;
  sizes: {
    name: string;
    multiplier: number;
  }[];
  flavors: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  size: string;
  flavor: string;
  customMessage?: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isAdmin?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  email: string;
  phone: string;
  deliveryDate: string;
  deliveryTime: string;
  deliveryAddress: string;
  specialNotes?: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'accepted' | 'ready' | 'delivered';
  createdAt: string;
  paymentMethod: 'cash' | 'card' | 'bank_transfer';
}