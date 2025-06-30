
// au clic sur le bouton
let bouton = document.getElementById('btn').onclick = function ajouterClasse() {
// on rajoute la classe hidden

const elements = document.getElementsByClassName('spoiler');

for (let i = 0; i<elements.length; i++){
    elements[i].classList.add('hidden');
}

}


// 