import kasaImage from '../assets/images/kasa.png';
import argentBankImage from '../assets/images/argentBankLogo.png';

export const projects = [
  {
    id: 1,
    title: "Kasa",
    image: kasaImage,
    description: "Application de location immobilière développée avec React. Gestion du routage dynamique, composants réutilisables, carrousel d'images et système de collapse animé pour les descriptions.",
    tags: ["React", "React Router", "Sass", "Vite", "Responsive"],
    link: "https://github.com/jeremie-palette/kasa",
    fullDescription: {
      context: "Kasa, leader français de la location d'appartements entre particuliers avec plus de 500 annonces quotidiennes, souhaitait moderniser son site web vieillissant développé en ASP.NET. Ma mission consistait à refondre entièrement le front-end en créant une application React moderne, responsive et fidèle aux maquettes Figma fournies.",
      objectives: [
        "Transformer un fichier JSON en application React complète et interactive",
        "Implémenter un système de routage dynamique avec gestion des erreurs 404",
        "Créer une architecture de composants réutilisables et maintenables",
        "Garantir une expérience utilisateur fluide avec animations et transitions",
        "Assurer une compatibilité desktop, tablette et mobile"
      ],
      stack: ["React.js", "React Router v6", "Vite", "Sass (SCSS)", "JavaScript ES6+"],
      skills: [
        "Architecture front-end avec structuration claire du projet",
        "Gestion d'état React avec useState pour les interactions",
        "Routing avancé avec loaders pour le préchargement des données",
        "Création de composants réutilisables (Card, Collapse, Slideshow, Banner)",
        "Animations CSS avec transitions fluides et gestion de hauteur dynamique",
        "Responsive design adaptatif sur tous les écrans"
      ],
      results: [
        "Application 100% fonctionnelle avec navigation fluide et zéro erreur console",
        "Carrousel d'images avec navigation bouclée (première ↔ dernière image)",
        "Système de collapse animé pour description et équipements",
        "Redirection automatique vers page 404 pour les routes inexistantes",
        "Code propre et modulaire respectant les conventions React"
      ],
      improvements: [
        "Intégration d'une vraie API REST pour remplacer le fichier JSON statique",
        "Ajout d'un système de filtres et recherche par ville/prix",
        "Implémentation d'un système de favoris avec localStorage",
        "Optimisation SEO avec React Helmet pour les métadonnées dynamiques",
        "Ajout de tests unitaires avec Jest et React Testing Library"
      ]
    }
  },
  {
    id: 2,
    title: "Argent Bank",
    image: argentBankImage,
    description: "Application bancaire sécurisée avec système d'authentification JWT, gestion d'état centralisée avec Redux Toolkit, routes protégées et gestion des transactions utilisateur.",
    tags: ["React", "Redux", "API REST", "JWT", "React Router"],
    link: "https://github.com/jeremie-palette/argent-bank",
    fullDescription: {
      context: "Argent Bank, une banque en ligne innovante, souhaitait développer un tableau de bord utilisateur moderne et sécurisé. En tant que développeur front-end, j'ai collaboré avec l'équipe back-end pour créer une interface d'authentification robuste et un système de gestion de transactions, tout en documentant les endpoints API nécessaires via Swagger pour la phase 2.",
      objectives: [
        "Implémenter un système d'authentification sécurisé avec gestion de session",
        "Créer un dashboard utilisateur personnalisé et interactif",
        "Centraliser l'état de l'application avec Redux pour une gestion cohérente",
        "Permettre la visualisation et modification des transactions",
        "Concevoir une documentation API Swagger pour les fonctionnalités futures"
      ],
      stack: ["React.js", "Redux Toolkit", "React Router v6", "Vite", "Swagger", "localStorage"],
      skills: [
        "Redux avancé avec création de slices, reducers et store configuration",
        "Authentification sécurisée avec gestion du token JWT et routes privées",
        "Persistance de données avec synchronisation Redux ↔ localStorage",
        "Gestion d'API avec requêtes POST/GET/PATCH et traitement des erreurs",
        "Architecture modulaire avec composants Account et TransactionItem réutilisables",
        "Documentation API REST avec définition des endpoints en Swagger",
        "Résolution créative face aux contraintes de l'API backend"
      ],
      results: [
        "Système d'authentification 100% fonctionnel avec connexion/déconnexion",
        "Modifications du pseudo propagées instantanément dans toute l'application",
        "Transactions modifiables localement avec persistance localStorage",
        "Routes protégées avec redirection automatique si non authentifié",
        "Documentation Swagger complète pour 4 endpoints transactions",
        "Code respectant les principes Green Code avec composants découplés"
      ],
      improvements: [
        "Synchronisation complète des transactions avec le back-end",
        "Implémentation de cookies httpOnly pour sécuriser le stockage du token",
        "Ajout de notifications en temps réel (nouveaux virements, alertes)",
        "Amélioration de l'accessibilité (ARIA, navigation clavier)",
        "Développement d'une version mobile native avec React Native"
      ]
    }
  },
  {
    id: 3,
    title: "à Venir",
    description: "Description du projet",
    tags: ["React", "Node.js"],
    link: "https://github.com/",
    fullDescription: {
    context: "à Venir",
    objectives: ["à Venir"],
    stack: ["à Venir"],
    results: ["à Venir"],
  }
}
];

export const skills = {
  frontend: [
    "HTML5",
    "CSS3 / Sass",
    "JavaScript ES6+",
    "React.js",
    "Redux / Redux Toolkit",
    "Tailwind CSS"
  ],
  tools: [
    "Git / GitHub",
    "Vite / npm",
    "React Router",
    "Figma",
    "Swagger",
    "VS Code"
  ],
  practices: [
    "Responsive Design",
    "Accessibilité WCAG",
    "SEO",
    "Green Code",
    "API REST",
    "Gestion de projet Agile"
  ]
};