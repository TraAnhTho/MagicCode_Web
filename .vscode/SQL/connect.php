<?php
mysqli_connect("localhost", "TraAnhTho", "081105", "magiccode");

if (mysqli_connect_error()) {
	echo "Connection Error.";
} else {
	echo "Database Connection Successfully.";
}
?>
