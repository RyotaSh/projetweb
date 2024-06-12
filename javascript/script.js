var input = document.getElementById("myInput");

// image a trier
var images = document.querySelectorAll(".descriperso");

// detect les entree de l'utilisateur
input.addEventListener("keyup", function() {
    // recupere les entree et met en minuscule
    var filter = input.value.toLowerCase();

    
    images.forEach(function(image) {
        // recupere le texte de l'alt
        var altText = image.getAttribute("alt").toLowerCase();
        // compare l'entree et l'alt et affiche l'image si identique
        if (altText.indexOf(filter) > -1) {
            image.parentElement.style.display = "";
        } else {
            image.parentElement.style.display = "none";
        }
    });
});

function openPopup(imageSrc) {
  window.open(imageSrc, "popup", "width=400,height=400");
}



var counter= 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>5){
        counter=1;
    }
}, 5000);



document.getElementsByClassName("block_metier_1")[0].onclick = function (){afficherinfos()};
function afficherinfos(){
   var infoAlchimiste = document.getElementsByClassName("info_alchimiste")[0];
   infoAlchimiste.style.display= "block";
}