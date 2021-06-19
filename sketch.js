const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var enemy, enemyAnimation;

function preload() {
    /*enemyAnimation = loadAnimation("images/Monkey_01.png", "images/Monkey_02.png", "images/Monkey_03.png", 
    "images/Monkey_04.png", "images/Monkey_05.png", "images/Monkey_06.png", "images/Monkey_07.png", "images/Monkey_08.png",
    "images/Monkey_09.png", "images/Monkey_10.png");*/

    polygonImg = loadImage('images/polygon.png')
}

function setup(){
    createCanvas(1200,400);
    database = firebase.database();
    engine = Engine.create();
    world = engine.world;

    /*player1 = new Polygon(50, 50, 20);
    player2 = new Polygon(50, 250, 20);*/
    slingshot1 = new Slingshot(player1,{x:100,y:50});
    slingshot2 = new Slingshot(player2,{x:100,y:250});

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("gray");
    Engine.run(engine);
    Engine.update(engine);
    if(playerCount===2){
        game.update(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }
}

/*function mouseDragged(){
    Matter.Body.setPosition(player1.body,{x:mouseX,y:mouseY});
  }
  
function mouseReleased(){
    slingshot.fly();
}
*/