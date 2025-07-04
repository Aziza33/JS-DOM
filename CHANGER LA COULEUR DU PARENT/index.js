
// On récupère tous les boutons de la page
  const buttons = document.getElementsByTagName("button");

  // Fonction appelée quand un bouton est cliqué
  function changerCouleur(event) {
    // On accède au bouton cliqué via event.target
    const boutonClique = event.target;
    // On accède au parent <div> de ce bouton
    const parentDiv = boutonClique.parentNode;
    // On change la couleur de fond
    parentDiv.style.backgroundColor = "yellow";
  }

  // On parcourt les boutons pour leur attribuer la même fonction
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = changerCouleur;
  }






// let buttons = document.getElementsByTagName("button");
// for (let i=0; i<buttons.length; i++){
//     buttons[i].onclick = function(e){
//         buttons.target.parentNode.style.backgroundColor = ('yellow');
//     }
// }

