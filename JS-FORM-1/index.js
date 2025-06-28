// let nom = document.getElementById('nom');
// let prenom = document.getElementById('prenom');
// alert(document.getElementById('nom').value + ' ' + document.getElementById('prenom').value);

// document.getElementById('mon-bouton').onclick = function direBonjour() {
//   alert('bonjour !');
// }

// CALCULATRICE

// Récupérer les éléments du DOM
let num1 = document.getElementById("premier-nombre");
let num2 = document.getElementById("deuxieme-nombre");
const bouton = document.getElementById("mon-bouton");
const resultat = document.getElementById("resultat");

// Ecouter le clic sur le bouton
bouton.addEventListener("click", function () {
  let valeur1 = parseFloat(num1.value);
  let valeur2 = parseFloat(num2.value);
  if (!isNaN(valeur1) && !isNaN(valeur2)) {
    const somme = valeur1 + valeur2;
    resultat.value = somme;
    console.log(somme);
  } else {
    resultat.value = "Erreur : entrez deux nombres valides.";
  }
});

// CALCULATRICE BIS PLUS COURT 


// num1 = parseInt(num1);
// console.log(num1);
// num2 = parseInt(num2);
// console.log(num2);
// let result = num1 + num2;
// let somme = num1 + num2;

// let res = document.getElementById('premier-nombre').parseInt(value)
//    + document.getElementById('deuxieme-nombre').parseInt(value);

// let document.getElementById('mon-bouton').onclick = function calculer(num1, num2) {
//    alert(num1 + num2);
// }
// calculer(30, 20);
// console.log(result);

//    element.addEventListener("click", myFunction);

//    document.getElementById("mon-bouton").addEventListener("click", afficher());
// document.getElementById('mon-bouton').onclick =
//    function afficher() {
// alert(result);
// document.getElementById('resultat').innerHtml(result);
//    }


// 