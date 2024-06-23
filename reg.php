<?php
require 'connect.php';
if(isset($_POST['reg-btn'])){
    echo "Đa đăng kí";
    echo "<pre>";
    
$email = $_POST['email'];
$password = $_POST['password'];
if(!empty($email)&&!empty($password)){
    print_r($_POST);
    $sql ="INSERT INTO users ('email', 'password') VALUE ('$email','$password')";
    

} else{
    echo " bạn cần nhập đủ dữ liệu"
}
}


?>