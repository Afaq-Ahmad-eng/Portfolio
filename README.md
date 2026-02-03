# Afaq Ahmad – Portfolio

A modern, responsive portfolio showcasing development projects and technical skills. Built with React, Chakra UI, and Vite for performance and accessibility.

<p>
  <a href="https://afaq-ahmad-eng-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
    <strong>Live Demo</strong>
  </a>
  |
  <a href="https://github.com/Afaq-Ahmad-eng" target="_blank" rel="noopener noreferrer">
    <strong>GitHub</strong>
  </a>
  |
  <a href="https://www.linkedin.com/in/Afaq-Ahmad-ali/" target="_blank" rel="noopener noreferrer">
    <strong>LinkedIn</strong>
  </a>
  |
  <span>Email: ali2312@gmail.com</span>
</p>


---

## Overview

Full-stack developer focused on building scalable applications and solving real-world problems through clean, maintainable code. Proficient in modern web technologies and passionate about continuous learning.

---

## Key Interests

- **Backend Engineering & APIs:** Designing RESTful services, authentication flows, data modeling, and scalable server-side logic.
- **System Design Fundamentals:** Understanding trade-offs in architecture, scalability, reliability, and real-world constraints.
- **Testing & Code Quality:** Writing unit, integration, and end-to-end tests to ensure correctness, stability, and confidence in production code.
- **Performance & Reliability:** Optimizing database queries, API response times, caching strategies, and failure handling.
- **Automation & Developer Productivity:** Improving workflows with scripts, CI/CD pipelines, and tooling that reduce manual effort and errors.
- **Full-Stack Integration:** Building frontends that correctly consume APIs, handle edge cases, and reflect backend realities.
- **Pragmatic UI Development:** Creating clean, accessible interfaces with a focus on correctness and maintainability rather than visual flash.

---

## Tech Stack

### Backend
- Node.js, Express.js
- REST API design, JWT-based authentication
- Prisma ORM(Object Relational Mapping)

### Databases
- MongoDB (Non-SQL)
- MYSQL (SQL)

### Testing
- Playwright (basic unit, end-to-end testing)

### Frontend
- React
- HTML, CSS
- Basic state management and API integration

### Tooling & Automation
- Git & GitHub
- GitHub Actions (basic CI)
- ESLint / Prettier
- Environment-based configuration

### Deployment
- Vercel, Netlify (frontend)




## Tech Stack for This Project

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
- Third party api integration for contact form
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
git clone https://github.com/Afaq-Ahmad-eng/Portfolio.git
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
  link="GitHub or live demo URL"
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


## License

MIT License – Feel free to use this as a template for your own portfolio.

---

**Made with ❤️ by Afaq Ahmad**

