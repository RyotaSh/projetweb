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


function showElement(activeClass) {
    const allClasses = [
        "info_alchimiste",
        "info_bucheron",
        "info_chasseur",
        "info_mineur",
        "info_paysan",
        "info_pecheur",
        "info_cordonnier",
        "info_forgeron",
        "info_sculpteur",
        "info_bijoutier",
        "info_bricoleur"
    ];

    allClasses.forEach(className => {
        const element = document.getElementsByClassName(className)[0];
        if (element) {
            element.style.display = (className === activeClass) ? "block" : "none";
        }
    });
}

function showAlchimiste() {
    showElement("info_alchimiste");
}

function showBucheron() {
    showElement("info_bucheron");
}

function showChasseur() {
    showElement("info_chasseur");
}

function showMineur() {
    showElement("info_mineur");
}

function showPaysan() {
    showElement("info_paysan");
}

function showPecheur() {
    showElement("info_pecheur");
}

function showCordonnier() {
    showElement("info_cordonnier");
}

function showForgeron() {
    showElement("info_forgeron");
}

function showSculpteur() {
    showElement("info_sculpteur");
}

function showBijoutier() {
    showElement("info_bijoutier");
}

function showBricoleur() {
    showElement("info_bricoleur");
}