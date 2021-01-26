const foo = document.querySelector(".winner-animation");
const bar = document.querySelector(".result__flex-container");

const foo2 = document.querySelectorAll(".winner-animation")[1];
const bar2 = document.querySelectorAll(".result__flex-container")[1];

const ab = document.querySelector(".result__animated-box");

bar.addEventListener("click", function() {
   foo.classList.toggle("winner-animation--visable");
   ab.style.display = "block";
});
// foo.classList.add("winner-animation--enable");
// foo.classList.remove("winner-animation--disable")
console.log(foo.classList);
console.log(bar);

bar2.addEventListener("click", function() {
   // foo2.classList.toggle("winner-animation--visable");
   foo2.style["box-shadow"] = "0px 0px 0px 50px rgba(110, 120, 150, 0.05), 0px 0px 0px 120px  rgb(80, 80, 100, 0.1), 0px 0px 0px 180px rgb(90, 90, 90, 0.1)";
   ab.style.display = "block";
});
// foo.classList.add("winner-animation--enable");
// foo.classList.remove("winner-animation--disable")
console.log(foo2.classList);
console.log(bar2);

let z = document.querySelector(".animated-box__btn");
let r = document.querySelector(".rules");
let popup = document.querySelector(".rules-popup");
let x = document.querySelector(".rules-popup__close-btn");
let b = document.querySelector(".board");
let rab = document.querySelector(".result");

z.addEventListener("click", function() {
   location.reload();
});

r.addEventListener("click", function() {
   popup.classList.add("rules-popup--visable");

});

x.addEventListener("click", function() {
   popup.classList.remove("rules-popup--visable");
});

b.addEventListener("click", function() {
   b.style.display = "none";
   rab.style.display = "flex";
});


// const kamień = document.querySelector(".btn1");
// const papier = document.querySelector(".btn2");
// const nożyczki = document.querySelector(".btn3");
// const header = document.querySelector("h1");
// const pkt = document.querySelector(".score");
// const paraK = document.querySelector(".parak");
// let pktKomputera = localStorage.getItem('pktKomputer');
// let pktGracza = localStorage.getItem('pktGracz');


// window.onload= punkty();

// kamień.addEventListener("click", function() {
//    wyborKomputera("kamień");
// });
// papier.addEventListener("click", function() {
//    wyborKomputera("papier");
// });
// nożyczki.addEventListener("click", function() {
//    wyborKomputera("nożyczki");
// });


// function wyborKomputera(wyborG) {
//    const wybory = ["kamień", "papier", "nożyczki"];
//    const wyborK = wybory[Math.floor(Math.random() * 3)];
//    const imgk = document.querySelector(".imgK");
//    paraK.textContent = wyborK;
//    imgk.src = "img/" + wyborK + ".png";
//    imgk.alt = wyborK;
//    imgk.title = wyborK;
//    wynik(wyborG, wyborK);
// }

// /*
// r bije s
// p bije r
// s bije p

// rp kw
// rs gw

// pr gw
// ps kw

// sr kw
// sp gw

// */



// function wynik(wyborGracz, wyborKomputera) {
//    if (wyborGracz === wyborKomputera) header.innerText = "Remis!";
//    else if (wyborGracz === "kamień" && wyborKomputera === "papier" || wyborGracz === "papier" && wyborKomputera === "nożyczki" || wyborGracz === "nożyczki" && wyborKomputera === "kamień") {
//       header.innerText = "Komputer wygrał!";
//       pktKomputera++;
//       localStorage.setItem('pktKomputer', pktKomputera);
//    } else {
//       header.innerText = "Brawo wygrałeś!";
//       pktGracza++;
//       localStorage.setItem('pktGracz', pktGracza);
//    }
//    punkty();
// }

// function punkty() {
//    if(pktGracza===null) pktGracza = 0;
//    if(pktKomputera===null) pktKomputera = 0;

//    pkt.innerText = pktGracza + " - " + pktKomputera;
// }