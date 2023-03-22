const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout event listener fleche gauche

const arrowLeft = document.querySelector('.arrow_left');

function showMsg() {
  console.log("gauche");
}

arrowLeft.addEventListener("click", showMsg);

// Ajout event listener fleche droite

const arrowRight = document.querySelector('.arrow_right');

function showMsg2() {
  console.log("droite");
}

arrowRight.addEventListener("click", showMsg2);

// Boucle pour compter le nombre d'element du tableau slides

slides[0, 1, 2, 3];
for (var i = 0; i < slides.length; i++) {
  console.log(slides[i]);
}
