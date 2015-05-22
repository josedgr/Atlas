
function comenzar(){
	var boton=document.getElementById("btn_saludo");
	
	boton.addEventListener("click",itemNuevo, false);
	
	
	}

function itemNuevo(){
	
	var clave=document.getElementById("nombre").value;
	
	//sessionStorage.setItem(clave);
	mostrar(clave);
}

function mostrar(clave){
	//sessionStorage.getItem(clave)
	
	var zonadatos=document.getElementById("zonadatos");
	
	//var elvalor=sessionStorage.getItem(clave, );
	
	zonadatos.innerHTML="<div>Hola "+ clave + "</div>";
	
}



window.addEventListener("load", comenzar, false);
