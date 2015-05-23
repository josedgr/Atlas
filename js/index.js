
function comenzar(){
	var boton=document.getElementById("btn_ver_paises");
	
	boton.addEventListener("click",itemNuevo, false);
	
	
	}

function itemNuevo(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");
	//var zonadatos1=document.getElementById("zona_paises1");
	//var zonadatos2=document.getElementById("zona_paises2");
	//var zonadatos3=document.getElementById("zona_paises3");
	
	if (clave1.checked)
		zona_paises1.innerHTML="<div>Hola 1</div>";
		if (clave2.checked)
			zona_paises2.innerHTML="<div>Hola 2</div>";
				if (clave3.checked)
					zona_paises3.innerHTML="<div>Hola 3</div>";
	
		alert(total);
}

function mostrar(clave){ //grabando en la web los paises checked
	
	
	var zonadatos=document.getElementById("zonadatos");
	
	
	
	zonadatos.innerHTML="<div>Hola "+ clave + "</div>";
	
}



window.addEventListener("load", comenzar, false);
