<?php 
    include("conexion.php");
    $con=conectar();

$id=$_GET['id'];

$sql="SELECT * FROM users WHERE user='$id'";
$query=mysqli_query($con,$sql);

$row=mysqli_fetch_array($query);
?>
<?php 
    session_start();

if(!ISSET($_SESSION['userId'])){
	Header("Location: ../loginvis.php");
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Actualizar</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        
    </head>
    <body>
                <div class="container mt-5">
                    <form action="update.php" method="POST">
								Hashed: <?php echo $row['pwd']  ?>
                                <input type="hidden" name="user" value="<?php echo $row['user']  ?>">
                                <input type="text" class="form-control mb-3" name="oldpwd" placeholder="oldpwd" value="">
								<input type="text" class="form-control mb-3" name="newpwd" placeholder="newpwd" value="">
                                <input type="text" class="form-control mb-3" name="name" placeholder="name" value="<?php echo $row['name']  ?>">
								<input type="text" class="form-control mb-3" name="apPaterno" placeholder="apPaterno" value="<?php echo $row['apPaterno']  ?>">
                                <input type="text" class="form-control mb-3" name="apMaterno" placeholder="apMaterno" value="<?php echo $row['apMaterno']  ?>">
                                <input type="date" class="form-control mb-3" name="date" placeholder="date" value="<?php echo $row['date']  ?>">
								
								Sexo:
									<table>
										<?php 
										$sex = $row['sex'];
										if ($sex == 'Masculino'){
											echo "<tr><td><input type='radio' id='sexoM' name='sex' value='Masculino' checked/>Masculino</td>";
											echo "<td><input type='radio' id='sexoF' name='sex' value='Femenino'/>Femenino</td></tr>";
										}
										else{
											echo "<tr><td><input type='radio' id='sexoM' name='sex' value='Masculino' />Masculino</td>";
											echo "<td><input type='radio' id='sexoF' name='sex' value='Femenino' checked/>Femenino</td></tr>";
										}
										?>
									</table>
									<br>
									Estado Civil:
									<?php 
										$edo_Civil = $row['edo_Civil'];
										if ($edo_Civil == 'Soltero'){
											echo "<select name='edo_Civil'>";
												echo "<option value='Soltero' selected>Soltero/a</option>";
												echo "<option value='Casado'>Casado/a</option>";
												echo "<option value='Otro'>No especificado</option>";
											echo"</select>";
										}
										else if($edo_Civil == 'Casado'){
											echo "<select name='edo_Civil'>";
												echo "<option value='Soltero' >Soltero/a</option>";
												echo "<option value='Casado' selected>Casado/a</option>";
												echo "<option value='Otro'>No especificado</option>";
											echo"</select>";
										}
										else{
											echo "<select name='edo_Civil'>";
												echo "<option value='Soltero' >Soltero/a</option>";
												echo "<option value='Casado'>Casado/a</option>";
												echo "<option value='Otro' selected>No especificado</option>";
											echo"</select>"; 
										}
									?>
                                     
									<br><br>
								
                                
                            <input type="submit" name="update_bttn" class="btn btn-primary btn-block" value="Actualizar">
                    </form>
                    
                </div>
    </body>
</html>