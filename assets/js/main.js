
var contenedor = document.getElementById("contenedor");
var fondo = crearDivFondo();
var contorno = crearContornoBlanco();
var porDer = crearPorteriaDer();
var porIzq = crearPorteriaIzq();
var circuloCentral = crearCentro();
var bolitaBalon = crearPelotita();


 function crearDivFondo(){
   var canchaFondo = document.createElement("div");
   canchaFondo.className = "fondito";
   return canchaFondo;
 }

 function crearContornoBlanco(){
   var canchaContornoBlanco = document.createElement("div");
   canchaContornoBlanco.className = "contorno";
   return canchaContornoBlanco;
 }

 function crearPorteriaDer(){
   var porteriaDer = document.createElement("div");
   porteriaDer.className = "porteria porteriaDerecha";
   return porteriaDer;
 }

 function crearPorteriaIzq(){
   var porteriaIzq = document.createElement("div");
   porteriaIzq.className = "porteria porteriaIzquierda";
   return porteriaIzq;
 }

 function crearCentro(){
   var circulo = document.createElement("div");
   circulo.className = "centro"
   return circulo;
 }
 function crearPelotita(){
   var pelotita = document.createElement("div");
   pelotita.className = "bolita";
   return pelotita;
 }

contenedor.appendChild(fondo);
fondo.appendChild(contorno)
fondo.appendChild(circuloCentral);
contorno.appendChild(porDer);
contorno.appendChild(porIzq);
fondo.appendChild(bolitaBalon);
