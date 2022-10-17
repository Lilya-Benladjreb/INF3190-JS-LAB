function changerPolice() {
    var paras = document.getElementsByTagName("p");

    for (var i = 0; i < paras.length; i++) {
        var para = paras [i];
        para.style.fontFamily = 'Monaco'
    }
}

function changerOrdre() {
    var paras = document.getElementsByTagName("p");

    //enregistrer les texts de chacun des paragraphes dans des variables
    var para1 = paras[0];
    var text1 = para1.innerText;

    var para2 = paras[1];
    var text2 = para2.innerText;

    var para3 = paras[2];
    var text3 = para3.innerText;

    //changer des texts de positions dans le array
    para1.innerText = text2;
    para2.innerText = text3;
    para3.innerText = text1;

}

function toggleTitre() {
    var titre = document.getElementById("titre1");

    //verifier si le titre est invisible
    if(titre.style.display == "none"){
        //faire apparaitre le titre
        titre.style.display = "initial";
    }else{
        //sinon, le rendre invisible
        titre.style.display = "none";
    }
}

function changerCouleur() {
    var titre = document.getElementById("titre1");
    
    titre.style.color = "red";

}