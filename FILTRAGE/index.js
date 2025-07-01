
function filtrer(){
    let select = document.getElementById('categorie-select');
    let category = select.value;
    let products = document.querySelectorAll("#produits article");

    products.forEach(function(article){
        if (category === "all"){
            article.classList.remove("hidden");
        } else if (article.classList.contains(category)){
            article.classList.remove("hidden");
        }else{
        article.classList.add("hidden");
        }
    });
}




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
    

