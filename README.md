# Rifa Amril Sahputra --- Portfolio

> Personal portfolio website built with Vue 3, TypeScript, GSAP, and
> Tailwind CSS.

Welcome to my portfolio repository. I'm **Rifa Amril Sahputra**, an
Informatics Engineering graduate and developer interested in **AI,
full-stack development, mobile development, and interactive web
experiences**.

This portfolio is designed to showcase my projects, technical skills,
services, and experience through a responsive interface with custom
animations and smooth interactions.

## ✨ Highlights

-   Modern and responsive portfolio interface
-   Animated loading screen and page transitions
-   Interactive hero section
-   Services and skills showcase
-   Project/work showcase
-   About Me section
-   Testimonials / people section
-   Contact section
-   Smooth scrolling and UI animations
-   SEO-related configuration with sitemap and robots files
-   Automated deployment to GitHub Pages through GitHub Actions

## 🛠 Tech Stack

  -----------------------------------------------------------------------------------
  Technology                                      Purpose
  ----------------------------------------------- -----------------------------------
  [Vue.js](https://vuejs.org/)                    Frontend framework

  [TypeScript](https://www.typescriptlang.org/)   Type-safe development

  [GSAP](https://gsap.com/)                       Animations and interactive motion

  [Tailwind CSS](https://tailwindcss.com/)        Styling and responsive UI

  [Lenis](https://lenis.darkroom.engineering/)    Smooth scrolling

  [Vite](https://vite.dev/)                       Development server and build tool

  GitHub Actions                                  Automated build and deployment

  GitHub Pages                                    Portfolio hosting
  -----------------------------------------------------------------------------------

## 📁 Project Structure

``` text
PortfolioNadapdap/
├── .github/
│   └── workflows/
│       └── vue.yml
├── public/
│   ├── manifest.json
│   ├── sitemap.xml
│   └── ...
├── src/
│   ├── animations/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   ├── design/
│   │   └── sections/
│   ├── functions/
│   ├── App.vue
│   ├── data.ts
│   ├── main.ts
│   └── style.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

The `src/components/sections/` directory contains the main sections of
the portfolio, including:

-   **Hero**
-   **Services**
-   **My Works**
-   **About Me**
-   **People / Testimonials**
-   **Contact**

Project-specific assets are stored under `src/assets/images/`.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   Node.js 20 or newer
-   npm
-   Git

### Installation

Clone the repository:

``` bash
git clone https://github.com/RifaAmrilSahputra/PortfolioNadapdap.git
```

Enter the project directory:

``` bash
cd PortfolioNadapdap
```

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

The development server will normally be available at:

``` text
http://localhost:5173
```

### Production Build

To create a production build:

``` bash
npm run build
```

To preview the production build locally:

``` bash
npm run preview
```

## 🌐 Deployment

This repository uses **GitHub Actions** to build and deploy the
portfolio to **GitHub Pages**.

The workflow is located at:

``` text
.github/workflows/vue.yml
```

Whenever changes are pushed to the `main` branch, GitHub Actions will:

1.  Checkout the repository
2.  Set up Node.js
3.  Install dependencies
4.  Build the Vue application
5.  Upload the generated `dist` directory
6.  Deploy the result to GitHub Pages

This makes the deployment process automatic after every successful push
to `main`.

## 📌 Featured Projects

The portfolio currently includes project showcases such as:

-   **TrackFO** --- technician and network disturbance tracking system
-   **Boardify**
-   **Chillify**
-   **Semicolon**

The project information and related assets are maintained inside the
`src/` directory.

## 🎨 Design & Attribution

The visual direction of this portfolio is based on an original UI
concept by **Huy Nguyen**.

Special thanks to **Huy Nguyen** for the original design inspiration and
for allowing the design to be recreated and adapted for this portfolio.

The implementation, animations, development, and customization of this
version are by **Rifa Amril Sahputra**.

Original designer:

-   Huy Nguyen --- https://www.huyng.xyz

Developer:

-   Rifa Amril Sahputra --- https://github.com/RifaAmrilSahputra

## 📜 Credits & Resources

Resource and attribution links are also maintained in:

``` text
src/data.ts
```

If you reuse or modify this portfolio, please preserve the appropriate
attribution and respect the original designer's work.

## 🤝 Contributing / Reusing

If you find this project useful and want to build upon it:

1.  Star the repository ⭐
2.  Fork the repository
3.  Make your changes
4.  Keep the original design and developer attribution
5.  Clearly acknowledge any significant modifications you make

Please do not present the original design or implementation as entirely
your own work.

## 🔮 Future Plans

Planned improvements may include:

-   Arabic language support
-   Additional project showcases
-   More interactive animations
-   Further accessibility improvements
-   Continued performance and SEO optimization

## 📬 Contact

You can find me through the social links provided on the portfolio
website and repository.

-   GitHub: https://github.com/RifaAmrilSahputra
-   LinkedIn: https://www.linkedin.com/
-   X: https://x.com/

------------------------------------------------------------------------

Made with Vue.js, TypeScript, GSAP, and a lot of experimentation. 🚀
