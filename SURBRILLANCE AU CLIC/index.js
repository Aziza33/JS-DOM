//     document.addEventListener("click", function(){
//     document.getElementById("stabilo").style.backgroundColor = 'yellow';
// });

//     document.addEventListener("click", function(){
//         // document.tagName(p).style.backgroundColor = 'yellow';
    
//         const element = document.getElementById("body");
// element.getElementsByTagName("p").style.backgroundColor = "yellow";
// });

// FACON 2 A CHECKER 
// document.getElementById('stabilo').onclick = function changerBackground() {
// document.p.style.backgroundColor = 'yellow';
// }

// ......................  BONUS  ............................

// let p = document.getElementsByTagName("p").onclick = function changerBackground(p){
//     for (let i=0; i<p.length; i++){
//     body.p.style.backgroundColor = "yellow";
//     }  
// }

// let paragraphe = document.getElementsByTagName("p");
// document.addEventListener("click", function(paragraphe){
//     for (let i=0; i<paragraphe.length; i++){
//     paragraphe[i].style.backgroundColor = "yellow";
//     }  
// })

function changerBackground (){
let paragraphes = document.getElementsByTagName('p');
        for (let i=0; i<paragraphes.length; i++){
            paragraphes[i].onclick = function(event){
                event.target.style.backgroundColor("yellow");
        };
    }  
}
changerBackground();

    // paragraphes[i].style.backgroundColor = "yellow";

 
//   let paragraphe = document.getElementsByTagName("p"); 
// 
// 
// paragraphe.addEventListener("click", souligner, true);


