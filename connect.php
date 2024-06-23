<?php
$host = "127.0.0.1:5500";
$username ="TraAnhTho";
$password = "081105";
$dbname = "magiccode";

$conn = new mysqli($host, $username ,$password ,$dbname);
if($conn->connect_error){
    die("Kết nối ko thành công" . $conn->connect_error);
}
echo "kết nối thành công";
?>