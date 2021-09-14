function pag_1()
{
    document.getElementById("pag-1").style.display = "block";
	document.getElementById("pag-2").style.display = "none";
}

function pag_2()
{
	document.getElementById("pag-1").style.display = "none";
	document.getElementById("pag-2").style.display = "block";
}

function curso_1()
{
    window.location.href='Cursos.html';
    document.getElementById("cr-1").style.display = "block";
	document.getElementById("cr-2").style.display = "none";
	document.getElementById("cr-3").style.display = "none";
}

function curso_2()
{
    window.location.href='Cursos.html';
    document.getElementById("cr-1").style.display = "none";
	document.getElementById("cr-2").style.display = "block";
	document.getElementById("cr-3").style.display = "none";
}

function curso_3()
{
    window.location.href='Cursos.html';
    document.getElementById("cr-1").style.display = "none";
	document.getElementById("cr-2").style.display = "none";
	document.getElementById("cr-3").style.display = "block";
}