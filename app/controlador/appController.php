<?php

    require_once "app/vista/appView.php";

    class appController{
        private $view;

        function __construct(){

            $this->view= new appView();
        }

        function showIndex(){
            $this->view->showIndex();
        }

        function showFemenino(){
            $this->view->showFemenino();
        }

        function showMasculino(){
            $this->view->showMasculino();
        }

    }