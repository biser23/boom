let numeroMaquina;
let numeroUsuario;
const elegirNumero = document.getElementById('userInput');
elegirNumero.addEventListener('click', () => {
    var tiempo=6;
var atras = setInterval(function(){ 
   if(tiempo < 1)
      clearInterval(id);
   else
   {
      tiempo=tiempo-1; 
      document.getElementById('countdown').innerHTML=tiempo; 
   }
}, 1000);

});

const reiniciar = document.getElementById("restart");
const cuentaAtras = document.getElementById("restart");
reiniciar.addEventListener("click", () =>{
    countdown.innerHTML = ``;
});

let numero1;
let numero2;
let numero3;
let max = 3;
let min = 1;
let edad1 = Math.random() * (max - min) + min;
edad1 = Math.trunc(edad1);
let edad2 = Math.random() * (max - min) + min;
edad2 = Math.trunc(edad2);
let edad3 = Math.random() * (max - min) + min;
edad3 = Math.trunc(edad3);

const numeroPromesa1 = new Promise((resolve) => {
  setTimeout(() => {
    numero1 = edad1;
    resolve(numero1);
  }, 6000);
});

const numeroPromesa2 = new Promise((resolve) => {
  setTimeout(() => {
    numero2 = edad2;
    resolve(numero2);
  }, 7000);
});

const numeroPromesa3 = new Promise((resolve) => {
  setTimeout(() => {
    numero3 = edad3;
    resolve(numero3);
  }, 8000);
});

numeroPromesa1
  .then((numero) => {
    console.log('Tu número es " " en comparación a la máquina', numero);
    return numeroPromesa2;
  })
  .then((numero) => {
    console.log('Tu número es " " en comparación a la máquina', numero);
    return numeroPromesa3;
  })
  .then((numero) => {
    console.log('Tu número es " " en comparación a la máquina', numero);
  });

