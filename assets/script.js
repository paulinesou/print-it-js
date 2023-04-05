const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"bullet": 1
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"bullet": 2
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"bullet": 3
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"bullet": 4
	}
]
// Etape 1 création variable compteur

let compteur = 0

// Etape 2 : Ajout event listener fleche gauche

const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", prev);

function prev() {
	document.querySelector(".banner-img").src="./assets/images/slideshow/"+slides.length;[compteur -1].image;
	document.querySelector(".banner-desc").innerHTML=slides[compteur -1].tagLine;
	}


// Etape 2 : Ajout event listener fleche droite

const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", next);

function next() {
	document.querySelector(".banner-img").src="./assets/images/slideshow/"+slides[compteur +1].image;
	document.querySelector(".banner-desc").innerHTML=slides[compteur + 1].tagLine;
	// document.querySelector(".dot_selected")=slides[compteur].bullet;
	}

// Etape 3 : Boucle pour compter le nombre d'element du tableau slides

// slides[0, 1, 2, 3];
// for (var i = 0; i < slides.length; i++) {
//   console.log(slides[i].image);
// }

// Etape 4 : Modifier le slide au clic sur le bouton




// Etape 5 : Mettre en place le défilement infini
