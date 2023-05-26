/*
Encriptador

"e" - "enter"
"i" - "imes"
"a" - "ai"
"o" - "ober"
"u" - "ufat"

*/

var vocales = ['a', 'e', 'i', 'o', 'u'];
var indicadores = ['1', '2', '3', '4', '5']
var vocalesReplace = ['ai', 'enter', 'imes', 'ober', 'ufat'];
var text;


function encrypt(){

   text= document.getElementById('ingresar-texto').value;
   
   if(text != ''){
      complementos();

      for(let i = 0; i < vocales.length ; i++)
         text = text.replaceAll(vocales[i],indicadores[i]);
      
      for(let i = 0; i < vocales.length ; i++)
         text = text.replaceAll(indicadores[i],vocalesReplace[i]);

      document.getElementById("mostrar_texto").value = text;   
   }    
    
}

function decrypt(){
      
   text= document.getElementById('ingresar-texto').value;
   
   if(text != ''){
      complementos();
      for(let i = 0; i < vocales.length ; i++)
         text = text.replaceAll(vocalesReplace[i], indicadores[i]);

      for(let i = 0; i < vocales.length ; i++)
         text = text.replaceAll(indicadores[i], vocales[i]);


      document.getElementById("mostrar_texto").value = text;
   }

}


/*
 Se tomo de base un ejemplo proporcionado por Devlaz, el cual publico una forma de restringir caracteres 
 dentro de campos en JS, el cual restringe los caracteres que podrán ser utilizados, y en caso de usar 
 caracteres no permitidos, el elemento no valido regresara como un espacio en blanco.

 Link: https://devlaz.com/restringir-caracteres-en-campos-con-javascript
*/

function validar(){

    text = document.getElementById('ingresar-texto').value;

    var salida = '';
    var caracteres = 'abcdefghijklmnñopqrstuvwxyz1234567890 ';
	
    for (let i=0; i<text.length; i++)
       if (caracteres.indexOf(text.charAt(i)) != -1) 
	     salida = salida + text.charAt(i);

    
    document.getElementById('ingresar-texto').value = salida;


}


function copy() {
   var content = document.getElementById('mostrar_texto');
    
    content.select();
    document.execCommand('copy');
 }

 function complementos(){
   document.getElementById("copy").style.display = "revert";
   document.getElementById("imgReferencia").style.display = "none";
   document.getElementById('mostrar_texto').style.backgroundColor = '#FFFFFF';
   document.getElementById("imgReferencia02").style.display = "none";
   document.getElementById("imgReferencia03").style.display = "none";
 }


