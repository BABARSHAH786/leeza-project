import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chocolate Fudge Cake',
    description: 'Rich, moist chocolate cake with layers of creamy fudge frosting and chocolate ganache drizzle',
    basePrice: 2500,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'chocolate',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Dark Chocolate', 'Milk Chocolate', 'White Chocolate']
  },
  {
    id: '2',
    name: 'Red Velvet Delight',
    description: 'Classic red velvet cake with cream cheese frosting, perfectly balanced sweet and tangy flavors',
    basePrice: 2800,
    image: 'https://images.pexels.com/photos/1721161/pexels-photo-1721161.jpeg',
    category: 'classic',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Classic Red Velvet', 'Strawberry Red Velvet', 'Cherry Red Velvet']
  },
  {
    id: '3',
    name: 'Vanilla Dream Cake',
    description: 'Light and fluffy vanilla sponge with vanilla buttercream and fresh berry compote',
    basePrice: 2200,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    category: 'vanilla',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Pure Vanilla', 'French Vanilla', 'Vanilla Bean']
  },
  {
    id: '4',
    name: 'Lemon Zest Cake',
    description: 'Fresh lemon cake with lemon curd filling and zesty lemon buttercream frosting',
    basePrice: 2600,
    image: 'https://images.pexels.com/photos/1721163/pexels-photo-1721163.jpeg',
    category: 'citrus',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Lemon', 'Lemon Mint', 'Lemon Raspberry']
  },
  {
    id: '5',
    name: 'Strawberry Shortcake',
    description: 'Fluffy vanilla sponge layered with fresh strawberries and whipped cream',
    basePrice: 2700,
    image: 'https://images.pexels.com/photos/1721162/pexels-photo-1721162.jpeg',
    category: 'fruit',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Fresh Strawberry', 'Strawberry Chocolate', 'Strawberry Vanilla']
  },
  {
    id: '6',
    name: 'Black Forest Cake',
    description: 'Chocolate sponge with cherries, kirsch, and whipped cream - a German classic',
    basePrice: 3200,
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg',
    category: 'specialty',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Traditional', 'Cherry Chocolate', 'Dark Cherry']
  }
];