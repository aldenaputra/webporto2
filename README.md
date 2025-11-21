# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. Features dark/light mode toggle and a modular structure for easy content management.

## Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4
- **Dark/Light Mode**: Toggle with system preference detection
- **Responsive Design**: Mobile-first approach
- **Modular Structure**: Easy to customize and add new content
- **SEO Optimized**: Built-in SEO best practices
- **Fast Performance**: Optimized for Vercel deployment

## Project Structure

```
portfolio_alden_new/
├── app/
│   ├── components/
│   │   ├── layout/          # Layout components (Navigation, ThemeProvider)
│   │   ├── sections/        # Page sections (Hero, About, Projects)
│   │   └── ui/             # Reusable UI components
│   ├── data/
│   │   └── portfolioData.ts # Centralized content management
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   └── utils/
│       └── theme.ts        # Theme management utilities
├── public/                 # Static assets
└── README.md
```

## Customization Guide

### 1. Update Personal Information

Edit [`app/data/portfolioData.ts`](app/data/portfolioData.ts) to update:

- **Personal Details**: Name, title, description, email, location
- **About Section**: Bio, career goals, skills, hobbies
- **Projects**: Add/remove projects with STAR method descriptions
- **Social Links**: GitHub, LinkedIn, etc.

### 2. Add Your Photos

Place your images in the `public/` folder:
- Professional headshot: `public/headshot.jpg`
- Project screenshots: `public/project1-screenshot.jpg`, etc.

Update the image URLs in `portfolioData.ts`.

### 3. Customize Colors & Styling

Modify Tailwind classes in components or update the theme in `tailwind.config.js`.

## Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
cd portfolio_alden_new
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run start
```

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Content Management

All content is managed through the `portfolioData.ts` file:

- **Easy Updates**: Change text without touching components
- **Modular Projects**: Add new projects by copying the template
- **Skills Management**: Organize by categories