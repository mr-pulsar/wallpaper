# Design Guide - 3D Wallpaper Website

## Color Palette

### Primary Colors
- **Blue**: `#0ea5e9` (blue-500) - Primary actions, links
- **Purple**: `#8b5cf6` (purple-500) - Accents, gradients
- **Pink**: `#ec4899` (pink-500) - Gradient accents

### Background Colors
- **Light Mode**: 
  - Base: `#ffffff`
  - Glass: `rgba(255, 255, 255, 0.1)`
- **Dark Mode**:
  - Base: `#000000`
  - Glass: `rgba(0, 0, 0, 0.3)`

## Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Regular weight, readable sizes

## UI Components

### Glassmorphism
- Background: `rgba(255, 255, 255, 0.1)` (light) / `rgba(0, 0, 0, 0.3)` (dark)
- Backdrop filter: `blur(10px)`
- Border: `1px solid rgba(255, 255, 255, 0.2)`

### Neumorphism
- Light mode: Soft shadows creating depth
- Dark mode: Subtle highlights and shadows

## Animations

### Framer Motion
- Page transitions: Fade in with slight upward motion
- Hover effects: Scale and translate transforms
- Stagger animations: Sequential appearance of items

### Custom Animations
- Float: Continuous vertical movement
- Glow: Pulsing shadow effect
- Smooth scroll: Parallax effects

## Component Patterns

### Cards
- Rounded corners: `rounded-2xl`
- Hover: Scale up, shadow enhancement
- Overlay: Gradient on hover showing details

### Buttons
- Primary: Gradient background (blue to purple)
- Secondary: Glass effect with hover state
- Icon buttons: Circular with backdrop blur

## Responsive Breakpoints

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## Spacing

- Consistent use of Tailwind spacing scale
- Section padding: `py-20`
- Container padding: `px-4 sm:px-6 lg:px-8`

## Image Handling

- Next.js Image component for optimization
- Aspect ratios: `aspect-video` for wallpapers
- Lazy loading: Automatic with Next.js
- Responsive sizes: Proper srcset generation

