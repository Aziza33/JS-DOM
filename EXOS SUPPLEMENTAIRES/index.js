//          EXERCICE 1 
// let prenoms = ["Ali", "Julie", "Max", "Lea"];
// let trouve = false;
// // ➤ Affiche "Trouvé !" si "Lea" est dans le tableau.
// for (let i=0; i<prenoms.length; i++){
//     if (prenoms[i] === ("Lea")){
//         alert('Trouvé !');
//         trouve = true;
//     }
// } 
// if (!trouve){
//         alert("Sorry !")
// }

// let prenoms = ["Ali", "Julie", "Max", "Lea"];

// if (prenoms.includes("Lea")){
//     alert("Trouvé")
// }else{
//     alert("Sorry")
// }

//          EXERCICE 2

let prenoms = ["Marie", "Marc", "Paul", "Sophie"];

// // ➤ Affiche tous les prénoms qui commencent par "M"
// for (let i =0; i<prenoms.length; i++){
//     if (prenoms[i].startsWith("M")){
//     alert("Voici les prénoms qui commencent par M " + prenoms[i])
// };
// }

// prenoms.forEach(prenom => {
//         if(prenom.startsWith("M") ){
//             alert("Prénoms : " + prenom);
//         }       
// })

// EXERCICE 2 ESSAI TERNAIRE OK

// let result = prenoms.filter(p => p.startsWith("Z")).join(", ");
// alert(result ? "Voici les prénoms " + result : "Aucun prénom ne commence par Z.");

//  EXERCICE 3 TROUVER UNE PERSONNE DANS UN TABLEAU D'OBJETS

// let personnes = [
//   { nom: "Dupont", age: 30 },
//   { nom: "Durand", age: 22 },
//   { nom: "Martin", age: 28 }
// ];
// ➤ Affiche l’objet dont le nom est "Durand"

// let result = personnes.find((personne) => personne.nom === "Durand");
// alert("Voici le résultat " + JSON.stringify(result));


// EXERCICE 4 : Afficher uniquement les noms d’un tableau d’objets

let personnes = [
  { nom: "Luc", ville: "Paris" },
  { nom: "Emma", ville: "Lyon" },
  { nom: "Tom", ville: "Marseille" }
];
// ➤ Affiche : Luc, Emma, Tom
let names = personnes.keys((p => p.nom.value));
alert("Les noms : " + JSON.stringify(names));






