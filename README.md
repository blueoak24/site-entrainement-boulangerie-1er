# Site vitrine — Boulangerie Martin (projet d'entraînement)

Site vitrine fictif réalisé en HTML/CSS/JS pur, sans framework ni dépendance,
dans le cadre d'un apprentissage du développement web avec Claude Code.

⚠️ Projet d'entraînement : "Boulangerie Martin" est un client fictif,
imaginé à partir d'un cahier des charges rédigé pour l'exercice.

## Pages du site

- **Accueil** — diaporama photo, présentation, atouts de la boulangerie
- **Produits** — gamme de pains, viennoiseries et pâtisseries en cartes
- **À propos** — histoire de la boulangerie, galerie photo (lightbox)
- **Contact** — horaires, adresse, carte Google Maps

## Fonctionnalités

- Diaporama photo automatique sur l'accueil
- Animations d'apparition au scroll (Intersection Observer, effet cascade)
- Galerie photo cliquable (lightbox)
- Menu burger responsive
- Effet de soulignement animé sur la navigation
- Bouton retour en haut de page
- Balises meta description par page (SEO)

## Stack technique

- HTML5 sémantique
- CSS3 (mobile-first, Flexbox/Grid, variables CSS)
- JavaScript vanilla (aucune librairie)
- Polices : Fraunces (titres) et Inter (texte), via Google Fonts

## Lancer le site en local

Aucune installation nécessaire.

1. **Ouverture directe** : double-cliquez sur `index.html`
2. **Ou via un serveur local** (optionnel) :
```bash
   python -m http.server 8000
```
   Puis ouvrez [http://localhost:8000](http://localhost:8000)

## Structure du projet

```
├── index.html
├── produits.html
├── a-propos.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```
