import { Product } from '../types';

export const products: Product[] = [
{
  id: 'most-popular-1',
  name: 'Most Popular',
  description: 'Classic soft and fluffy vanilla sponge cake layered with smooth vanilla buttercream, offering a light and timeless flavor loved by everyone.',
  basePrice: 500,
  image: 'https://www.victoriayum.com/cdn/shop/products/IMG_2713_45d9b33a-ecc9-4672-adae-97d23a178c91_1024x1024.jpg?v=1678212399',
  category: 'Vanilla',
  sizes: [
    { name: 'Small (1lb)', multiplier: 1 },
    { name: 'Medium (2lb)', multiplier: 1.8 },
    { name: 'Large (3lb)', multiplier: 2.5 }
  ],
  flavors: ['Milk Chocolate', 'White Chocolate']
},

  {
    id: '1',
    name: 'Chocolate Fudge Cake',
    description: 'Rich, moist chocolate cake with layers of creamy fudge frosting and chocolate ganache drizzle',
    basePrice: 700,
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
    basePrice: 700,
    image: 'https://prashantcakes.com/wp-content/uploads/2025/01/Red-Velvet-Birthday-Cake-scaled.jpeg',
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
    basePrice: 700,
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
    name: 'Triple Layer Chocolate cake ',
    description: 'Rich, moist chocolate sponge layered with smooth ganache and finished with a glossy chocolate glaze.',
    basePrice: 800,
    image: 'https://www.lalschocolates.com/cdn/shop/products/triple-layer_grande.jpg?v=1686309534',
    category: 'citrus',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Classic Dark Chocolate','Milk Chocolate','Hazelnut Chocolate','Mocha Chocolate','Mint Chocolate','Orange Chocolate']
  },
  {
    id: '5',
    name: 'Strawberry Shortcake',
    
    description: 'Fluffy vanilla sponge layered with fresh strawberries and whipped cream ONLY STRAWBERRY ',
    basePrice: 700,
    image: 'https://www.crazyforcrust.com/wp-content/uploads/2025/03/strawberry-shortcake-cake-12.jpg',
    category: 'fruit',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Fresh Strawberry (Seasonal) 🍓', 'Strawberry Chocolate', 'Strawberry Vanilla']
  },
  {
    id: '6',
    name: 'Black Forest Cake',
    description: 'Chocolate sponge with cherries, kirsch, and whipped cream - a German classic',
    basePrice: 700,
    image: 'https://www.onlinedelivery.in/images/detailed/33/Chocolate-Cake-Five-Star-A.jpg',
    category: 'specialty',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Traditional', 'Cherry Chocolate', 'Dark Cherry']
  },



  {
    id: '7',
    name: 'Mango Cake',
    description: 'Soft vanilla sponge layered with fresh mango puree and whipped cream, topped with juicy mango slices — a tropical delight for mango lovers. 🥭',
    basePrice: 700,
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg',
    category: 'specialty',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Traditional', 'Cherry Chocolate', 'Dark Cherry']
  },



  {
    id: '8',
    name: 'German Fudge Cake',
    description: 'Rich layers of chocolate fudge cake with coconut-pecan frosting. 🍫',
    basePrice: 700,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BLprYLFdMpdltz3H7_GFmAm6WYE1YR43Rg&s',
    category: 'premium',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Chocolate', 'Walnut Fudge']
  },
  {
    id: '9',
    name: 'Lotus Cake',
    description: 'Soft sponge layered with Biscoff spread, cream, and crunchy Lotus biscuits. 🍪',
    basePrice: 800,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHDvpMWfsf3QpLDMx8Nl218Gp0A0yyeHXjRK0dMsj66jpF64ggm6hLu8shhAlQuh2Ur4&usqp=CAU',
    category: 'trending',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Classic Lotus', 'Lotus Chocolate']
  },
  {
    id: '10',
    name: 'Nutella Cake',
    description: 'Chocolate sponge filled with creamy Nutella and topped with hazelnuts. 🍫🌰',
    basePrice: 700,
    image: 'https://richanddelish.com/wp-content/uploads/2024/01/nutella-cake-2.jpg',
    category: 'specialty',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Nutella Classic', 'Nutella Hazelnut']
  },
  {
    id: '11',
    name: 'Chocolate Fudge Cake',
    description: 'Dense and moist chocolate cake topped with silky fudge frosting. 🍫',
    basePrice: 700,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsg3VaaWM2xP9IiWTB7f7R05NixBxylLDqvOrzAUhcPo6Lavo_pefXm--eN0FLb7Grg0&usqp=CAU',
    category: 'classic',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Classic Chocolate', 'Dark Fudge']
  },
  
  {
    id: '12',
    name: 'Pineapple Cake',
    description: 'Light vanilla sponge layered with pineapple chunks and cream. 🍍',
    basePrice: 800,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-r9VdMLfotKcabXrbiWlOVi6Cmm64UeHug&s',
    category: 'classic',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Pineapple Classic']
  },
  {
    id: '13',
    name: 'Oreo Cake',
    description: 'Cookies and cream delight with Oreo crumble layers and frosting. 🍪',
    basePrice: 700,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7xeWomEeRg9h6dCnyWWZHhpwvrVOWcWypQ&s',
    category: 'trending',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Classic Oreo', 'Chocolate Oreo']
  },
  {
    id: '14',
    name: 'Coffee Caramel Cake',
    description: 'Moist coffee-flavored sponge layered with caramel cream frosting. ☕🍯',
    basePrice: 800,
    image: 'https://www.gillsbakesandcakes.com/wp-content/uploads/2021/04/caramelcale1-scaled.jpg',
    category: 'premium',
    sizes: [
      { name: 'Small (1lb)', multiplier: 1 },
      { name: 'Medium (2lb)', multiplier: 1.8 },
      { name: 'Large (3lb)', multiplier: 2.5 }
    ],
    flavors: ['Coffee Classic', 'Caramel Latte']
  },
 

];


