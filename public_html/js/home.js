/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var banners = ["img/destaque-home.png","img/destaque-home-2.png"];
var bannerAtual = 0;
var timer = setInterval(trocaBanner, 1000);

function validaBusca(){
    
    if (document.querySelector('#q').value === ''){
        document.querySelector('#q').style.background = "red";
        return false;
    }
    else{
        document.querySelector('#form-busca').action = "http://www.google.com.br/search";
       return true;
    }
        
    
}


function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

function pause(){
    clearInterval(timer);
  
}

function play(){
    timer = setInterval(trocaBanner, 1000);
    
}



        
    




