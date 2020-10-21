<?php

    require_once "libs/Smarty.class.php";

    class appView{
        private $smarty;

        function __construct(){

            $this->smarty= new Smarty();
            $this->smarty->assign("base_url", BASE_URL);
        }

        function showIndex(){
            $this->smarty->assign("title", "Todo Fútbol");
            $this->smarty->display("templates/index.tpl");
        }

        function showFemenino(){
            $this->smarty->assign("title", "Fútbol Femenino");
            $this->smarty->display("templates/femenino.tpl");
        }

        function showMasculino(){
            $this->smarty->assign("title", "Fútbol Masculino");
            $this->smarty->display("templates/masculino.tpl");
        }

    }