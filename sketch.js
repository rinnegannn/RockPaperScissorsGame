function setup() {
  createCanvas(600, 600);
}
  var userOption = "none";
  var state = 1;
var compOption = "none";
 var compSelect = ["Rock", "Paper", "Scissors"];
var output = "";
function draw() {


  if(state == 1){
  background(255);
  fill(0);
  textSize(50);
  textFont(fontBold);
  text("Rock Paper Scissors", 70, 70);
  
  textSize(30);
  fill(200);
  rect(200,150,200,70);
  rect(200,270,200,70);
  rect(200,390,200,70);
  
  
  fill(0);
  text("Rock", 260, 200);
  text("Paper", 255, 320);
  text("Scissors", 240, 440);
  
  if((mouseX >= 200 && mouseX <= 400) && (mouseY >= 150 && mouseY <= 220)){
  fill(255);
  rect(200,150,200,70);
    if(mouseIsPressed){
      userOption = "Rock";
      state = 2;
    }
  }
  
  else if ((mouseX >= 200 && mouseX <= 400) && (mouseY >= 270 && mouseY <= 340)){
    fill(255);
    rect(200,270,200,70);
    if(mouseIsPressed){
      userOption = "Paper";
      state = 2;
    }
  }
    else if ((mouseX >= 200 && mouseX <= 400) && (mouseY >= 390 && mouseY <= 460)){
    fill(255);
    rect(200,390,200,70);
    if(mouseIsPressed){
      userOption = "Scissors";
      state = 2;
    }
  }
}
  if (state == 2){
    
    
   
    compOption = random(compSelect);
    state = 3;
  }
  
  if (state == 3){
    background(255);
    
    if(userOption == "Rock" && compOption == "Rock"){
      output = "Tie";
    }
    else if (userOption == "Rock" && compOption == "Paper"){
      output = "You Lose...";
    }
    
    else if (userOption == "Rock" && compOption == "Scissors"){
      output = "You Win!";
    }
    
    else if (userOption == "Paper" && compOption == "Rock"){
      output = "You Win!";
    }
    else if (userOption == "Paper" && compOption == "Paper"){
      output = "Tie";
    }
    
    else if (userOption == "Paper" && compOption == "Scissors"){
      output = "You Lose";
    }
    
    else if (userOption == "Scissors" && compOption == "Rock"){
      output = "You Lose";
    }
    
    else if (userOption == "Scissors" && compOption == "Paper"){
      output = "You Win";
    }
    
    else {
      output = "Tie";
    }
    textSize(30);
    fill(0);
    text("Your Option:", 50, 150);
    fill(0, 204, 0);
    text(userOption, 70, 200);
    fill(0);
    text("Computer Option:", 300, 150);
    fill(255, 0, 0);
    text(compOption, 370, 200);
    
    
    textSize(50);
    fill(0);
    text(output,220,400);
    
    fill(255);
    rect(230,500,150,50);
    textSize(20);
    fill(0);
    text("Play Again",255,530);
    
    if((mouseX >= 230 && mouseX <= 380) && (mouseY >= 500 && mouseY <= 550)){
      if(mouseIsPressed){
        state = 1;
      }
    
    }
  }
}

let fontBold;
function preload() {
  fontBold = loadFont('Super Dream.ttf');
}