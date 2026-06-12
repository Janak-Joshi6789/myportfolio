# Janak Raj Joshi — Portfolio

Personal portfolio website built with React + Vite.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Structure

```
src/
  components/     # Navbar, Footer
  sections/       # Hero, About, Skills, Projects, Certifications, Contact
  index.css       # Global styles & CSS variables
  App.jsx         # Main app
```

## Customization

- Update personal info in each section file
- Colors: edit CSS variables in `src/index.css`
- Add your photo: place `photo.jpg` in `public/` and update Hero.jsx
- Deploy: upload `dist/` folder to Netlify, Vercel, or any static host

## Deploy to Netlify (Free)

1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
