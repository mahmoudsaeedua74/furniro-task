# Furniro - Modern Furniture E-commerce Website

A responsive and modern e-commerce website built with Next.js 15 and React 19, implementing a furniture store design from Figma with elegant animations and user interactions.

## 🚀 Live Demo

https://furniro-task.vercel.app/

##  Task Overview

This project was developed as part of a Frontend Developer assessment for **Guitara Group**. The task involved:

- Implementing the Home page from the provided Figma design
- Creating an additional Shop page with full functionality
- Using ReactJS and NextJS as the core technologies
- Maintaining clean, organized, and commented code

**Figma Design Reference**: [eCommerce Website Design](https://figma.com/design/yFmZNMAbGKEWwqafmuPBFz/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-%7C-Interior-Landing-Page--Community-?node-id=117-336&t=ju1KgMJ4sZNIA4eD-1)

##  Features

### Home Page
- **Hero Section**: Eye-catching banner with animated content and call-to-action
- **Category Browse**: Interactive furniture category showcase with hover effects
- **Products Section**: Featured products grid with smooth animations
- **Room Inspiration**: Carousel showcasing beautiful room setups
- **Furniture Gallery**: Dynamic grid layout displaying furniture collections
- **Responsive Design**: Optimized for all device sizes

### Shop Page
- **Product Grid/List View**: Toggle between grid and list view modes
- **Product Cards**: Interactive cards with hover effects and action buttons
- **Filter Bar**: Navigation bar with view mode controls and product count
- **Pagination**: Static pagination component (ready for dynamic implementation)
- **Features Section**: Highlighting store benefits and services

### Global Features
- **Responsive Navigation**: Mobile-friendly navbar with proper navigation
- **Toast Notifications**: User feedback for actions (add to cart, like, share, etc.)
- **Smooth Animations**: Framer Motion powered animations throughout the site
- **Performance Optimized**: Next.js 15 with Turbopack for fast development and builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Tech Stack

### Core Technologies
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### Libraries & Dependencies
- **Framer Motion 12.23.12** - Animation library for smooth interactions
- **React Hot Toast 2.5.2** - Toast notifications for user feedback
- **Radix UI** - Accessible UI primitives for tooltips and slots
- **Class Variance Authority** - Component variant management
- **Clsx & Tailwind Merge** - Conditional class names and optimization
- **Axios 1.11.0** - HTTP client for future API integrations

### Development Tools
- **ESLint 9** - Code linting and quality assurance
- **Turbopack** - Ultra-fast bundler for development

##  Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with fonts and providers
│   ├── page.tsx           # Home page entry point
│   ├── HomeClient.tsx     # Client-side home page components
│   └── shop/              # Shop page directory
│       └── page.tsx       # Shop page implementation
├── components/            # Reusable React components
│   ├── Home/             # Home page specific components
│   │   ├── HeroSection.tsx
│   │   ├── CategoryBrowseSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ExploreSection.tsx
│   │   ├── FurnitureGrid.tsx
│   │   └── RoomCarousel.tsx
│   ├── Shop/             # Shop page specific components
│   │   ├── ProductsSection.tsx
│   │   ├── FilterBar.tsx
│   │   └── FeaturesSection.tsx
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx    # Button component with variants
│   │   ├── ProductsCard.tsx # Product card with grid/list modes
│   │   ├── Badge.tsx     # Product badges
│   │   ├── Heading.tsx   # Section headings
│   │   ├── BreadcrumbHeader.tsx # Page headers
│   │   ├── PaginationStatic.tsx # Pagination component
│   │   └── ComingSoon.tsx # Coming soon placeholder
│   ├── navbar/           # Navigation components
│   │   └── Navbar.tsx
│   ├── footer/           # Footer components
│   │   └── Footer.tsx
│   └── icons/            # Custom SVG icon components
├── constants/            # Static data and configuration
│   └── siteConfig.ts     # Products data and site constants
└── utils/                # Utility functions and types
    ├── interface.ts      # TypeScript interfaces
    └── animation.ts      # Framer Motion animation variants
```

##  Design Implementation

### Typography
- **Poppins**: Primary font for content with weights 400, 500, 600, 700
- **Montserrat**: Logo font with weight 700

### Color Scheme
- Primary: `#B88E2F` (Golden accent)
- Background: `#F4F5F7` (Light gray)
- Text: `#333333` (Dark gray)
- Secondary: `#FCF8F3` (Warm background)

### Component Features
- **Product Cards**: Support both grid and list view modes
- **Animations**: Stagger animations for product grids and smooth transitions
- **Hover Effects**: Interactive elements with proper feedback
- **Responsive Images**: Next.js Image optimization with proper sizing

##  Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone [your-repository-url]
cd furniro-task
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

##  Build Performance

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    3.21 kB         145 kB
├ ○ /_not-found                            123 B        99.9 kB
├ ○ /about                               2.27 kB         102 kB
├ ○ /contact                             2.27 kB         102 kB
└ ○ /shop                                12.1 kB         159 kB
+ First Load JS shared by all            99.8 kB
```

## 💡 Key Implementation Decisions

### Performance Optimizations
- **Dynamic Imports**: Non-critical components are lazy-loaded using `next/dynamic`
- **Image Optimization**: Next.js Image component with proper sizing and priority loading
- **SSR Strategy**: Strategic use of client-side rendering where needed

### Code Organization
- **Component Structure**: Modular components with clear separation of concerns
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures
- **Reusable UI**: Consistent design system with variant-based components

### User Experience
- **Smooth Animations**: Framer Motion for professional interactions
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Loading States**: Toast notifications for user action feedback
- **View Modes**: Flexible product display options (grid/list)

##  Future Enhancements

- [ ] Dynamic product filtering and sorting
- [ ] Shopping cart functionality
- [ ] User authentication system
- [ ] Product detail pages
- [ ] Search functionality
- [ ] Wishlist management
- [ ] API integration for dynamic content
- [ ] Payment gateway integration

