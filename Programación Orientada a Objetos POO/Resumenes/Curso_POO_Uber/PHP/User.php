<?php
require_once 'Account.php';
class User extends Account{
    function __construct($name,$document){
       parent::__construct($name,$document);
    }
}
?>