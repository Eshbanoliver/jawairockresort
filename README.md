# Jawai Rock Resort

A luxury jungle safari and resort stay website built with modern web technologies, offering a premium, immersive digital experience. The platform showcases luxury accommodations, wild leopard safaris, destination weddings, and custom travel packages with a focus on high-end design and smooth interactions.

## 🌟 Features

- **Premium UI/UX:** Built with a sophisticated dark forest green (`#112d15`) and sand beige color palette.
- **Glassmorphism Design:** Extensive use of frosted glass panels, glowing accents, and dynamic backdrop filters to create a modern, luxurious aesthetic.
- **Micro-interactions:** Powered by Framer Motion for scroll reveals, hover spring animations, and smooth page transitions.
- **Fully Responsive:** Beautifully adapts from mobile devices up to large desktop screens using custom CSS Grid and Flexbox layouts.
- **Interactive Map:** Integrated Google Maps with a custom floating directions card.
- **Modern Contact & Inquiry Flows:** Dynamic form handling with status beacons and interactive inquiry category chips.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Styling:** Custom Vanilla CSS architecture (`index.css`) with CSS variables and utility classes. (No Tailwind CSS library dependency - custom mapping used).

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components (Navbar, Footer, LeafAnimation, FloatingActions)
├── pages/              # Main route views (Home, About, Services, Testimonials, Contact)
├── App.tsx             # Root component and Router configuration
├── main.tsx            # Application entry point
└── index.css           # Core design system, variables, and custom utility classes
```

## 🎨 Design System

The project relies on a strictly defined set of custom CSS utilities inside `index.css`:
- Custom variables for colors: `--forest-green`, `--sand-beige`, `--sunset-orange`, etc.
- `glass-panel` and `glass-card` classes for frosted transparency effects.
- Specific gap, padding, margin, and typography scale mapped to custom classes.
- Responsive breakpoints natively handled within custom classes and media queries.

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (version 16 or higher) installed on your machine.

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

### Building for Production

Compile TypeScript and build the project:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 📝 License

This project is proprietary and confidential. All rights reserved.
