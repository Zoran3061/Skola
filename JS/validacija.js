function validacija() {
    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    var mail = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var poruka = document.getElementById('poruka').value;
    var broj = /\d/;
    var space = /\s/;
    var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{4})$/;
    
    if(ime === "" || broj.test(ime) || space.test(ime)) {
      document.getElementById('imeG').style.display = "block";
    }
    else {
      document.getElementById('imeG').style.display = "none";
    }
    if(prezime === "" || broj.test(prezime) || space.test(prezime)) {
      document.getElementById('prezimeG').style.display = "block";
    }
    else {
      document.getElementById('prezimeG').style.display = "none";
    }
    if(mail === "" || !(mail.includes("@")) || !(mail.includes("."))) {
      document.getElementById('emailG').style.display = "block";
    }
    else {
      document.getElementById('emailG').style.display = "none";
    }
    if(!(tel === "") && tel.match(phoneno)) {
      document.getElementById('telG').style.display = "none";
    }
    else {
      document.getElementById('telG').style.display = "block";
    }
    if(poruka.length<20) {
      document.getElementById('manjeKar').style.display = "block";
    }
    else {
      document.getElementById('manjeKar').style.display = "none";
    }
    if(poruka.length>50) {
      document.getElementById('viseKar').style.display = "block";
    }
    else {
      document.getElementById('viseKar').style.display = "none";
    }
}