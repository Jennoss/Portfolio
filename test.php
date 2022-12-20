<?php

echo "Water Slash" . PHP_EOL;
echo "Parade" . PHP_EOL;
echo "Triple Slash" . PHP_EOL;
$a = "";
 
do {
    if($a != "Water Slash" || $a != "Parade" || $a != "Triple Slash"){
        $a = readline("Que voulez faire ? ");
    } 

    if($a == "Water Slash" || $a == "Parade" || $a == "Triple Slash"){
        echo "Vous utiliser : " . $a . PHP_EOL;
    }
} while ($a != 0);

