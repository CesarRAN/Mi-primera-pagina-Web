<?php
if (isset($_POST['update_bttn'])){
	include("conexion.php");
	$con=conectar();

	$user=$_POST['user'];
	$oldpwd=$_POST['oldpwd'];
	$newpwd=$_POST['newpwd'];
	$hashedPwd = password_hash($newpwd, PASSWORD_DEFAULT);
	$name=$_POST['name'];
	$apPaterno=$_POST['apPaterno'];
	$apMaterno=$_POST['apMaterno'];
	$date=$_POST['date'];
	$sex=$_POST['sex'];
	$edo_Civil=$_POST['edo_Civil'];
	
	$sql = "SELECT * FROM users WHERE user=?;";
        $stmt = mysqli_prepare($con,$sql);
	mysqli_stmt_bind_param($stmt, "s", $user);
        mysqli_stmt_execute($stmt);
	$result = mysqli_stmt_get_result($stmt);
	if($row = mysqli_fetch_assoc($result)){
		$pwdCheck = password_verify($oldpwd, $row["pwd"]);
		if($pwdCheck == true){
			$sql="UPDATE users SET pwd='$hashedPwd',name='$name',apPaterno='$apPaterno',apMaterno='$apMaterno',date='$date',sex='$sex',edo_Civil='$edo_Civil' WHERE user='$user'";
			$query=mysqli_query($con,$sql);
			if($query){
				Header("Location: alumno.php");
			}
		}
		else{
			header("Location: alumno.php?error=wrongpwd");
			exit();
		}
	}
}

else{
    header("Location: alumno.php");
    exit();
}


?>