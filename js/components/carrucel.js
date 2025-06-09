
const CARRUCEL = document.getElementById("carrucel");
const PUNTO = document.querySelectorAll(".punto")
let inicio = 0;

function moverCarrucel(){
    
        let operacion = inicio * -20
        CARRUCEL.style.transform = `translateX(${ operacion }%)`

        PUNTO.forEach(p => p.classList.remove("active"));
        PUNTO[inicio].classList.add("active");
    }

PUNTO.forEach((cadaPunto, i) => {

    cadaPunto.addEventListener("click", () => {
        inicio = i;
        moverCarrucel();
    });
});

setInterval(() => {

    inicio++;
    if (inicio >= PUNTO.length) inicio = 0;
    moverCarrucel();
}, 5000);


