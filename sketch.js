var mar
var navio
var animacao_navio
var imagem_mar

function preload(){


animacao_navio=loadAnimation("ship-1.png","ship-2.png");
imagem_mar=loadImage("sea.png");
}

function setup(){

mar=createSprite(400,200);
mar.addImage(imagem_mar);
mar.scale=0.5

navio=createSprite(130,280,30,30);
navio.addAnimation("movimentacao",animacao_navio);
navio.scale=0.25;
}

function draw(){

    background("white");
 
    mar.velocityX=-3; 

     //código para redefinir o fundo 
     if(mar.x< 0)
     { mar.x= mar.width/8;
     }


drawSprites();

}