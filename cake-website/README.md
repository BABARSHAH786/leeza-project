# Leeza Cakes - Premium Custom Cake Website

A full-featured e-commerce website for Leeza Cakes, offering premium custom cakes with online ordering, user authentication, cart management, and admin dashboard.

## 🎂 Features

### Customer Features
- **Beautiful Product Catalog**: Browse through various cake categories with detailed descriptions
- **Customization Options**: Select size, flavor, and add custom messages to cakes
- **Shopping Cart**: Interactive cart with quantity management and floating cart indicator
- **User Authentication**: Secure signup/login system with order history
- **Checkout Process**: Complete order flow with delivery scheduling and payment options
- **Order Tracking**: View order history and track order status
- **Responsive Design**: Mobile-first design that works on all devices

### Admin Features
- **Admin Dashboard**: Comprehensive order management system
- **Order Management**: View, filter, and update order statuses
- **Data Export**: Export orders to CSV for record-keeping
- **Statistics Overview**: View key metrics and order analytics

### Technical Features
- **EmailJS Integration**: Automatic email notifications for new orders
- **Local Storage**: Demo data persistence for orders and user sessions
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Semantic markup, proper form labels, and focus states

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd leeza-cakes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📧 Email Configuration

### Option A: EmailJS Setup (Client-side)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{to_email}}`
   - `{{order_id}}`
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{customer_phone}}`
   - `{{delivery_date}}`
   - `{{delivery_time}}`
   - `{{delivery_address}}`
   - `{{special_notes}}`
   - `{{payment_method}}`
   - `{{total_amount}}`
   - `{{items}}`
   - `{{order_date}}`

4. Update the EmailJS configuration in `src/pages/Checkout.tsx`:
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### Option B: Server Integration (Recommended for Production)

For production use, implement a Node.js backend with:
- Express.js server
- MongoDB for data persistence
- Nodemailer for email notifications
- JWT authentication

## 🛠️ Demo Credentials

### Admin Access
- **Email**: leezasarwar0@gmail.com
- **Password**: admin123

### Customer Demo
- **Email**: demo@example.com
- **Password**: demo123

## 📱 Pages Overview

- **Home** (`/`): Hero section with featured products and company highlights
- **Products** (`/products`): Complete product catalog with search and filters
- **Cart** (`/cart`): Shopping cart with item management
- **Login/Register** (`/login`, `/register`): User authentication
- **Checkout** (`/checkout`): Complete order process
- **Orders** (`/orders`): Order history for logged-in users
- **Admin** (`/admin`): Admin dashboard for order management
- **About** (`/about`): Company information and story
- **Contact** (`/contact`): Contact form and business information

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: Pink (#F8BBD9)
  - Secondary: Purple (#8B4513)
  - Accent: Gold (#FFD700)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects, floating elements, and micro-interactions
- **Responsive**: Mobile-first design with tailored breakpoints

## 🔧 Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Context API
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns
- **Build Tool**: Vite
- **Email**: EmailJS (client-side option)

## 📊 Data Storage

### Demo Mode (Current)
- User data: Local Storage
- Orders: Local Storage
- Products: Static data in `src/data/products.ts`

### Production Recommendations
- Database: MongoDB Atlas or PostgreSQL
- Authentication: JWT with secure password hashing
- File Storage: AWS S3 or Cloudinary for images
- Email: SMTP service (Gmail, SendGrid, Mailgun)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

### Full-Stack Deployment
For production deployment with backend:
1. Set up MongoDB Atlas
2. Deploy backend to Railway/Render/Heroku
3. Configure environment variables
4. Update API endpoints in frontend
5. Deploy frontend with backend API URL

## 📧 Contact Information

- **Owner**: Leeza Sarwar
- **Email**: leezasarwar0@gmail.com
- **Phone**: +92 333 504 8593
- **LinkedIn**: [Leeza Sarwar](https://www.linkedin.com/in/leeza-sarwar-21ab61339)
- **GitHub**: [LeezaSarwar](https://github.com/LeezaSarwar)
- **X**: [@LeezaSarwar](https://x.com/LeezaSarwar)

## 📝 License

This project is created for Leeza Cakes. All rights reserved.

## 🤝 Contributing

This is a custom project for Leeza Cakes. For suggestions or improvements, please contact the owner directly.

---

Made with ❤️ for delicious moments by Leeza Cakes