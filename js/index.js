
function europajs(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");

	
	if (clave1.checked)
		//zona_paises1.innerHTML="<div><h1>Alemania</h1></div>";
		zona_paises1.innerHTML = '<div class="post"><h1 class="title" style="center">Alemania</h1><br/><table><tr><td><img src="img/alemania.jpg" id = "galeria1" /></td><td><img src="img/alemania2.png" id = "galeria2" /></td></tr></table></div>'; 
	else
		zona_paises1.innerHTML="";
	if (clave2.checked)
		zona_paises2.innerHTML='<div class="post"><h1 class="title" style="center">España</h1><br/><table><tr><td><img src="img/espanha.png" id = "galeria1" /></td><td><img src="img/espanha2.jpg" id = "galeria2" /></td></tr></table></div>';
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



function oceaniajs(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");

	
	if (clave1.checked)
		//zona_paises1.innerHTML="<div><h1>Alemania</h1></div>";
		zona_paises1.innerHTML = '<div class="post"><h1 class="title" style="center">Australia</h1><br/><table><tr><td><img src="img/australia.jpeg" id = "galeria1" /></td><td><img src="img/australia2.jpg" id = "galeria2" /></td></tr></table></div>'; 
	else
		zona_paises1.innerHTML="";
	if (clave2.checked)
		zona_paises2.innerHTML='<div class="post"><h1 class="title" style="center">Fiyi</h1><br/><table><tr><td><img src="img/fiyi.jpg" id = "galeria1" /></td></tr></table></div>';
	else
		zona_paises2.innerHTML="";
	if (clave3.checked)
		zona_paises3.innerHTML='<div class="post"><h1 class="title" style="center">Nueva Zelanda</h1><br/><table><tr><td><img src="img/nueva.png" id = "galeria1" /></td><td><img src="img/nueva2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises3.innerHTML="";

					
	if (!clave1.checked && !clave2.checked && !clave3.checked) // si no esta ninguna seleccionada
		alert("Seleccione algun pais para continuar"); //añadir lo que falta para no avanzar de pagina

	if (clave1.checked || clave2.checked || clave3.checked)
		window.location.href ="#PaisesO";
	
}

function africajs(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");

	
	if (clave1.checked)
		//zona_paises1.innerHTML="<div><h1>Alemania</h1></div>";
		zona_paises1.innerHTML = '<div class="post"><h1 class="title" style="center">Marruecos</h1><br/><table><tr><td><img src="img/marruecos.jpg" id = "galeria1" /></td><td><img src="img/marruecos2.jpg" id = "galeria2" /></td></tr></table></div>'; 
	else
		zona_paises1.innerHTML="";
	if (clave2.checked)
		zona_paises2.innerHTML='<div class="post"><h1 class="title" style="center">Egipto</h1><br/><table><tr><td><img src="img/egipto.jpg" id = "galeria1" /></td><td><img src="img/egipto2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises2.innerHTML="";
	if (clave3.checked)
		zona_paises3.innerHTML='<div class="post"><h1 class="title" style="center">Kenia</h1><br/><table><tr><td><img src="img/kenia.jpg" id = "galeria1" /></td><td><img src="img/kenia2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises3.innerHTML="";

					
	if (!clave1.checked && !clave2.checked && !clave3.checked) // si no esta ninguna seleccionada
		alert("Seleccione algun pais para continuar"); //añadir lo que falta para no avanzar de pagina

	if (clave1.checked || clave2.checked || clave3.checked)
		window.location.href ="#PaisesAf";
	
}


function americajs(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");

	
	if (clave1.checked)
		//zona_paises1.innerHTML="<div><h1>Alemania</h1></div>";
		zona_paises1.innerHTML = '<div class="post"><h1 class="title" style="center">Estados Unidos</h1><br/><table><tr><td><img src="img/estados.png" id = "galeria1" /></td><td><img src="img/estados2.jpg" id = "galeria2" /></td></tr></table></div>'; 
	else
		zona_paises1.innerHTML="";
	if (clave2.checked)
		zona_paises2.innerHTML='<div class="post"><h1 class="title" style="center">Chile</h1><br/><table><tr><td><img src="img/chile.png" id = "galeria1" /></td><td><img src="img/chile2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises2.innerHTML="";
	if (clave3.checked)
		zona_paises3.innerHTML='<div class="post"><h1 class="title" style="center">Argentina</h1><br/><table><tr><td><img src="img/argentina.jpg" id = "galeria1" /></td><td><img src="img/argentina2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises3.innerHTML="";

					
	if (!clave1.checked && !clave2.checked && !clave3.checked) // si no esta ninguna seleccionada
		alert("Seleccione algun pais para continuar"); //añadir lo que falta para no avanzar de pagina

	if (clave1.checked || clave2.checked || clave3.checked)
		window.location.href ="#PaisesAm";
	
}


function asiajs(){ //comprobando los checked y escribiendo los paises
	
	
	var clave1=document.getElementById("pais1");
	var clave2=document.getElementById("pais2");
	var clave3=document.getElementById("pais3");

	
	if (clave1.checked)
		//zona_paises1.innerHTML="<div><h1>Alemania</h1></div>";
		zona_paises1.innerHTML = '<div class="post"><h1 class="title" style="center">China</h1><br/><table><tr><td><img src="img/china.png" id = "galeria1" /></td><td><img src="img/china2.jpg" id = "galeria2" /></td></tr></table></div>'; 
	else
		zona_paises1.innerHTML="";
	if (clave2.checked)
		zona_paises2.innerHTML='<div class="post"><h1 class="title" style="center">Japon</h1><br/><table><tr><td><img src="img/japon.jpg" id = "galeria1" /></td><td><img src="img/japon2.png" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises2.innerHTML="";
	if (clave3.checked)
		zona_paises3.innerHTML='<div class="post"><h1 class="title" style="center">Mongolia</h1><br/><table><tr><td><img src="img/mongolia.jpg" id = "galeria1" /></td><td><img src="img/mongolia2.jpg" id = "galeria2" /></td></tr></table></div>';
	else
		zona_paises3.innerHTML="";

					
	if (!clave1.checked && !clave2.checked && !clave3.checked) // si no esta ninguna seleccionada
		alert("Seleccione algun pais para continuar"); //añadir lo que falta para no avanzar de pagina

	if (clave1.checked || clave2.checked || clave3.checked)
		window.location.href ="#PaisesAs";
	
}

