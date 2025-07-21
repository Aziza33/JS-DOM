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

// ................  EXERCICE CLASS COURS CDA REPEAT  .......................................

// class Personnage {
//   constructor (nom, categorie, puissance){
//     this.nom = nom;
//     this.categorie = categorie;
//     this.puissance = puissance
//   }

//   // A terminer afficherPersonnage(){
//   //  return personnage;
//   // }
// }

// class Vampire extends Personnage {
  
//   constructor (nom, categorie, puissance, origine, age){
//     super(nom, categorie, puissance);
//     this.origine = origine;
//     this.age = age;
//   }
//   afficherVampire(){
//    return (console.log(`Voici les caractéristiques de ${this.nom} : ${this.categorie}, ${this.puissance}, ${this.origine}, ${this.age}`));
//   }
// }

// // const vampire = new Vampire('Dracula', 'Vampire', '1000', 'Pensylvannie', '3000 ans');
// const dracula = (['Dracula', 'Vampire', '1000', 'Pensylvannie', '3000 ans']);

// const vampire = new Vampire(...dracula);

// // console.log(this.nom, this.categorie, this.puissance);

// vampire.afficherVampire(vampire);



// .......................  EXERCICE JS UD  .......................................

// number ou parseInt pour transformer le prompt en nombre
function add(num1, num2){
return num1 + num2;
}
function multiply(num1, num2){
return num1 * num2;
}
function substraction(num1, num2){
return num1 - num2;
}
function divide(num1, num2){
  if (num2 === 0){
    throw new Error ("On ne peut pas diviser par 0.");
  }
return num1 / num2;
}

let restart = false;

do{

do {
  var choice = Number(prompt(`Que souhaitez-vous faire ?\n1.Addition \n2-Multiplication\n3-Soustraction\n4-Division\n`));
}while (choice !=1 && choice !=2 && choice !=3 && choice !=4);

do {
  var num1 = Number(prompt("Entrez un premier nombre"));
  var num2 = Number(prompt("Entrez un deuxième nombre"));
}while(isNaN(num1) || isNaN(num2));

try {
  switch(choice){
  case 1:
    var result = add(num1, num2);
    break;
    case 2:
      var result = multiply(num1, num2);
      break;
    case 3:
      var result = substraction(num1, num2);
      break;
    case 4:
      var result = divide(num1, num2);
      break;
      default:
        throw new Error("Une erreur est survenue.");       
}
alert("Voici le résultat : " + result);

} catch (error) {
  alert(error);
}
restart = confirm("Souhaitez-vous recommencer un calcul ?");
} while (restart);



  // let nombre1 = prompt("Entrez un premier nombre");
// let nombre2 = prompt("Entrez un deuxième nombre");

  // switch (choice){
  // case(1):
  // alert("Le résultat est : " + (nombre1 + nombre2));
  // break;
  // case(2):
  //   alert("Le résultat est : " + (nombre1 * nombre2));
  // break;
  // case(3):
  //   alert("Le résultat est : " + (nombre1 - nombre2));
  // break;
  // case(4):
  //   alert("Le résultat est : " + (nombre1 / nombre2));
  // break;
  // };




//  ma façon à tester
// do {
  // var choice = Number(prompt(`Que souhaitez-vous faire ?\n1.Addition \n2-Multiplication\n3-Soustraction\n4-Division\n`));
// let nombre1 = prompt("Entrez un premier nombre");
// let nombre2 = prompt("Entrez un deuxième nombre");

  // switch (choice){
  // case(1):
  // alert("Le résultat est : " + (nombre1 + nombre2));
  // break;
  // case(2):
  //   alert("Le résultat est : " + (nombre1 * nombre2));
  // break;
  // case(3):
  //   alert("Le résultat est : " + (nombre1 - nombre2));
  // break;
  // case(4):
  //   alert("Le résultat est : " + (nombre1 / nombre2));
  // break;
  // };

// }while (choice !=1 && choice !=2 && choice !=3 && choice !=4);

