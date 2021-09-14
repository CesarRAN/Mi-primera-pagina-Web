<?php 
    include("conexion.php");
    $con=conectar();

    $sql="SELECT * FROM users";
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
<?php
    if(isset($_GET['error'])){
        if($_GET['error'] == "wrongpwd"){
                echo "<script>alert('Contrase&ntilde;a Incorrecta');</script>";
            }
        }
    ?>
<html lang="en">
    <head>
        <title> DB ADMIN</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        
    </head>
    <body>
            <div class="container mt-5">
                    <div class="row"> 
                        
                        <div class="col-md-3">
                            <h1>Ingrese datos</h1>
                                <form action="insertar.php" method="POST">
									<input type="text" class="form-control mb-3" name="user" placeholder="Usuario">
                                    <input type="text" class="form-control mb-3" name="pwd" placeholder="contrase&ntilde;a">
                                    <input type="text" class="form-control mb-3" name="name" placeholder="Nombres">
                                    <input type="text" class="form-control mb-3" name="apPaterno" placeholder="Apellido Paterno">
                                    <input type="text" class="form-control mb-3" name="apMaterno" placeholder="Apellido Materno">
                                    <input type="date" class="form-control mb-3" name="date" placeholder="Fecha">
									Sexo:
									<input type="radio" id="sexoM" name="sex" value="Masculino"/>Masculino
									<input type="radio" id="sexoF" name="sex" value="Femenino"/>Femenino
									<br>
									Estado Civil:
                                    <select name="edo_Civil">
										<option value="Soltero">Soltero/a</option>
										<option value="Casado">Casado/a</option>
										<option value="Otro">No especificado</option>
									</select>   
									<br>
                                    <input type="submit" class="btn btn-primary" name="create_bttn">
                                </form>
                        </div>

                        <div class="col-md-8">
                            <table class="table" >
                                <thead class="table-success table-striped" >
                                    <tr>
                                        <th>Usuario</th>
                                        <th>contrase&ntilde;a</th>
                                        <th>Apellido Paterno</th>
                                        <th>Apellido Materno</th>
										<th>Fecha</th>
                                        <th>Sexo</th>
                                        <th>Estado Civil</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                        <?php
                                            while($row=mysqli_fetch_array($query)){
                                        ?>
                                            <tr>
                                                <th><?php  echo $row['user']?></th>
                                                <th><?php  echo $row['pwd']?></th>
                                                <th><?php  echo $row['name']?></th>
                                                <th><?php  echo $row['apPaterno']?></th>
						<th><?php  echo $row['apMaterno']?></th>
                                                <th><?php  echo $row['date']?></th>
						<th><?php  echo $row['sex']?></th>	
                                                <th><?php  echo $row['edo_Civil']?></th>												
                                                <th><a href="actualizar.php?id=<?php echo $row['user'] ?>" class="btn btn-info">Editar</a></th>
                                                <th><a href="delete.php?id=<?php echo $row['user'] ?>" class="btn btn-danger" name="delete_bttn">Eliminar</a></th>                                 
                                            </tr>
                                        <?php 
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>  
            </div>
    </body>
</html>