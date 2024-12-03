var robo = require("robotjs");
//let x=Window.screen.width, y=Window.screen.height;

while(true){
    robo.setMouseDelay(30000);
    robo.moveMouse(getRandomNumber(1280),getRandomNumber(720));
    robo.keyTap("enter");
}

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}
