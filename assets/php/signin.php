<?php

if (isset($_POST['login-butt'])){
    require "dbh.php";
    
    $mailuid = $_POST["uid"];
    $password = $_POST["pwd"];

    if(empty($mailuid) || empty($password)){
        header("Location: loginvis.php?error=emptyfields");
        exit();
    }
    else{
        $sql = "SELECT * FROM users WHERE user=?;";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)){
            header("Location: loginvis.php?error=sqlerror1");
            exit();
        }
        else{
            mysqli_stmt_bind_param($stmt, "s", $mailuid);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            
            if($row = mysqli_fetch_assoc($result)){
                $pwdCheck = password_verify($password, $row["pwd"]);
                if($pwdCheck == false){
                    header("Location: loginvis.php?error=nomatches");
                    exit();
                }
                else if($pwdCheck == true){
                    session_start();
                    $_SESSION["userUid"] = $row['user'];

                    header("Location: DBAdmin/alumno.php");
                    exit();
                }
                else{
                    header("Location: loginvis.php?error=nomatches");
                    exit();
                }
            
            }
        }
    }
}

else{
    header("Location: loginvis.php");
    exit();
}
