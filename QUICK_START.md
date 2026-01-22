# Quick Start Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── categories/        # Categories page
│   ├── wallpaper/[id]/    # Wallpaper preview page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── WallpaperCard.tsx # Wallpaper card component
│   ├── CategoryCard.tsx  # Category card component
│   └── ...               # Other components
├── lib/                  # Utilities
│   └── data.ts           # Sample data
└── public/               # Static assets
```

## Features Implemented

✅ Modern glassmorphism/neumorphism UI
✅ Dark/Light theme toggle
✅ Smooth animations with Framer Motion
✅ Responsive design (mobile, tablet, desktop)
✅ Search functionality
✅ Category filtering
✅ Resolution filtering
✅ Wallpaper preview and download
✅ Multiple pages (Home, Categories, About, Contact)
✅ 8 Categories (God, Anime, Bike, Cars, Nature, Abstract, Minimal, Gaming)
✅ Sample wallpapers with metadata

## Customization

### Adding New Wallpapers

Edit `lib/data.ts` and add to the `wallpapers` array:

```typescript
{
  id: 'unique-id',
  title: 'Wallpaper Title',
  category: 'Category Name',
  image: 'https://image-url.com/image.jpg',
  downloads: 0,
  likes: 0,
  resolution: '4K',
  description: 'Optional description'
}
```

### Adding New Categories

Edit `lib/data.ts` and add to the `categories` array:

```typescript
{
  id: 'category-id',
  name: 'Category Name',
  image: 'https://image-url.com/image.jpg',
  count: 0,
  description: 'Category description'
}
```

### Changing Colors

Edit `tailwind.config.ts` to customize the color palette.

### Changing Animations

Modify Framer Motion animations in component files.

## Production Build

```bash
npm run build
npm start
```

## Deployment

The project is ready to deploy on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## Notes

- Images are currently using Unsplash placeholder URLs
- Replace with your own image URLs or CDN
- Download functionality is simulated (update in `WallpaperPreview.tsx`)
- Contact form submission needs backend integration

