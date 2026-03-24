# Digihub Pro

A modern digital services agency website built with [Next.js](https://nextjs.org), featuring interactive calculators, portfolio showcases, and service information.

## Features

- **Interactive Calculators**: Ad Calculator and Service Calculator for instant pricing estimates
- **Responsive Design**: Mobile-first approach with smooth animations
- **Brand Management**: Centralized brand constants and logo grids
- **Multiple Service Pages**: Including services, pricing, portfolio, and ecosystem information
- **Contact & Store**: Integrated contact forms and e-commerce capabilities
- **Fade-In Animations**: Smooth page transitions with custom FadeIn component

## Project Structure

```
src/
├── app/              # Next.js pages and routing
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── services/     # Services page
│   ├── pricing/      # Pricing page
│   ├── portfolio/    # Portfolio page
│   ├── ecosystem/    # Ecosystem page
│   └── store/        # Store page
├── components/       # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AdCalculator.tsx
│   ├── ServiceCalculator.tsx
│   ├── BrandLogoGrid.tsx
│   └── FadeIn.tsx
└── constants/        # Configuration and constants
    └── brand.ts      # Brand information
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The application will auto-update as you make changes to files.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Technologies Used

- [Next.js 14+](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS / PostCSS](https://tailwindcss.com) - Styling
- [ESLint](https://eslint.org) - Code quality

## Development

Edit components in the `src/` directory. The site will automatically update as you make changes thanks to Next.js's fast refresh feature.

## Building for Production

```bash
npm run build
npm start
```

## License

This project is part of Digihub Pro. All rights reserved.
