<div align="center">

<br/>

# 🧰 DigiTools

### *Your all-in-one digital toolkit — built with React.*

<br/>

🔗 **[Live Demo](https://a06-digitools-reazul-hassan.netlify.app/)** &nbsp;|&nbsp; 📁 **[GitHub Repo](https://github.com/Hermitxxx/A06-reazul-hassan)**

<br/>

</div>

---

## 🧰 About DigiTools

**DigiTools** is a responsive, modern web application that provides a curated collection of digital tools — all in one place. Built with React and powered by live API data, it offers a seamless, cart-based browsing experience where users can explore, select, and manage tools with ease.

Whether you're browsing tools or tracking your selections, DigiTools delivers a smooth and interactive experience built from the ground up with real React fundamentals.

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ **React** | UI library & component architecture |
| ⚡ **Vite** | Lightning-fast dev server & build tool |
| 🎨 **Tailwind CSS** | Utility-first responsive styling |
| 🔀 **React Router** | Client-side navigation |
| 🔔 **React Toastify** | Elegant toast notifications |
| 🌐 **Fetch API** | Live data fetching from external API |
| ☁️ **Netlify** | Deployment & hosting |

---

## ✨ Features

### 🛒 Smart Cart with Live Total Calculation
Add tools to your cart and watch the total update in real time. Cart state is managed via **lifted state** — shared across components without any external state library, keeping things clean and React-native.

### 📡 Live API Data with React Suspense
Tools are fetched from a live API and cached intelligently — the UI stays stable and only re-fetches when the underlying data actually changes. React Suspense handles the loading experience gracefully, giving users smooth transitions instead of jarring content flashes.

### 📱 Fully Responsive UI
From mobile to desktop, DigiTools adapts fluidly across all screen sizes. Built with a mobile-first mindset using Tailwind CSS, the layout reorganizes intelligently so the experience feels native on any device.

---

## 🧠 What I Learned

Building DigiTools was a deep dive into core React concepts applied in a real project:

- **Lifting State Up** — sharing cart state across sibling components without prop-drilling chaos
- **Calculating Totals from Cart State** — deriving computed values from state in a clean, reactive way
- **Conditional Rendering** — showing the right UI at the right time based on state
- **Frontend Responsive Design** — building layouts that look great on any screen
- **API Fetching + React Suspense** — fetching live data and keeping it stable until the source changes

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Hermitxxx/A06-reazul-hassan.git

# Navigate into the project
cd A06-reazul-hassan

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
A06-reazul-hassan/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-level page components
│   ├── assets/          # Static assets
│   └── main.jsx         # App entry point
├── index.html
├── package.json
└── vite.config.js
```

---

<div align="center">

Made with 💜 by **Reazul Hassan**

[![GitHub](https://img.shields.io/badge/GitHub-Hermitxxx-4F39F6?style=flat-square&logo=github)](https://github.com/Hermitxxx)

</div>