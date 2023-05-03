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
// Création variable compteur

let compteur = 0;

// Etape 2 : Ajout d'un event listener flèche gauche

const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", prev);

function prev() {
	compteur=compteur-1; // Etape 4 : retour en arrière grace au -1 au clic

	if (compteur<0){ // Etape 5 : condition qui permet le défilement infini
		compteur=3;
	}

	document.querySelector(".banner-img").src="./assets/images/slideshow/"+slides[compteur].image; // permet de changer l'image
	document.querySelector(".banner-desc").innerHTML=slides[compteur].tagLine; // permet de changer le texte 
	document.querySelector(".dot_selected").classList.remove("dot_selected"); // (étape 3) on supprime la class "dot_selected"
	document.querySelector('.dot_'+slides[compteur].bullet).classList.add("dot_selected") // (étape 3) on selectionne la class "dot_" pour l'affecter à l'image qui s'affiche avec "dot_selected"
}


// Etape 2 : Ajout d'un event listener fleche droite

const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", next);

function next() {
	compteur=compteur+1; // Etape 4 : incrémentation du compteur de +1 pour chaque clic

	if (compteur>=4){ // Etape 5 : condition qui permet le défilement infini
		compteur=0;
	}

	document.querySelector(".banner-img").src="./assets/images/slideshow/"+slides[compteur].image;
	document.querySelector(".banner-desc").innerHTML=slides[compteur].tagLine;
	document.querySelector(".dot_selected").classList.remove("dot_selected"); // (étape 3) on supprime la class "dot_selected"
	document.querySelector('.dot_'+slides[compteur].bullet).classList.add("dot_selected") // (étape 3) on selectionne la class "dot_" pour l'affecter à l'image qui s'affiche avec "dot_selected"
}