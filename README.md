# 🚀 Portfolio Professionnel - Jérémy Palette

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue)](https://jeremp62.github.io/portfolio-jeremie-palette/#/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)](https://vitejs.dev/)

> Portfolio professionnel d'un intégrateur web junior en reconversion de la métallurgie vers le développement web.

**🔗 Lien vers le site** : [https://jeremp62.github.io/portfolio-jeremie-palette/#/](https://jeremp62.github.io/portfolio-jeremie-palette/#/)

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#️-technologies-utilisées)
- [Installation](#-installation)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [Accessibilité et SEO](#-accessibilité-et-seo)
- [Auteur](#-auteur)

---

## 🎯 À propos

Ce portfolio a été créé dans le cadre de ma formation de développeur web chez OpenClassrooms. Il représente ma vitrine professionnelle et démontre mes compétences en développement front-end, notamment en React.

### Objectifs du projet

- ✅ Créer une vitrine professionnelle moderne et responsive
- ✅ Présenter mes projets de formation de manière détaillée
- ✅ Mettre en avant ma reconversion professionnelle (15 ans dans la métallurgie → développement web)
- ✅ Déployer le site en ligne sur GitHub Pages
- ✅ Garantir une expérience utilisateur optimale (accessibilité, SEO, performance)

---

## ✨ Fonctionnalités

### Navigation multi-pages

- **Accueil** : Section Hero avec présentation, aperçu des projets
- **À propos** : Parcours professionnel, timeline, compétences transférables
- **Projets** : Présentation détaillée de Kasa et Argent Bank
- **Contact** : Informations de contact et liens sociaux

### Design et UX

- 🎨 Design moderne avec palette violet (#7C3AED) + cyan (#06B6D4)
- 📱 100% responsive (mobile, tablette, desktop)
- ✨ Animations Lottie pour dynamiser l'interface
- 🌓 Fond sombre (dark mode) pour un style moderne
- 🎭 Micro-interactions et transitions fluides

### Performance et optimisation

- ⚡ Build optimisé avec Vite
- 🖼️ Images optimisées et lazy loading
- 🔄 Routing côté client avec React Router
- 📦 Composants réutilisables et modulaires

---

## 🛠️ Technologies utilisées

### Front-end

- **React 19.2.0** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router DOM 7.12.0** - Gestion de la navigation multi-pages
- **Tailwind CSS 3.4.1** - Framework CSS utilitaire pour le styling
- **Lottie React 2.4.1** - Animations JSON légères et fluides

### Outils de développement

- **Vite 7.3.1** - Build tool rapide et moderne
- **ESLint** - Linter JavaScript pour la qualité du code
- **PostCSS & Autoprefixer** - Préprocesseur CSS
- **gh-pages 6.3.0** - Déploiement automatique sur GitHub Pages

### Design et ressources

- **Google Fonts (Inter)** - Typographie moderne
- **LottieFiles** - Animations
- **Tailwind CSS** - Système de design

---

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/jeremp62/portfolio-jeremie-palette.git

# Accéder au dossier
cd portfolio-jeremie-palette

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

---

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Build
npm run build        # Crée une version optimisée pour la production

# Preview
npm run preview      # Prévisualise la version buildée localement

# Lint
npm run lint         # Vérifie la qualité du code avec ESLint

# Déploiement
npm run deploy       # Build et déploie sur GitHub Pages
```

---

## 📁 Structure du projet

```
portfolio-jeremie-palette/
│
├── public/                     # Fichiers statiques
│   └── images/                 # Images publiques
│
├── src/
│   ├── assets/                 # Ressources (images, animations)
│   │   ├── images/             # Images des projets
│   │   └── animations/         # Animations Lottie (.json)
│   │
│   ├── components/             # Composants réutilisables
│   │   ├── Header.jsx          # Navigation principale
│   │   └── Footer.jsx          # Pied de page
│   │
│   ├── pages/                  # Pages de l'application
│   │   ├── Home.jsx            # Page d'accueil
│   │   ├── About.jsx           # Page à propos
│   │   ├── Projects.jsx        # Page projets détaillés
│   │   └── Contact.jsx         # Page contact
│   │
│   ├── data/                   # Données centralisées
│   │   └── projects.js         # Informations des projets
│   │
│   ├── App.jsx                 # Composant racine avec routing
│   ├── main.jsx                # Point d'entrée React
│   └── index.css               # Styles globaux + Tailwind
│
├── index.html                  # Template HTML
├── vite.config.js              # Configuration Vite
├── tailwind.config.cjs         # Configuration Tailwind CSS
├── postcss.config.cjs          # Configuration PostCSS
├── package.json                # Dépendances et scripts
└── README.md                   # Documentation du projet
```

---

## 🌐 Déploiement

Le site est déployé automatiquement sur **GitHub Pages** via le package `gh-pages`.

### Processus de déploiement

1. **Build de production** :

   ```bash
   npm run build
   ```

2. **Déploiement automatique** :

   ```bash
   npm run deploy
   ```

3. Le site est disponible sur :
   ```
   https://jeremp62.github.io/portfolio-jeremie-palette/#/
   ```

### Configuration GitHub Pages

- **Branch** : `gh-pages`
- **Folder** : `/ (root)`
- **Base path** : `/portfolio-jeremie-palette/`
- **Router** : HashRouter (compatible GitHub Pages)

---

## ♿ Accessibilité et SEO

### Accessibilité (WCAG 2.1)

- ✅ Navigation au clavier complète
- ✅ Contrastes de couleurs suffisants (testés avec WAVE)
- ✅ Structure sémantique HTML5
- ✅ Attributs `alt` sur toutes les images
- ✅ Labels accessibles sur les liens et boutons

### SEO

- ✅ Balises `<title>` et `<meta description>` optimisées
- ✅ Structure de titres hiérarchique (H1, H2, H3)
- ✅ URLs descriptives
- ✅ Temps de chargement optimisé
- ✅ Site 100% responsive

### Performance

- ⚡ Score Lighthouse > 90
- 🖼️ Images optimisées et compression
- 📦 Code splité et minifié
- 🚀 Build optimisé avec Vite

---

## 📊 Projets présentés

### 1. Kasa - Application de location immobilière

**Technologies** : React, React Router, Sass, Vite  
**Repo GitHub** : [github.com/jeremp62/kasa](https://github.com/jeremp62/kasa)

Application de location d'appartements avec routage dynamique, composants réutilisables, carrousel d'images et système de collapse animé.

### 2. Argent Bank - Application bancaire sécurisée

**Technologies** : React, Redux Toolkit, JWT, Swagger  
**Repo GitHub** : [github.com/jeremp62/argent-bank](https://github.com/jeremp62/argent-bank)

Application bancaire avec authentification JWT, gestion d'état Redux, routes protégées et documentation API Swagger.

---

## 👤 Auteur

**Jérémie Palette**  
Intégrateur Web Junior | Reconversion professionnelle

- 📧 Email : [palette.jeremie@live.fr](mailto:palette.jeremie@live.fr)
- 💼 LinkedIn : à venir
- 🐙 GitHub : [@jeremp62](https://github.com/jeremp62)
- 📍 Localisation : Boulogne-sur-Mer (62) | Mobilité : Lille

---

## 🙏 Remerciements

- **OpenClassrooms** - Formation Développeur Web
- **LottieFiles** - Animations
- **Unsplash** - Images de qualité
- **Tailwind CSS** - Framework CSS
- **React Community** - Documentation et support

---
