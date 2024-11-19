
// Sélection des éléments de la bannière
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

// Tableau des slides
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0;

// Fonction pour mettre à jour l'image, le texte, et le point actif
function updateBanner() {
    const slide = slides[currentIndex];
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    bannerTagLine.innerHTML = slide.tagLine;

    // Met à jour les points actifs
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}

// Création des points pour chaque image du carrousel
slides.forEach((_, index) => {
    const dot = document.createElement('div');  // Création d'un élément HTML <div> pour représenter un point.
    dot.classList.add('dot'); // Ajout de la classe "dot" à chaque point, pour le styliser via le CSS.
    
    // Ajout de la classe "dot_selected" pour le premier point
    if (index === 0) { // Test conditionnel : vérifie si l'index du point en cours est égal à 0.
        dot.classList.add('dot_selected'); // Si c'est vrai (première image), ajoute une classe spécifique pour le mettre en surbrillance.
    }
    
    // Ajout du point au container
    dotsContainer.appendChild(dot); // Ajoute le point créé dans le conteneur principal des points (dotsContainer).
});

// Fonction pour aller à l'image précédente
function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateBanner();
    console.log("Image précédente affichée");
}

// Fonction pour aller à l'image suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateBanner();
    console.log("Image suivante affichée");
}

// Clic sur la flèche gauche
arrowLeft.addEventListener('click', previousSlide);

// Clic sur la flèche droite
arrowRight.addEventListener('click', nextSlide);