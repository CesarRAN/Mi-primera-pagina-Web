<?php
if (isset($_POST['delete_bttn'])){
	include("conexion.php");
	$con=conectar();

	$user=$_GET['id'];

	$sql="DELETE FROM users WHERE user='$user'";
	$query=mysqli_query($con,$sql);

	    if($query){
		Header("Location: alumno.php");
	    }
}
else{
	Header("Location: ../loginvis.php");
}
?>
