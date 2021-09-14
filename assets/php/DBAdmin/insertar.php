<?php
if (isset($_POST['create_bttn'])){
	include("conexion.php");
	$con=conectar();

	$user=$_POST['user'];
	$pwd=$_POST['pwd'];
	$name=$_POST['name'];
	$apPaterno=$_POST['apPaterno'];
	$apMaterno=$_POST['apMaterno'];
	$date=$_POST['date'];
	$sex=$_POST['sex'];
	$edo_Civil=$_POST['edo_Civil'];
	$hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

	$sql="INSERT INTO users VALUES('$user','$hashedPwd','$name','$apPaterno','$apMaterno','$date','$sex','$edo_Civil')";
	$query= mysqli_query($con,$sql);

	if($query){
	    Header("Location: alumno.php");
	    
	}else {
	}
}
else{
	Header("Location: ../loginvis.php");
}
?>