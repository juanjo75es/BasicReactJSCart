<?php
header('Content-Type: application/json; charset=utf-8');
$json=array("items_in_productos" => array(
    array(
        "id"=>"3",
        "name"=>"Confidente Chair",
        "image"=>"https://mobiocasion.com/34858-thickbox_default/silla-confidente-iso-sin-brazos-tapizado-tela-o-polipiel-patas-negras.jpg",
        "price"=> 55,
        "description"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    array(
        "id"=>"4",
        "name"=>"Wood Chair",
        "price"=> 84,
        "image"=>"https://www.lacasaeco.com/wp-content/uploads/2021/06/Silla-de-madera-y-enea-Pause-Lacasaeco-scaled-e1622804471713.jpg",
        "description"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    array(
        "id"=>"5",
        "name"=>"Office Chair",
        "price"=> 138,
        "image"=>"https://ima.europamuebles.com/i/auxiliar-sillas-de-estudio-y-oficina/silla-oficina-cira/silla-oficina-cira-3772137661.jpg",
        "description"=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )
));
echo json_encode($json);