// Récupère le bouton burger
const menuToggle = document.querySelector('.menu-toggle');

// Récupère le menu de navigation
const navMenu = document.querySelector('nav ul');

// Au clic sur le bouton, bascule l'affichage du menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-ouverte');
});

// Diaporama de la page d'accueil
const diapos = document.querySelectorAll('.diapo');

if (diapos.length > 0) {
  let indexActuel = 0;

  setInterval(() => {
    diapos[indexActuel].classList.remove('active');
    indexActuel = (indexActuel + 1) % diapos.length;
    diapos[indexActuel].classList.add('active');
  }, 4000);
}

// Apparition en douceur des sections au scroll
const elementsApparition = document.querySelectorAll('.apparition');

if (elementsApparition.length > 0) {
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  elementsApparition.forEach((element, index) => {
    element.style.setProperty('--delai', `${index * 0.1}s`);
    observateur.observe(element);
  });
}

// Galerie / Lightbox
const photosGalerie = document.querySelectorAll('.galerie-photo');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxFermer = document.getElementById('lightbox-fermer');

if (lightbox) {
  photosGalerie.forEach((photo) => {
    photo.addEventListener('click', () => {
      lightboxImage.src = photo.src;
      lightboxImage.alt = photo.alt;
      lightbox.classList.add('ouverte');
    });
  });

  lightboxFermer.addEventListener('click', () => {
    lightbox.classList.remove('ouverte');
  });

  lightbox.addEventListener('click', (evenement) => {
    if (evenement.target === lightbox) {
      lightbox.classList.remove('ouverte');
    }
  });
}

// Bouton retour en haut
const boutonHaut = document.getElementById('retour-haut');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    boutonHaut.classList.add('visible');
  } else {
    boutonHaut.classList.remove('visible');
  }
});

boutonHaut.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
