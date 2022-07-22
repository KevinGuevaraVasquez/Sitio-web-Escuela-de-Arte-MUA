

var text = document.getElementById("textito");
var str = text.innerHTML;

text.innerHTML="";

var speed = 200;
var i = 0;

function typeWriter(){
    if(i<str.length){
        text.innerHTML+=str.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

setTimeout(typeWriter,speed);



var i,text;
     i=0;
     text="EL ARTE NOS PERMITE ENCONTRAR Y PERDERNOS AL MISMO TIEMPO";

     function typing(){
      if(i<text.length){
          document.getElementById("text").innerHTML += text.charAt(i);
          i++;
          setTimeout(typing,70);

      }
     }


     typing();