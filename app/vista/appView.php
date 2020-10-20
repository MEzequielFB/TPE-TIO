<?php

    require_once "libs/Smarty.class.php";

    class appView{
        private $smarty;

        function __construct(){

            $this->smarty= new Smarty();
        }

    }