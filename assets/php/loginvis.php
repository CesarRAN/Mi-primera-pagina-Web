<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title> 
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>  
<body>
	<video id="videoBG" poster="assets/images/poster.jpg" width="100%" autoplay muted loop >
        <source src="assets/Videos/video.mp4" type="video/mp4">
    </video>
    <form class="formulario" action="signin.php" method="post">
    <?php
    if(isset($_GET['error'])){
        if($_GET['error'] == "emptyfields"){
                echo "<script>alert('Por favor, no deje campos vacios');</script>";
            }
            if($_GET['error'] == "sqlerror1"){
                echo "<script>alert('La base de datos presento un error, intente mas tarde');</script>";
            }
            if($_GET['error'] == "nomatches"){
                echo "<script>alert('No se encontraron coincidencias, revise sus datos e intente de nuevo');</script>";
            }
			if($_GET['error'] == "success"){
                echo "<script>alert('INGRESO CORRECTO');</script>";
            }
        }
    ?>
    
     <div class="container mt-5">
		<h1 class="text-white">Login</h1>
     
         
         <div class="input-contenedor">
			<input type="text" class="form-control mb-3" name="uid" placeholder="Nombre de Usuario">
         
         </div>
         
         <div class="input-contenedor">
			<input type="password" name="pwd" class="form-control mb-3" placeholder="Contraseña">
         
         </div>
         <input type="submit" name="login-butt" value="Login" class="btn btn-primary">
        
     </div>
    </form>

</body>
<style>
	#videoBG{
		position:fixed;
		z-index: -1;
		top: 0;
		left:0;
	}
	
</style>
</html>