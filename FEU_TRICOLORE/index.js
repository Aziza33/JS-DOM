// Exercice II : Créez un code html pour pouvoir réaliser un feu tricolore 
// qui effectuera le changement de couleur toutes les X secondes, son css et son javascript. 

const feux = document.querySelectorAll('.feu');
// const intervalle = 5sec;
let currentIndex = 0;

// function changeColor (){
//     for (let i = 0; i < feux.length;i++){
//         if (currentIndex === i){
//             feux[i].classList.add('green');
//         }else if (currentIndex === 1){
//             feux[i].classList.add('orange');
//         }else{
//             feux[i].classList.add('red');
//         }
//     }
// }
// changeColor();
// setInterval(changeColor, 2000);
// currentIndex = 1;

function changeColor (){
    for (let i = 0; i < feux.length;i++){
            feux[i].classList.remove('active'); // parcourt le tableau et enlève la classe active, tt est éteint
        }
        feux[currentIndex].classList.add('active'); // on rajoute la classe active à l'index courant
        currentIndex++; // passe à la lumière suivante
    if(currentIndex >= feux.length){
        currentIndex === 0; // on revient à 0
    }
}
setInterval(changeColor, 2000); // rappel fonction changeLight ttes les 2 sec (ms)
