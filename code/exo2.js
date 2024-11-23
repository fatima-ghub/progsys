function afficherChoix() 
{
    var options = document.getElementsByName("choix");
    var choixUtilisateur = "";

    for (var option of options) 
    {
        if (option.checked) 
        {
            choixUtilisateur = option.value;
            break;
        }
    }

    var resultat = document.getElementById("resultat");
    resultat.innerText = choixUtilisateur
        ? `Vous etes a l'UFR  : ${choixUtilisateur}`
        : "Veuillez sélectionner une option.";
}