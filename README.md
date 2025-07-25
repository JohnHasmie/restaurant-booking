# La Cuisine - Restaurant Website

A modern, responsive restaurant website built with Vue 3, featuring an **interactive multi-step reservation system**, beautiful menu display, and elegant design with smooth animations.

## 🍽️ Features

### Core Features
- **Interactive Multi-Step Reservation System** - Modern booking experience with progress tracking, visual feedback, and confirmation modal
- **Responsive Design** - Mobile-first approach with beautiful layouts for all devices
- **Interactive Menu** - Categorized menu items with prices and descriptions
- **About Section** - Restaurant story, team profiles, and awards
- **Contact Form** - Easy communication with FAQ section
- **Modern UI/UX** - Elegant design with smooth animations, micro-interactions, and glass morphism effects

### Technical Features
- **Vue 3 Composition API** - Modern Vue.js development
- **Vue Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Heroicons** - Official Tailwind CSS icon library integration
- **Vite** - Fast build tool and development server
- **Mobile Responsive** - Optimized for all screen sizes with enhanced mobile experience
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Smooth Animations** - CSS transitions, hover effects, and micro-interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restaurant-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
restaurant-website/
├── src/
│   ├── components/
│   │   ├── Navigation.vue          # Responsive navigation with mobile menu
│   │   └── Footer.vue              # Footer with contact info and links
│   ├── views/
│   │   ├── Home.vue                # Landing page with hero and features
│   │   ├── Menu.vue                # Interactive menu with categories
│   │   ├── Reservations.vue        # Multi-step booking system
│   │   ├── About.vue               # Restaurant story and team
│   │   └── Contact.vue             # Contact form and information
│   ├── App.vue                     # Main app component
│   ├── main.js                     # Vue app entry point
│   └── style.css                   # Global styles and Tailwind imports
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Orange gradient (#f27522 to #e35a18)
- **Secondary**: Gray scale (#f8fafc to #0f172a)
- **Accent**: Various semantic colors for different states
- **Success**: Green gradient for confirmations (#10b981 to #059669)

### Typography
- **Headings**: Playfair Display (serif) - Elegant and sophisticated
- **Body**: Inter (sans-serif) - Clean and readable

### Interactive Elements
- **Buttons**: Gradient backgrounds with hover effects and scale animations
- **Cards**: Glass morphism effects with backdrop blur and subtle shadows
- **Forms**: Enhanced focus states with ring effects and smooth transitions
- **Progress Indicators**: Animated progress bars with visual feedback

## 📱 Pages Overview

### Home Page
- **Animated hero section** with floating elements and staggered animations
- Features highlighting restaurant benefits
- Special offers section with interactive cards
- Customer testimonials with modern styling

### Menu Page
- **Categorized menu items** (Appetizers, Main Courses, Desserts, Premium Beverages)
- Interactive category tabs with smooth transitions
- Chef's special section with highlighted items
- **Halal-friendly beverage selection** (Arabic Coffee, Mint Tea, Mocktails)

### Reservations Page ⭐ **NEW**
- **Multi-step booking wizard** with progress tracking
- **Interactive time slot selection** with popular time indicators
- **Visual party size selection** with emoji icons
- **Enhanced form validation** with real-time feedback
- **Confirmation modal** with booking summary
- **Restaurant policies** and opening hours
- **Mobile-optimized** with improved touch interactions

### About Page
- Restaurant story and history with elegant typography
- Team member profiles with professional styling
- Awards and recognition section
- Sustainability commitment with visual elements

### Contact Page
- Contact form with enhanced validation
- Restaurant information with icons
- Social media links with hover effects
- FAQ section with expandable answers
- Map placeholder for future integration

## 🔧 Customization

### Adding Menu Items
Edit the `menuItems` array in `src/views/Menu.vue`:

```javascript
const menuItems = [
  {
    id: 1,
    name: 'Dish Name',
    description: 'Dish description',
    price: 25,
    category: 'main-courses',
    image: 'image-url',
    vegetarian: false,
    spicy: false
  }
]
```

### Customizing the Booking System
The reservation system in `src/views/Reservations.vue` includes:

```javascript
// Time slots with popularity indicators
const availableTimes = [
  { time: '12:00 PM', available: true, popular: true },
  { time: '6:00 PM', available: true, popular: true }
]

// Party sizes with emoji icons
const partySizes = [
  { size: 1, icon: '👤', label: '1 Person' },
  { size: 2, icon: '👥', label: '2 People' }
]
```

### Updating Restaurant Information
- **Contact details**: Update in `src/components/Footer.vue` and `src/views/Contact.vue`
- **Opening hours**: Modify in `src/views/Reservations.vue`
- **Team members**: Edit in `src/views/About.vue`
- **Menu items**: Update in `src/views/Menu.vue`

### Styling Changes
- **Colors**: Update `tailwind.config.js` color palette
- **Typography**: Modify font families in `src/style.css`
- **Animations**: Customize transition effects in component styles
- **Icons**: Replace Heroicons in components as needed

## 🌐 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

## 🎯 Key Enhancements

### Latest Updates (v2.0)
- ✨ **Interactive Multi-Step Booking System** with progress tracking
- 🎨 **Modern UI/UX** with glass morphism and micro-interactions
- 📱 **Enhanced Mobile Experience** with improved touch interactions
- 🎯 **Visual Feedback** throughout the booking process
- 🌟 **Heroicons Integration** for consistent iconography
- ⚡ **Smooth Animations** and transitions
- 🎪 **Popular Time Indicators** in booking system
- 📋 **Enhanced Form Validation** with real-time feedback
- 🎊 **Confirmation Modal** with booking summary
- 🎨 **Cultural Sensitivity** with halal-friendly beverage options

## 📞 Support

For questions or support, please contact:
- Email: info@lacuisine.com
- Phone: (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Icons**: [Heroicons](https://heroicons.com) - Official Tailwind CSS icon library
- **Images**: [Unsplash](https://unsplash.com) - High-quality stock photos
- **Fonts**: [Google Fonts](https://fonts.google.com) - Playfair Display & Inter
- **Framework**: [Vue.js](https://vuejs.org) - Progressive JavaScript framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

---

**Built with ❤️ for the culinary world**

*Experience the future of restaurant booking with our modern, interactive reservation system.* 