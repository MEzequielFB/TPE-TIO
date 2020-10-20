<?php

    require_once "appView.php";

    class appController{
        private $view;

        function __construct(){

            $this->view= new appView();
        }

    }