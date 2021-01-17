const kamień = document.querySelector(".btn1");
const papier = document.querySelector(".btn2");
const nożyczki = document.querySelector(".btn3");
const header = document.querySelector("h1");
const pkt = document.querySelector(".score");
const paraK = document.querySelector(".parak");
let pktKomputera = localStorage.getItem('pktKomputer');
let pktGracza = localStorage.getItem('pktGracz');


window.onload= punkty();

kamień.addEventListener("click", function() {
   wyborKomputera("kamień");
});
papier.addEventListener("click", function() {
   wyborKomputera("papier");
});
nożyczki.addEventListener("click", function() {
   wyborKomputera("nożyczki");
});


function wyborKomputera(wyborG) {
   const wybory = ["kamień", "papier", "nożyczki"];
   const wyborK = wybory[Math.floor(Math.random() * 3)];
   const imgk = document.querySelector(".imgK");
   paraK.textContent = wyborK;
   imgk.src = "img/" + wyborK + ".png";
   imgk.alt = wyborK;
   imgk.title = wyborK;
   wynik(wyborG, wyborK);
}

/*
r bije s
p bije r
s bije p

rp kw
rs gw

pr gw
ps kw

sr kw
sp gw

*/



function wynik(wyborGracz, wyborKomputera) {
   if (wyborGracz === wyborKomputera) header.innerText = "Remis!";
   else if (wyborGracz === "kamień" && wyborKomputera === "papier" || wyborGracz === "papier" && wyborKomputera === "nożyczki" || wyborGracz === "nożyczki" && wyborKomputera === "kamień") {
      header.innerText = "Komputer wygrał!";
      pktKomputera++;
      localStorage.setItem('pktKomputer', pktKomputera);
   } else {
      header.innerText = "Brawo wygrałeś!";
      pktGracza++;
      localStorage.setItem('pktGracz', pktGracza);
   }
   punkty();
}

function punkty() {
   if(pktGracza===null) pktGracza = 0;
   if(pktKomputera===null) pktKomputera = 0;
   
   pkt.innerText = pktGracza + " - " + pktKomputera;
}