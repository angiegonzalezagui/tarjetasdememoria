var grupoTarjeta1 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];
var grupoTarjeta2 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];
var grupoTarjeta3 = ["", "", "","","", "", "","","","","","","","","","",""];

var todasLasTarjetas = grupoTarjeta1.concat(grupoTarjeta2);
 var face = document.querySelector("#cara");
function crearTajetas() {
  var mesa = document.querySelector("#mesa");
     
   

  todasLasTarjetas.forEach(function mensaje(Element) {
    var tarjeta = document.createElement("div");
	
	
	
  
	  
    tarjeta.innerHTML = "<p class='ico'>" + Element + "</p>";
  
	

    mesa.appendChild(tarjeta);
	   
	  
	    
	
	  
	
  });
	

	  for(i=0;i<=todasLasTarjetas.length;i++){
		
	  }	  
	
}






crearTajetas();

/*<div class="tarjeta">🐶</div>*/






