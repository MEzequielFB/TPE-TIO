<?php

    require_once "routerClass.php";
    require_once "app/controlador/appController.php";

    define("BASE_URL", 'http://'.$_SERVER["SERVER_NAME"].':'.$_SERVER["SERVER_PORT"].dirname($_SERVER["PHP_SELF"]).'/');

    $r= new Router();

    $r->addRoute("femenino", "GET", "appController", "showFemenino");
    $r->addRoute("masculino", "GET", "appController", "showMasculino");

    $r->setDefaultRoute("appController", "showIndex");

    //run
    $r->route($_GET['action'], $_SERVER['REQUEST_METHOD']); 