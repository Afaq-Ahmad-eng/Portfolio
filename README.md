# Afaq Ahmad – Portfolio

A modern, responsive portfolio showcasing development projects and technical skills. Built with React, Chakra UI, and Vite for performance and accessibility.

**[Live Demo](#)** | **[GitHub](https://github.com)** | **[LinkedIn](https://linkedin.com)** | **[Email](mailto:afaq@example.com)**

---

## Overview

Full-stack developer focused on building scalable applications and solving real-world problems through clean, maintainable code. Proficient in modern web technologies and passionate about continuous learning.

---

## Tech Stack

**Frontend**
- React 19 with React Router DOM
- Chakra UI for accessible components
- Framer Motion for animations
- CSS Modules for scoped styling
- Formik + Yup for robust form validation

**Build & Development**
- Vite (next-gen build tool)
- ESLint for code quality
- Node.js / npm

**Other**
- Git & GitHub version control
- REST API integration
- Responsive design (mobile-first)

---

## Features

✓ **Fully Responsive** – Mobile, tablet, and desktop optimized  
✓ **Fast Performance** – Vite-optimized bundling and dev server  
✓ **Accessible** – Chakra UI components with ARIA compliance  
✓ **Smooth Interactions** – Framer Motion animations  
✓ **Form Validation** – Formik + Yup schema validation  
✓ **Modern Stack** – React 19, ES modules, modern JavaScript  
✓ **SEO-Ready** – React Helmet for metadata management  

---

## Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default).

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── App.jsx
│   ├── header/
│   ├── cards/          # Project cards with links
│   ├── projectSection/
│   ├── contactMeSection/
│   ├── footer/
│   └── alert/
├── context/            # React context for state management
│   └── alertContext/
├── hooks/              # Custom React hooks
│   └── useSubmit/
├── assets/             # Images and media
├── main.jsx
└── index.css           # Global styles

public/                 # Static assets
```

---

## Key Components

### Cards Component
Dynamically renders project cards with links to GitHub repos and live demos.

```jsx
<Cards 
  title="Project Name"
  description="Brief description"
  imageSrc="/path/to/image"
  link="https://github.com/yourrepo"
/>
```

### Contact Section
Form-based contact with validation and alert feedback.

### Responsive Layout
Mobile-first design with Chakra UI's responsive props.

---

## Performance Optimization

- **Code Splitting** – Vite automatically chunks code for lazy loading
- **CSS Modules** – Scoped styling prevents naming conflicts
- **Image Optimization** – Vite handles image minification
- **Tree Shaking** – Unused code is eliminated in production

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag `dist/` folder to Netlify dashboard
```

### GitHub Pages
Update `vite.config.js` with `base: "/portfolio/"` and deploy.

---

## Next Steps

- [ ] Update live demo link in README and navbar
- [ ] Add real GitHub/LinkedIn URLs
- [ ] Populate projects with descriptions and links
- [ ] Test all external links (GitHub, website redirects)
- [ ] Add project screenshots
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Configure analytics (optional)

---

## License

MIT License – Feel free to use this as a template for your own portfolio.

---

**Made with ❤️ by Afaq Ahmad**

