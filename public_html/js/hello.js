/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function mudaTitulo(){

    var titulo = document.querySelector("#titulo");
    
    titulo.textContent = document.getElementById("texto").value;
    
}

function mudaCor(){

    var titulo = document.querySelector("#titulo");
    
    titulo.style.color = "red";
    
}