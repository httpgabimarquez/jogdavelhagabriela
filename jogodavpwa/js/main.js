window.onload = () => {
  "use strict";
  if("serviceWorker" in navigator){
      navigator.serviceWorker.register("./sw.js");
  }
}

function compara(){
    setTimeout(()=> {
    var quad1 = document.getElementById("quad1").value;
    var quad2 = document.getElementById("quad2").value;   
    var quad3 = document.getElementById("quad3").value;
    var quad4 = document.getElementById("quad4").value;
    var quad5 = document.getElementById("quad5").value;
    var quad6 = document.getElementById("quad6").value;
    var quad7 = document.getElementById("quad7").value;
    var quad8 = document.getElementById("quad8").value;
    var quad9 = document.getElementById("quad9").value;

    if(quad1 !="" && quad1 == quad2 && quad2 == quad3)
    {
     window.alert(quad3 + " venceu!" );
     location.reload();
    }

    else if(quad4 !="" && quad4 == quad5 && quad5 == quad6){
    window.alert(quad6 + " venceu!" );
    location.reload();
}
            

    else if(quad7 !="" && quad7 == quad8 && quad8 == quad9){
    window.alert(quad9 + " venceu!" );
    location.reload();
    }

    else if(quad1 !="" && quad1 == quad4 && quad4 == quad7)
    {
    window.alert(quad7 + " venceu!" );
    location.reload();
}

    else if(quad2 !="" && quad2 == quad5 && quad5 == quad8){
    window.alert(quad8 + " venceu!" );
    location.reload();
}
               
        
    else if(quad3 !="" && quad3 == quad6 && quad6 == quad9)
{
    window.alert(quad9 + " venceu!" );
    location.reload();
}

      
    else if(quad1 !="" && quad1 == quad5 && quad5 == quad9){
    window.alert(quad9 + " venceu!" );
    location.reload();
}

         
    else if(quad3 !="" && quad3 == quad5 && quad5 == quad7){
    window.alert(quad7 + " venceu!" );
    location.reload();
}

     else if (quad1 !="" &&
    cel2 !="" &&
    cel3 !="" &&
    cel4 !="" &&
    cel5 !="" &&
    cel6 !="" &&
    cel7 !="" &&
    cel8 !="" &&
    cel9 !="" ){
    window.alert("Fim! Deu Velha. ");
    location.reload();
    }}
    , 50);
    }  

    function reiniciarjogo(){
        window.location.reload();
      }


