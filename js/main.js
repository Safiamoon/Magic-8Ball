var posX=0;
var posY=0;
var pacmanWidth=100;
var pacmanHeight=100;
var directionX=1;
var angle="0deg";
var pacman = document.querySelector("#pacman");
pacman.style.width=pacmanWidth+"px";
pacman.style.height=pacmanHeight+"px";
pacman.style.transition="left 500ms,top 500ms";
deplacement();

document.body.onkeyup=function(e){

    //To know the key codes you can use "e.keyCode"
    //console.log(e.keyCode);
    if(e.keyCode==37){posX-=50;directionX=-1;angle="0deg";}     //left
    if(e.keyCode==38){posY-=50;directionX=1;angle="-90deg";}    //up
    if(e.keyCode==39){posX+=50;directionX=1;angle="0deg";}      //right
    if(e.keyCode==40){posY+=50;directionX=1;angle="90deg";}     //down

    //GESTION DES BORNES
    if(posX<0){posX=0;}//left
    if(posY<0){posY=0;}//up
    if(posX>(innerWidth-pacmanWidth)){posX=(innerWidth-pacmanWidth);}//right
    if(posY>(innerHeight-pacmanHeight)){posY=(innerHeight-pacmanHeight);}//down
    deplacement();
};

function deplacement(){
    pacman.style.left=posX+"px";
    pacman.style.top=posY+"px";
    pacman.style.transform="scaleX("+directionX+") rotate("+angle+")";
}