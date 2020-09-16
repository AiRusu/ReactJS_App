<?php 
require 'conect.php'; 

function executaGET($cnx) {
    $cda = "SELECT * FROM contacte order by numePrenume ASC";

    if(isset($_GET['id'])) {
        $id = $_GET['id'];
        $cda = "SELECT * FROM contacte where id=$id";
    }

    if(isset($_GET['numePrenume'])) {
        $nume = $_GET['numePrenume'];
        $cda = "SELECT * FROM contacte where numePrenume='$numePrenume'";
    }

    $articole = [];
    
    if ($rez = mysqli_query($cnx,$cda)) {
        
            // Se preiau liniile pe rand
        while ($linie = mysqli_fetch_assoc($rez)) {
            $articole[] = $linie;
        }

            // Eliberez memoria ocupata de multimea de selectie 
        mysqli_free_result($rez);
    }
    echo json_encode($articole);
}  

function executaPOST($cnx) {
    $sir = citeste();
    $numePrenume = $sir['numePrenume'];  
    $email = $sir['email']; 
    $optiune = $sir['optiune'];

    $raspuns = [];
    $cda = "INSERT INTO contacte (numePrenume, email, optiune) VALUES ('$numePrenume', '$email', '$optiune')";
    if (mysqli_query($cnx, $cda)) {
        $raspuns[] = ['rezultat' => "OK"];
        $raspuns[] = ['id' => mysqli_insert_id($cnx)];
    } else {
        $raspuns[] = ['rezultat' => 'cda: ' . $cda . '. Eroare: ' . mysqli_error($cnx)];
    }
    echo json_encode($raspuns); 
}

function executaPUT($cnx) {
    $sir = citeste();
    $id = $sir['id'];
    $numePrenume = $sir['numePrenume']; 
    $email = $sir['email']; 
    $optiune = $sir['optiune'];

    $raspuns = [];
    $cda = "UPDATE contacte SET numePrenume='$numePrenume', email='$email', 'optiune=$optiune' WHERE id=$id";
    if (mysqli_query($cnx, $cda)) {
        $raspuns[] = ['rezultat' => "OK"];
    } else {
        $raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
    }
    echo json_encode($raspuns);
}

function executaDELETE($cnx) {
    $sir = citeste();
    $id = $sir['id'];

    $cda = "DELETE FROM contacte WHERE id = $id";
    $raspuns = [];

    if (mysqli_query($cnx, $cda)) {
        $raspuns[] = ['rezultat' => "OK"];
    } else {
        $raspuns[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
    }
    echo json_encode($raspuns);
    } 

function citeste() {
    $json = file_get_contents('php://input', TRUE);
    // Apoi se creaza sirul asociativ $sir
    $sir = json_decode($json, true); // decodificare json
    // print_r($sir);
    return $sir;
}

   // require 'conect.php';
   // header("Access-Control-Allow-Origin: *");

$metoda = $_SERVER['REQUEST_METHOD'];
switch ($metoda) {
    case 'GET':
    executaGET($cnx);
    break;
    
    case 'POST':
    executaPOST($cnx);  
    break;
    
    case 'PUT':
    executaPUT($cnx);  
    break;

    case 'DELETE':
    executaDELETE($cnx);  
    break;
}

mysqli_close($cnx);
?>
