function filtrage(categorie) { // J'ai initialisé une fonction avec parametres categories
    //selectionne tous les elements articles dans la section product-section
    var articles = document.querySelectorAll('#products article');
    //je parcours chaque produit dans la liste articleS 
    articles.forEach(produit => {
        console.log(produit);
        //si categorie est strictement = à all ou si produit possède la classe de la categorie selectionnée
        if (categorie === 'all' || produit.classList.contains(categorie)) {
            //on affiche le produit (on enleve la classe hide)
            produit.classList.remove('hide');
        } else {
            //on masque le produit (on add la classe hide)
           produit.classList.add('hide'); 
        }

    });

}
