var slika = document.getElementById("pocetnasl");

slika.addEventListener('mouseover', promeni);
slika.addEventListener('mouseout',vrati);

function promeni(){
    slika.src="images/Slicka2.jpg";
}
function vrati(){
    slika.src="images/Slicka.jpg";
}