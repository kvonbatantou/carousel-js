# Carrousel Ultra-Optimisé

Un carrousel responsive, fluide et optimisé avec navigation par boutons, indicateurs interactifs, et swipe tactile/souris. Parfait pour mettre en valeur des images de manière élégante.

## 🚀 Fonctionnalités

- Navigation fluide avec animation
- Boutons "Suivant" et "Précédent"
- Indicateurs interactifs en bas
- Swipe au doigt (mobile) ou à la souris (desktop)
- Lecture automatique avec pause lors de l'interaction
- Responsive et adaptatif

## 📁 Structure des fichiers

arousel-js/
├── index.html # Fichier HTML principal
├── main.js # Script JavaScript pour la logique du carrousel
└── src/
├── paire1.jpg # Image 1 du carrousel
├── paire2.jpg # Image 2 du carrousel
└── paire3.jpg # Image 3 du carrousel

## 🔧 Utilisation

1. Clone ou télécharge ce dépôt.
2. Place tes propres images dans le dossier `src/` ou utilise celles existantes.
3. Ouvre `index.html` dans ton navigateur.

## 📸 Aperçu

![Aperçu du Carrousel](./preview.png) <!-- Tu peux ajouter une capture d'écran si besoin -->

## 🧠 Logique JavaScript

Le fichier `main.js` contient une classe `Carousel` qui :

- Gère les événements (clic, swipe, resize)
- Met à jour dynamiquement les indicateurs
- Anime la transition entre les images

## ✅ À savoir

- Le carrousel démarre automatiquement à l'ouverture de la page.
- L'utilisateur peut interagir à tout moment sans conflit avec l'auto-play.
- Le code est pur HTML/CSS/JS sans aucune bibliothèque externe.

## ✨ Personnalisation

Tu peux :

- Modifier le délai entre les slides dans `main.js` (`this.autoPlayDelay`)
- Ajouter ou supprimer des images dans le HTML
- Changer le style directement dans le `<style>` de `index.html`

## 📄 Licence

Ce projet est libre de droits. Tu peux le modifier, le partager ou l’intégrer dans tes projets.

---

Développé avec ❤️ par [Ton Nom ou Ton Pseudo]
