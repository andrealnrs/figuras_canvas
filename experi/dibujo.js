var texto = document.getElementById("usuario");
var boton = document.getElementById("botoncito")
var d = document.getElementById("dibujito");
var hola = document.getElementById("tipoDeFigura");
boton.addEventListener("click", Empecemos);
var ancho = d.width
var lienzo = d.getContext("2d");

dibujarLiena("black", 0, 0, 300, 0);
dibujarLiena("black", 300, 0, 300, 300);
dibujarLiena("black", 300, 300, 0, 300);
dibujarLiena("black", 0, 300, 0, 0);

function Empecemos()
{
  switch (tipoDeFigura.value){
     case "cuadrado":
     dibujarCuadro()
     break;

      case "estrella":
      dibujarEstrella()
      break;

      case "flor":
      dibujarFlor()
      break;

     default:
      break;
  }
}

function dibujarLiena(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarCuadro()
{
 var lineas = parseInt(texto.value);
 var espacio = ancho / lineas;
 var l = 0;
 var yi, xf;

  for(l = 0; l < lineas; l++)
   {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLiena("blue", 0, yi, xf, 300);
    console.log("linea " + 1);
   }

   for(l = 0; l < lineas; l++)
   {
     yi = espacio * (l + 1)
     xf = espacio * l
     dibujarLiena("red", 300, yi, xf, 1);
     console.log("raya " + 1);
   }

   for(l = 0; l < lineas; l++)
   {
     yi = l * espacio
     xf = 300 - (l * espacio + espacio)
     dibujarLiena("grey", 300, yi, xf, 300);
     console.log("raya " + 1);
   }

   for(l = 0; l < lineas; l++)
   {
     yi = 300 - (l * espacio + espacio)
     xf = l * espacio
     dibujarLiena("green", 0, yi, xf, 0);
     console.log("raya " + 1);
   }
 }

 function dibujarFlor()
 {
  var lineas = parseInt(texto.value);
  var espacio = 150 / lineas;
  var l = 0;
  var yi, xf;
  var xi, yf;

  for(l = 0; l < lineas; l++)
  {
   xi = espacio * l;
   yf = espacio * (l + 1 );
   dibujarLiena("pink", xi, 0, 150, yf);
   console.log("liena " + 1);
  }

  for(l = 0; l < lineas; l++)
  {
   yi = l * espacio;
   xf = l * (espacio * 1);
   dibujarLiena("green", 0, yi, xf, 150);
   console.log("lienas " + 2);
  }

  for(l = 0; l < lineas; l++)
  {
    xi = 300 - (l * espacio + espacio);
    yf = espacio * (l * 1);
    dibujarLiena("red", xi, 0, 150, yf);
    console.log("lienas " + 3);
  }

 for(l = 0; l < lineas; l++)
 {
   yi = espacio * l;
   xf = 300 - (l * espacio + espacio)
   dibujarLiena("brown", 300, yi, xf, 150);
   console.log("linea " + 4);
 }

 for(l = 0; l < lineas; l++)
 {
   yi = espacio * l;
   xf = 300 - (l * espacio + espacio)
   dibujarLiena("brown", 300, yi, xf, 150)
   console.log("linea " + 4);
 }

 for(l = 0; l < lineas; l++)
 {
   xi = 150 - (l * espacio);
   yf = 150 + (l * espacio + espacio);
   dibujarLiena("blue", xi, 150, 0, yf);
   console.log("linea " + 5);
 }

 for(l = 0; l < lineas; l++)
 {
   xi = espacio * l;
   yf = 300 - (l * espacio + espacio)
   dibujarLiena("purple", xi, 300, 150, yf);
   console.log("linea " + 6);
 }

 for(l = 0; l < lineas; l++)
 {
   xi = 150 + (l * espacio)
   yf = 150 + (l * espacio + espacio)
   dibujarLiena("yellow", xi, 150, 300, yf);
   console.log("linea " + 7);
 }

 for(l = 0; l < lineas; l++)
 {
   yi = 150 + (l * espacio)
   xf = 150 + (l * espacio + espacio)
   dibujarLiena("orange", 150, yi, xf, 300);
   console.log("linea " + 8);
 }
}

 function dibujarEstrella()
 {
  var lineas = parseInt(texto.value);
  var espacio = 150 / lineas;
  var l = 0;
  var yi, xf;
  var xi, yf;

  for(l = 0; l < lineas; l++)
  {
   yi = espacio * l;
   xf = 150 - (l * espacio + espacio);
   dibujarLiena("pink", 150, yi, xf, 150);
   console.log("liena " + 1);
  }

  for(l = 0; l < lineas; l++)
  {
   yi = l * espacio;
   xf = 150 + (l * espacio +  espacio);
   dibujarLiena("green", 150, yi, xf, 150);
   console.log("lienas " + 2);
  }

  for(l = 0; l < lineas; l++)
  {
    yi = 300 - (l * espacio + espacio);
    xf = 150 - (l * espacio);
    dibujarLiena("red", 150, yi, xf, 150);
    console.log("lienas " + 3);
  }

  for(l = 0; l < lineas; l++)
  {
     yi = 300 - (l * espacio + espacio);
     xf = 150 + (l * espacio);
     dibujarLiena("black", 150, yi, xf, 150);
     console.log("lienas " + 4);
  }
}
