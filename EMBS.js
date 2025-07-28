// Fonction pour afficher une section spécifique
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  const menuItems = document.querySelectorAll('nav li');
  const choisirSection = document.getElementById('choisir');

  sections.forEach(section => {
    section.style.display = section.id === sectionId ? 'block' : 'none';
  });

  // Gérer la section "Pourquoi nous choisir ?" uniquement sur Accueil
  if (sectionId === 'accueil') {
    choisirSection.style.display = 'block';
  } else {
    choisirSection.style.display = 'none';
  }

  // Mettre à jour la couleur active du menu
  menuItems.forEach(item => {
    item.classList.remove('active');
  });

  const clickedItem = Array.from(menuItems).find(
    li => li.id === sectionId
  );
  if (clickedItem) clickedItem.classList.add('active');
}

// Menu hamburger (responsive)
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Slider automatique
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 3000); // Changer d’image toutes les 3 secondes

// Bouton retour en haut
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});