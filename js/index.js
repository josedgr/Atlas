
function comenzar(){

	var boton=document.getElementById("btn_ver_paises");
	boton.addEventListener("click",itemNuevo, false);
	
	var boton=document.getElementById("btn_salir");
	boton.addEventListener("click",onBackKeyDown, false);
	
	}
	
function onBackKeyDown() {
    // Exit the app!
    navigator.app.exitApp();
}

function itemNuevo(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");

	
	if (clave1.checked)
		//zona_paises1.innerHTML="<div><h1>Alemania</h1></div>";
		zona_paises1.innerHTML = '<div class="post"><h1 class="title" style="center">Alemania</h1><br/><table><tr><td><img src="img/alemania.jpg" id = "galeria1" /></td><td><img src="img/alemania2.png" id = "galeria2" /></td></tr></table></div>'; 
	else
		zona_paises1.innerHTML="";
	if (clave2.checked)
		zona_paises2.innerHTML='<div class="post"><h1 class="title" style="center">España</h1><br/><table><tr><td><img src="img/españa.png" id = "galeria1" /></td><td><img src="img/españa2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises2.innerHTML="";
	if (clave3.checked)
		zona_paises3.innerHTML='<div class="post"><h1 class="title" style="center">Italia</h1><br/><table><tr><td><img src="img/italia.jpg" id = "galeria1" /></td><td><img src="img/italia2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises3.innerHTML="";

					
	if (!clave1.checked && !clave2.checked && !clave3.checked) // si no esta ninguna seleccionada
		alert("Seleccione algun pais para continuar"); //añadir lo que falta para no avanzar de pagina

	if (clave1.checked || clave2.checked || clave3.checked)
		window.location.href ="#PaisesE";
	
}


window.addEventListener("load", comenzar, false);