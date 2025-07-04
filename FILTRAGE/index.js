
// function filtrer(){
//     let select = document.getElementById('categorie-select');
//     let category = select.value;
//     let products = document.querySelectorAll("#produits article");

//     products.forEach(function(article){
//         if (category === "all"){
//             article.classList.remove("hidden");
//         } else if (article.classList.contains(category)){
//             article.classList.remove("hidden");
//         }else{
//         article.classList.add("hidden");
//         }
//     });
// }
// fonction filtrer avec ou

function filtrer(){
    let category = document.getElementById('categorie-select').value;
    let products = document.querySelectorAll('#produits article');
    products.forEach(function (article){
        if (category === 'all' || (article.classList.contains(category))){
            article.classList.remove('hidden');
        }else{
            article.classList.add('hidden');
        }
    });
}

// let answer = prompt("Entrer un prenom ");
// function afficher(){
//           let prenoms =["Maxime", "Karim", "Sabrina", "Arnaud", "Julen"];

//     prenoms.forEach(prenom =>{
//         if (answer.classList.contains(prenom) ){
//             alert( "Voici le prénom : " + prenom)
//         }else{   
//            alert("Erreur ! Ce prénom n'existe pas.")
 
//         }       
//     });
// }

// let answer = prompt("Entrer un prenom ");
// let prenoms =["Maxime", "Karim", "Sabrina", "Arnaud", "Julen"];
// let trouve = false;

//     prenoms.forEach(prenom =>{
//         if (answer.toLowerCase() === prenom.toLowerCase()){
//             alert( "Voici le prénom : " + prenom);
//             trouve = true;
//         }
//     });

//     if (!trouve){ 
//            alert("Erreur ! Ce prénom n'existe pas.")  
//     };





    // let prenoms =["Maxime", "Karim", "Sabrina", "Arnaud", "Julen"];
    // prenoms.forEach(prenom => {
    //     alert ("Voici le prénom " + prenom);
    // });








// let selectCategory = document.getElementById('categorie-select');
// let result = document.getElementById('produits');

// let selectCategory = document.getElementById('categorie-select').onchange = function filtrer (){

//     result.textContent = 'Article sélectionné : '
// }


// function filtrer (){
// let result = document.getElementById('produits');
//             document.getElementById('produits').onchange = function(event){
//                 event.target.value.textContent;
//         };
//     }  
// filtrer();

// function changerBackground (){
// let paragraphes = document.getElementsByTagName('p');
//         for (let i=0; i<paragraphes.length; i++){
//             paragraphes[i].onclick = function(event){
//                 event.target.style.backgroundColor("yellow");
//         };
//     }  
// }
// changerBackground();



// console.log(category);

// function filtrer(){
//     let product = document.querySelectorAll('#produits article').value;
//     array.forEach(element => {
        
//     });
//     onchange = function filtrer() {
//         // if (category.value === ('homme') && product.value === ('homme')){
//         //     return product.value;
//         // };

//     switch (product) {
//     case homme:
//        alert(product.value);
//         break;
//     case femme:
//        alert(document.getElementById('femme').value);
//         break;
//     case enfant:
//        alert(document.getElementById('enfant').value);
//         break;
//     case all:
//     //     return 
//     default: 
//     alert("Hey Bitch, you've done something wrong.")
//         break;
// }
// }
// }
    

