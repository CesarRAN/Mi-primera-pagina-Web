var boolDataMode_XML = 1
var boolDataMode_JSON = 1
var boolDataMode = boolDataMode_XML;

var txt = '<alumnos>';
txt +=       '<alumno>';
txt +=          '<nivel>Directivo</nivel>';
txt +=          '<fecha>2009-02-15</fecha>';
txt +=          '<clave>987654</clave>';
txt +=          '<nombre>Juan</nombre>';
txt +=          '<apPaterno>Sanches</apPaterno>';
txt +=          '<apMaterno>Ramirez</apMaterno>';
txt +=          '<sexo>Masculino</sexo>';
txt +=          '<edoCivil>Soltero</edoCivil>';
txt +=       '</alumno>';
txt +=       '<alumno>';
txt +=          '<nivel>Empleado</nivel>';
txt +=          '<fecha>2009-10-18</fecha>';
txt +=          '<clave>987653</clave>';
txt +=          '<nombre>Claudia</nombre>';
txt +=          '<apPaterno>Solorza</apPaterno>';
txt +=          '<apMaterno>Yoltic</apMaterno>';
txt +=          '<sexo>Femenino</sexo>';
txt +=          '<edoCivil>Soltero</edoCivil>';
txt +=       '</alumno>';
txt +=       '<alumno>';
txt +=          '<nivel>Empleado</nivel>';
txt +=          '<fecha>2010-05-28</fecha>';
txt +=          '<clave>987652</clave>';
txt +=          '<nombre>Francisco</nombre>';
txt +=          '<apPaterno>Ortiz</apPaterno>';
txt +=          '<apMaterno>Alcazar</apMaterno>';
txt +=          '<sexo>Masculino</sexo>';
txt +=          '<edoCivil>Casado</edoCivil>';
txt +=       '</alumno>';
txt +=    '</alumnos>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(txt,"text/xml");

var txtj = '{"alumno":[' 
			+ '{ "nivel":"Directivo", "fecha":"2009-02-15", "clave":987654, "nombre":"Juan", "apPaterno":"Sanches", "apMaterno":"Ramirez", "sexo":"Masculino", "edoCivil":"Soltero"},'
			+ '{ "nivel":"Empleado", "fecha":"2009-10-18", "clave":987653, "nombre":"Claudia", "apPaterno":"Solorza", "apMaterno":"Yoltic", "sexo":"Femenino", "edoCivil":"Soltero"},'
			+ '{ "nivel":"Empleado", "fecha":"2010-05-28", "clave":987652, "nombre":"Francisco", "apPaterno":"Ortiz", "apMaterno":"Alcazar", "sexo":"Masculino", "edoCivil":"Casado"}'
			+ ']}';

var alumnos = JSON.parse(txtj);


function altas()
{	
	document.getElementById("altas").style.display = "block";
	document.getElementById("bajas").style.display = "none";
	document.getElementById("buscar").style.display = "none";
	document.getElementById("cambios").style.display = "none";
	document.getElementById("reporte").style.display = "none";
} //altas

function sendData()
{
		if(document.getElementById("DB").value == "XML"){
			boolDataMode = boolDataMode_XML
		}
		else{
			boolDataMode = boolDataMode_JSON;
		}
		var numeros="0123456789";
		nivel = "";
		fecha = document.getElementById("fecha").value.toString();
		clave = document.getElementById("clave").value;
		nombre = document.getElementById("nombre").value;
		apPaterno = document.getElementById("apPaterno").value;
		apMaterno = document.getElementById("apMaterno").value;
		edoCivil = document.getElementById("edoCivil").value;
		sexo = "";
		
		if(fecha == ""){
			alert("No se introdujo fecha (ERROR - fecha = NULL)");
			throw new Error("Algo salio mal!");
		}
		
        if(clave == ""){
			alert("No a introducido un nombre de usuario, verifique los datos (ERROR - NOMBRE = NULL)");
			throw new Error("Algo salio mal!");
		}
		
		if(nombre == ""){
			alert("No a introducido un nombre, verifique los datos (ERROR - NOMBRE = NULL)");
			throw new Error("Algo salio mal!");
		}
		else if (nombre != ""){
			for(i=0; i<nombre.length; i++){
				if (numeros.indexOf(nombre.charAt(i),0)!=-1){
					alert("No a introducido un nombre, verifique los datos (ERROR - NOMBRE NOT REGULAR)");
					throw new Error("Algo salio mal!");
				}
			}
		}
			
			if(apPaterno == ""){
				alert("No a introducido un nombre, verifique los datos (ERROR - NOMBRE = NULL)");
				throw new Error("Algo salio mal!");
			}
			else if (apPaterno != ""){
				for(i=0; i<nombre.length; i++){
					if (numeros.indexOf(nombre.charAt(i),0)!=-1){
						alert("No a introducido un nombre, verifique los datos (ERROR - NOMBRE NOT REGULAR)");
						throw new Error("Algo salio mal!");
					}
				}
			}
			
			if(apMaterno == ""){
				alert("No a introducido un nombre, verifique los datos (ERROR - NOMBRE = NULL)");
				throw new Error("Algo salio mal!");
			}
			else if (apMaterno != ""){
				for(i=0; i<nombre.length; i++){
					if (numeros.indexOf(nombre.charAt(i),0)!=-1){
						alert("No a introducido un nombre, verifique los datos (ERROR - NOMBRE NOT REGULAR)");
						throw new Error("Algo salio mal!");
					}
				}
			}
		
				
				if (document.getElementById("sexoM").checked == true){
					
					sexo = "Masculino";
				}
				else if (document.getElementById("sexoF").checked == true){
					
					sexo = "Femenino";
				}
				else{
					alert("No a especificado un sexo, favor de revisar (ERROR - sexo = NULL)");
					throw new Error("Algo salio mal!");
				}
				
				if (document.getElementById("checkB1").checked == true){
					
					nivel = "Estudiate";
				}
				else {
					
					nivel = " ";
				}
				
			if(edoCivil==""){
				alert("No a especificado su estado civil (ERROR - edoCivil = NULL)");
				throw new Error("Algo salio mal!");
			}
			
		
		if (boolDataMode == boolDataMode_XML)
		{
			newEleNivel = xmlDoc.createElement("nivel");
			newTxtNivel = xmlDoc.createTextNode(nivel);
			newEleNivel.appendChild(newTxtNivel);
			
			newEleFecha = xmlDoc.createElement("fecha");
			newTxtFecha = xmlDoc.createTextNode(fecha);
			newEleFecha.appendChild(newTxtFecha);
			
			newEleClave = xmlDoc.createElement("clave");
			newTxtClave = xmlDoc.createTextNode(clave);
			newEleClave.appendChild(newTxtClave);

			newEleNombre = xmlDoc.createElement("nombre");
			newTxtNombre = xmlDoc.createTextNode(nombre);
			newEleNombre.appendChild(newTxtNombre);
			
			newEleApPaterno = xmlDoc.createElement("apPaterno");
			newTxtApPaterno = xmlDoc.createTextNode(apPaterno);
			newEleApPaterno.appendChild(newTxtApPaterno);
			
			newEleApMaterno = xmlDoc.createElement("apMaterno");
			newTxtApMaterno = xmlDoc.createTextNode(apMaterno);
			newEleApMaterno.appendChild(newTxtApMaterno);

			newEleSexo = xmlDoc.createElement("sexo");
			newTxtSexo = xmlDoc.createTextNode(sexo);
			newEleSexo.appendChild(newTxtSexo);

			newEleEdoCivil = xmlDoc.createElement("edoCivil");
			newTxtEdoCivil = xmlDoc.createTextNode(edoCivil);
			newEleEdoCivil.appendChild(newTxtEdoCivil);

			newEleA = xmlDoc.createElement("alumno");
			newEleA.appendChild(newEleNivel);
			newEleA.appendChild(newEleFecha);
			newEleA.appendChild(newEleClave);
			newEleA.appendChild(newEleNombre);
			newEleA.appendChild(newEleApPaterno);
			newEleA.appendChild(newEleApMaterno);
			newEleA.appendChild(newEleSexo);
			newEleA.appendChild(newEleEdoCivil);

			xmlDoc.getElementsByTagName("alumnos")[0].appendChild(newEleA);
		}//XML
		else if (boolDataMode == boolDataMode_JSON)
		{
			/*
			var obj = {
				clave: 0,
				nombre: '',
				sexo: '',
				edoCivil: ''
			};

			obj.clave = clave;
			obj.nombre = nombre;
			obj.sexo = sexo;
				obj.edoCivil = edoCivil;
			*/
			var obj = {
				nivel: nivel,
				fecha: fecha,
				clave: clave,
				nombre: nombre,
				apPaterno: apPaterno,
				apMaterno: apMaterno,
				sexo: sexo,
				edoCivil: edoCivil
			};

			alumnos.alumno.push(obj);
		}//JSON
		alert('Alta realizada.');
	

}//sendData


function bajas()
{
	document.getElementById("altas").style.display = "none";
	document.getElementById("bajas").style.display = "block";
	document.getElementById("buscar").style.display = "none";
	document.getElementById("cambios").style.display = "none";
	document.getElementById("reporte").style.display = "none";
}

function deleteData()
{
	if(document.getElementById("DB").value == "XML"){
			boolDataMode = boolDataMode_XML
			x = xmlDoc.getElementsByTagName("alumno");
			l = x.length;
	}
	else{
		boolDataMode = boolDataMode_JSON;
		l = alumnos.alumno.length;
	}
	clave = document.getElementById("claveB").value;
	i = 0;
	flag = false;

	while((i < l) && (flag==false))
	{
		if(boolDataMode == boolDataMode_XML){
			if (x[i].childNodes[0].childNodes[0].nodeValue == clave)
			{
				baja = confirm("Dar de baja a: "
						+ x[i].childNodes[0].childNodes[0].nodeValue
						+ " - "
						+ x[i].childNodes[1].childNodes[0].nodeValue
						+ "?");
				if (baja == true)
				{
					x[i].parentNode.removeChild(x[i]);
					alert("Usuario dado de baja");
				}//if
				flag = true;
			}//if
			else
			{
				i++;
			}//else
		}
		else if(boolDataMode == boolDataMode_JSON){
			if (alumnos.alumno[i].clave == clave)
			{
				baja = confirm("Dar de baja a: "
					+ alumnos.alumno[i].clave
					+" - "
					+ alumnos.alumno[i].nombre
					+ "?");
				if(baja == true){
					alumnos.alumno.splice(i, 1);
				}
				flag = true;
			
			}
			else
			{
				i++;
			}
		}
	}//while

    if (flag == false){
    	alert("No se encontró Usuario");
    }//if
}//deleteData

function cambios()
{
	document.getElementById("altas").style.display = "none";
	document.getElementById("bajas").style.display = "none";
	document.getElementById("buscar").style.display = "none";
	document.getElementById("cambios").style.display = "block";
	document.getElementById("reporte").style.display = "none";
}

var indexEncontrado = 0;

function changeData()
{
	if(document.getElementById("DB").value == "XML"){
		boolDataMode = boolDataMode_XML
	}
	else{
		boolDataMode = boolDataMode_JSON;
	}
	clave = document.getElementById("buscarC").value;
	i = 0; //index
	flag = false;

	if (boolDataMode == boolDataMode_XML)
	{
		x = xmlDoc.getElementsByTagName("alumno");
		l = x.length;
	}
	else if(boolDataMode == boolDataMode_JSON)
	{
		l = alumnos.alumno.length;
	}

	while((i < l) && (flag == false))
	{
		if (boolDataMode == boolDataMode_XML)
		{ 
			if (x[i].childNodes[2].childNodes[0].nodeValue == clave)
			{
				if (x[i].childNodes[0].childNodes[0].nodeValue == "Estudiate"){
					document.getElementById("checkB1C").checked = true;
				}
				document.getElementById("fechaC").value = x[i].childNodes[1].childNodes[0].nodeValue;
				document.getElementById("claveC").value = x[i].childNodes[2].childNodes[0].nodeValue;
				document.getElementById("nombreC").value = x[i].childNodes[3].childNodes[0].nodeValue;
				document.getElementById("apPaternoC").value = x[i].childNodes[4].childNodes[0].nodeValue;
				document.getElementById("apMaternoC").value = x[i].childNodes[5].childNodes[0].nodeValue;
				if (x[i].childNodes[6].childNodes[0].nodeValue == "Masculino")
				{
					document.getElementById("sexoMC").checked = true;
					document.getElementById("sexoFC").checked = false;
				}
				else //Femenino
				{
					document.getElementById("sexoMC").checked = false;
					document.getElementById("sexoFC").checked = true;
				}
				document.getElementById("edoCivilC").value = x[i].childNodes[7].childNodes[0].nodeValue;
				indexEncontrado = i;
				flag = true;
			}//if
			else
			  i++;
		} //XML
		else if(boolDataMode == boolDataMode_JSON)
		{
			if (alumnos.alumno[i].clave == clave)
			{
				if (alumnos.alumno[i].nivel == "Estudiate"){
					document.getElementById("checkB1C").checked = true;
				}
				document.getElementById("fechaC").value = alumnos.alumno[i].fecha;
				document.getElementById("claveC").value = alumnos.alumno[i].clave;
				document.getElementById("nombreC").value = alumnos.alumno[i].nombre;
				document.getElementById("apPaternoC").value = alumnos.alumno[i].apPaterno;
				document.getElementById("apMaternoC").value = alumnos.alumno[i].apMaterno;
				if (alumnos.alumno[i].sexo == "Masculino")
				{
					document.getElementById("sexoMC").checked = true;
					document.getElementById("sexoFC").checked = false;
				}
				else //Femenino
				{
					document.getElementById("sexoMC").checked = false;
					document.getElementById("sexoFC").checked = true;
				}
				document.getElementById("edoCivilC").value = alumnos.alumno[i].edoCivil;
				indexEncontrado = i;
				flag = true;
			}//if
			else
			  i++;			
		} //JSON
	}//while

	if (flag)
		document.getElementById("formCambios").style.display = "block";
	else
		alert("No se encontró Ususrio.");
}

function updateData()
{
	if(document.getElementById("DB").value == "XML"){
		boolDataMode = boolDataMode_XML
	}
	else{
		boolDataMode = boolDataMode_JSON;
	}
	i = indexEncontrado;

	if(document.getElementById("checkB1C").checked == true)
		nivel = "Estudiate";
	else
		nivel = "";
	
	if(document.getElementById("sexoMC").checked == true)
		sexo = "Masculino";
	else
		sexo = "Femenino";

	if (boolDataMode == boolDataMode_XML)
	{
		x = xmlDoc.getElementsByTagName("alumno");
		x[i].childNodes[0].childNodes[0].nodeValue = nivel
		x[i].childNodes[1].childNodes[0].nodeValue = document.getElementById("fechaC").value;
		x[i].childNodes[2].childNodes[0].nodeValue = document.getElementById("claveC").value;
		x[i].childNodes[3].childNodes[0].nodeValue = document.getElementById("nombreC").value;
		x[i].childNodes[4].childNodes[0].nodeValue = document.getElementById("apPaternoC").value;
		x[i].childNodes[5].childNodes[0].nodeValue = document.getElementById("apMaternoC").value;
		x[i].childNodes[6].childNodes[0].nodeValue = sexo;
		x[i].childNodes[7].childNodes[0].nodeValue = document.getElementById("edoCivilC").value;
	}//XML
	else if(boolDataMode == boolDataMode_JSON)
	{
		alumnos.alumno[i].nivel = nivel
		alumnos.alumno[i].fecha = document.getElementById("fechaC").value;
		alumnos.alumno[i].clave = document.getElementById("claveC").value;
		alumnos.alumno[i].nombre = document.getElementById("nombreC").value;
		alumnos.alumno[i].apPaterno = document.getElementById("apPaternoC").value;
		alumnos.alumno[i].apMaterno = document.getElementById("apMaternoC").value;
		alumnos.alumno[i].sexo = sexo;
		alumnos.alumno[i].edoCivil = document.getElementById("edoCivilC").value;
	}//JSON

    alert("Actualización realizada.");
}

function buscar()
{
	document.getElementById("altas").style.display = "none";
	document.getElementById("bajas").style.display = "none";
	document.getElementById("buscar").style.display = "block";
	document.getElementById("cambios").style.display = "none";
	document.getElementById("reporte").style.display = "none";
}

function busqueda()
{
	campo = document.getElementById("campoBusqueda").value;
	valor = document.getElementById("textoBusqueda").value;
	if(document.getElementById("DB").value == "XML"){
		boolDataMode = boolDataMode_XML
		a = xmlDoc.getElementsByTagName("alumno");
		x = xmlDoc.getElementsByTagName(campo);
		l = a.length;
	}
	else{
		boolDataMode = boolDataMode_JSON;
		l = alumnos.alumno.length;
	}
	
	
	cont = 0;
	var tabla = document.getElementById("resultadoBusqueda");

	tabla.innerHTML = "<thead><tr>"
						+ "<th>Estudiante</th>"
						+ "<th>Fecha</th>"
						+ "<th>Usuario</th>"
						+ "<th>Nombre</th>"
						+ "<th>apPaterno</th>"
						+ "<th>apMaterno</th>"
						+ "<th>Sexo</th>"
						+ "<th>Nivel de Estudios</th>"
						+ "</tr></head>"
						+ "<tbody>";

	for(i=0; i<l; i++)
	{
		if(boolDataMode == boolDataMode_XML){
			if(x[i].childNodes[0].nodeValue == valor)
			{
				tabla.innerHTML += "<tr>"
								+ "<td>"
								+ a[i].childNodes[0].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ a[i].childNodes[1].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ a[i].childNodes[2].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ a[i].childNodes[3].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ a[i].childNodes[4].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ a[i].childNodes[5].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ a[i].childNodes[6].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ a[i].childNodes[7].childNodes[0].nodeValue
								+ "</td>"
								+ "</tr>";
				cont++;
			}
		}
		else if(boolDataMode == boolDataMode_JSON){
			switch (campo){
				case 'nivel':
					if (alumnos.alumno[i].nivel == valor){
						tabla.innerHTML += "<tr>"
											+ "<td>"
											+ alumnos.alumno[i].nivel
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].fecha
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].clave
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].nombre
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apPaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apMaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].sexo
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].edoCivil
											+ "</td>"
										+ "</tr>";
										cont++;
					}
					break;
				case 'clave':
					if (alumnos.alumno[i].clave == valor){
						tabla.innerHTML += "<tr>"
											+ "<td>"
											+ alumnos.alumno[i].nivel
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].fecha
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].clave
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].nombre
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apPaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apMaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].sexo
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].edoCivil
											+ "</td>"
										+ "</tr>";
										cont++;
					}
					break;
				case 'nombre':
					if (alumnos.alumno[i].nombre == valor){
						tabla.innerHTML += "<tr>"
											+ "<td>"
											+ alumnos.alumno[i].nivel
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].fecha
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].clave
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].nombre
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apPaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apMaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].sexo
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].edoCivil
											+ "</td>"
										+ "</tr>";
										cont++;
					}
					break;
				case 'apPaterno':
					if (alumnos.alumno[i].apPaterno == valor){
						tabla.innerHTML += "<tr>"
											+ "<td>"
											+ alumnos.alumno[i].nivel
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].fecha
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].clave
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].nombre
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apPaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apMaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].sexo
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].edoCivil
											+ "</td>"
										+ "</tr>";
										cont++;
					}
					break;
				case 'apMaterno':
					if (alumnos.alumno[i].apMaterno == valor){
						tabla.innerHTML += "<tr>"
											+ "<td>"
											+ alumnos.alumno[i].nivel
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].fecha
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].clave
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].nombre
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apPaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apMaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].sexo
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].edoCivil
											+ "</td>"
										+ "</tr>";
										cont++;
					}
					break;
				case 'sexo':
					if (alumnos.alumno[i].sexo == valor){
						tabla.innerHTML += "<tr>"
											+ "<td>"
											+ alumnos.alumno[i].nivel
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].fecha
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].clave
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].nombre
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apPaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apMaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].sexo
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].edoCivil
											+ "</td>"
										+ "</tr>";
										cont++;
					}
					break;
				case 'edoCivil':
					if (alumnos.alumno[i].edoCivil == valor){
						tabla.innerHTML += "<tr>"
											+ "<td>"
											+ alumnos.alumno[i].nivel
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].fecha
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].clave
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].nombre
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apPaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].apMaterno
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].sexo
											+ "</td>"
											+ "<td>"
											+ alumnos.alumno[i].edoCivil
											+ "</td>"
										+ "</tr>";
										cont++;
					}
					break;
			}
		}
	}//for
	tabla.innerHTML += "</tbody>";

	if (cont==0)
		document.getElementById("message").innerHTML = "No hay coincidencias";
	else
		document.getElementById("message").innerHTML = "Se encontraron " + cont + " coincidencias";

}//busqueda

function reporte()
{
	if(document.getElementById("DB").value == "XML"){
		boolDataMode = boolDataMode_XML
	}
	else{
		boolDataMode = boolDataMode_JSON;
	}
	document.getElementById("altas").style.display = "none";
	document.getElementById("bajas").style.display = "none";
	document.getElementById("buscar").style.display = "none";
	document.getElementById("cambios").style.display = "none";
	document.getElementById("reporte").style.display = "block";

	var tabla = document.getElementById("tablaReporte");

	tabla.innerHTML = "<thead><tr>"
                        + "<th>Estudiante</th>"
                        + "<th>Fecha</th>"
                        + "<th>Usuario</th>"
                        + "<th>Nombre</th>"
                        + "<th>apPaterno</th>"
                        + "<th>apMaterno</th>"
                        + "<th>Sexo</th>"
                        + "<th>Nivel de Estudios</th>"
						+ "</tr></head>"
						+ "<tbody>";


	if (boolDataMode == boolDataMode_XML)
	{

		x = xmlDoc.getElementsByTagName("alumno");
		l = x.length;

		for(i=0; i<l; i++)
		{
			tabla.innerHTML += "<tr>"
								+ "<td>"
								+ x[i].childNodes[0].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ x[i].childNodes[1].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ x[i].childNodes[2].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ x[i].childNodes[3].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ x[i].childNodes[4].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ x[i].childNodes[5].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ x[i].childNodes[6].childNodes[0].nodeValue
								+ "</td>"
								+ "<td>"
								+ x[i].childNodes[7].childNodes[0].nodeValue
								+ "</td>"
							+ "</tr>";
		}//for
	}//XML
	else if(boolDataMode == boolDataMode_JSON)
	{
		for(i=0; i < alumnos.alumno.length; i++)
		{
			tabla.innerHTML += "<tr>"
								+ "<td>"
								+ alumnos.alumno[i].nivel
								+ "</td>"
								+ "<td>"
								+ alumnos.alumno[i].fecha
								+ "</td>"
								+ "<td>"
								+ alumnos.alumno[i].clave
								+ "</td>"
								+ "<td>"
								+ alumnos.alumno[i].nombre
								+ "</td>"
								+ "<td>"
								+ alumnos.alumno[i].apPaterno
								+ "</td>"
								+ "<td>"
								+ alumnos.alumno[i].apMaterno
								+ "</td>"
								+ "<td>"
								+ alumnos.alumno[i].sexo
								+ "</td>"
								+ "<td>"
								+ alumnos.alumno[i].edoCivil
								+ "</td>"
							+ "</tr>";
		}
	}//JSON-JS

	tabla.innerHTML += "</tbody>";

}