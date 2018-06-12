pragma solidity ^0.4.0;

contract Prueba{
    constructor() public payable{}
    uint private  num;
    string private userName;
    
    function setNum(uint n) public {
        num=n;
    }
    function getNum() public view returns (uint n) {
        return num;
    }
    
    
    function setUserName(string nombre) public{
        userName = nombre;
    }
    
    function getUserName() public view returns (string nombre){
        return  userName;
    }
    
}