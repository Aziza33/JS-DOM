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

// let prenoms = ["Marie", "Marc", "Paul", "Sophie"];

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

// let personnes = [
//   { nom: "Luc", ville: "Paris" },
//   { nom: "Emma", ville: "Lyon" },
//   { nom: "Tom", ville: "Marseille" }
// ];
// // ➤ Affiche : Luc, Emma, Tom
// let names = personnes.keys((p => p.nom.value));
// alert("Les noms : " + JSON.stringify(names));


// const getSeconds = (minutes) => minutes * 60
// console.log(getSeconds(4))

// const getSeconds = hours => hours*60*60
// console.log(getSeconds(1))

// const calculateCircle = radius => (radius * 2) * Math.PI
// console.log(calculateCircle(6));

// const getRandomInteger = () => Math.floor(Math.random() *100)
// console.log(getRandomInteger())


class Personnage {
  constructor (nom, categorie, puissance){
    this.nom = nom;
    this.categorie = categorie;
    this.puissance = puissance
  }

  // A terminer afficherPersonnage(){
  //  return personnage;
  // }
}

class Vampire extends Personnage {
  
  constructor (nom, categorie, puissance, origine, age){
    super(nom, categorie, puissance);
    this.origine = origine;
    this.age = age;
  }
  afficherVampire(){
   return (console.log(`Voici les caractéristiques de ${this.nom} : ${this.categorie}, ${this.puissance}, ${this.origine}, ${this.age}`));
  }
}

// const vampire = new Vampire('Dracula', 'Vampire', '1000', 'Pensylvannie', '3000 ans');
const dracula = (['Dracula', 'Vampire', '1000', 'Pensylvannie', '3000 ans']);

const vampire = new Vampire(...dracula);

// console.log(this.nom, this.categorie, this.puissance);

vampire.afficherVampire(vampire);