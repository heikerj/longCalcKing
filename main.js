    /*<>
*/




function calc(){

let num1 = parseFloat(document.getElementById("input").value);
let num2 = parseFloat(document.getElementById("input1").value);
let result = (num2 / num1)


     



    
  

      resultado.innerHTML=(result + " " + "");
        if(isNaN(result)){

      document.getElementById("resultado").innerHTML="Por favor ingresa un número válido"
      
    }
 if (result) {
   

   resultado.innerHTML=("Tiempo:" + " " + result)



   
 }



    





      }

      
function mostrar() {

  let img = document.getElementById("img");
 
  let para = document.getElementById("brain");
  if (img.getAttribute("src") == "") {

   img.src="Sin título.png"; }

   let btn = document.getElementById("btn"); 
   
   let cerro = document.getElementById("cerrar");


   if(img.getAttribute("src") == "Sin título.png"){

     para.innerHTML="Longcalcking es una calculadora de tiempo/longitud . En el primer campo de texto colocas la cantidad de kilometros que vas a recorrer, y en el segundo campo de texto colocas a cuantos kilometros por Hora (k/H) vas a recorrer esos kilometros.En la imagen de arriba esta la medida de tiempo            (click en la imagen para cerrar)"
     cerro.innerHTML="close";



      if (img.getAttribute("src")== "Sin título.png") {
        
        cerro.onclick="cerrar()";




      }
 }

    

      } 

     

      function cerrar(){

        let img = document.getElementById("img")

       if (img.getAttribute("src") == "Sin título.png") {

          img.src = "";

          let para = document.getElementById("brain")
          let cerro = document.getElementById("cerrar")


          if (img.getAttribute("src") == "") {
          
         para.innerHTML=""
         cerro.innerHTML="Help"
            
          }
       }
          
        

       }

       
function switchSheet() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "styles.css") {

    theme.href = "dark.css";
   
  } else {
    theme.href = "styles.css";
   
  }
}
function ver(n) {
  document.getElementById("subseccion" + n).style.display = "block";
}
function ocultar(n) {
  document.getElementById("subseccion" + n).style.display = "none";
}
    
    
     

      
  



