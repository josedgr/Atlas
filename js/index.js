
function comenzar(){
	var boton=document.getElementById("btn_ver_paises");
	
	boton.addEventListener("click",itemNuevo, false);
	
	}

function itemNuevo(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");
	var clave3=document.getElementById("pais4");
	var clave3=document.getElementById("pais5");
	var clave3=document.getElementById("pais6");
	var clave3=document.getElementById("pais7");
	var clave3=document.getElementById("pais8");
	var clave3=document.getElementById("pais9");
	var clave3=document.getElementById("pais10");
	var clave3=document.getElementById("pais11");
	var clave3=document.getElementById("pais12");

	
	if (clave1.checked)
		zona_paises1.innerHTML="<div>Alemania</div>";
	else
		zona_paises1.innerHTML="";
	if (clave2.checked)
		zona_paises2.innerHTML="<div>España</div>";
	else
		zona_paises2.innerHTML="";
	if (clave3.checked)
		zona_paises3.innerHTML="<div>Italia</div>";
	else
		zona_paises3.innerHTML="";
	if (clave1.checked)
		zona_paises4.innerHTML="<div>Marruecos</div>";
	else
		zona_paises4.innerHTML="";
	if (clave1.checked)
		zona_paises5.innerHTML="<div>Egipto</div>";
	else
		zona_paises5.innerHTML="";
	if (clave1.checked)
		zona_paises6.innerHTML="<div>Kenia</div>";
	else
		zona_paises6.innerHTML="";
	if (clave1.checked)
		zona_paises7.innerHTML="<div>China</div>";
	else
		zona_paises7.innerHTML="";
	if (clave1.checked)
		zona_paises8.innerHTML="<div>Japon</div>";
	else
		zona_paises8.innerHTML="";
	if (clave1.checked)
		zona_paises9.innerHTML="<div>Mongolia</div>";
	else
		zona_paises9.innerHTML="";
	if (clave1.checked)
		zona_paises10.innerHTML="<div>Estados Unidos</div>";
	else
		zona_paises10.innerHTML="";
	if (clave1.checked)
		zona_paises11.innerHTML="<div>Chile</div>";
	else
		zona_paises11.innerHTML="";
	if (clave1.checked)
		zona_paises12.innerHTML="<div>Argentina</div>";
	else
		zona_paises12.innerHTML="";
	if (clave1.checked)
		zona_paises13.innerHTML="<div>Australia/div>";
	else
		zona_paises13.innerHTML="";
	if (clave1.checked)
		zona_paises14.innerHTML="<div>Fiyi</div>";
	else
		zona_paises14.innerHTML="";
	if (clave1.checked)
		zona_paises15.innerHTML="<div>Nueva Zelanda</div>";
	else
		zona_paises15.innerHTML="";

					
	if (!clave1.checked && !clave2.checked && !clave3.checked) // si no esta ninguna seleccionada
		alert("error"); //añadir lo que falta para no avanzar de pagina

	if (!clave4.checked && !clave5.checked && !clave6.checked) // si no esta ninguna seleccionada
		alert("error"); //añadir lo que falta para no avanzar de pagina

	if (!clave7.checked && !clave8.checked && !clave9.checked) // si no esta ninguna seleccionada
		alert("error"); //añadir lo que falta para no avanzar de pagina

	if (!clave10.checked && !clave11.checked && !clave12.checked) // si no esta ninguna seleccionada
		alert("error"); //añadir lo que falta para no avanzar de pagina

	if (!clave13.checked && !clave14.checked && !clave15.checked) // si no esta ninguna seleccionada
		alert("error"); //añadir lo que falta para no avanzar de pagina
		
	if (clave1.checked || clave2.checked || clave3.checked)
		window.location.href ="#PaisesE";
	
}






window.addEventListener("load", comenzar, false);
