var randomNumber1=Math.ceil(Math.random()*6);
var randomDiceImage="dice"+ randomNumber1 +".png";
var randomImageSource = "Images/"+randomDiceImage;
var image1=document.querySelector("img");
image1.setAttribute("src",randomImageSource);
//"C:\Users\LENOVO\Documents\dice1.png"

var randomNumber2=Math.ceil(Math.random()*6);
var randomDiceImage2="dice"+ randomNumber2 +".png";
var randomImageSource2 = "Images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
	document.getElementById("result").innerHTML="Player 1 won";
}
else if(randomNumber1 < randomNumber2){
	document.getElementById("result").innerHTML="Player 2 won";
}
else{
	document.getElementById("result").innerHTML="Match draw";
}