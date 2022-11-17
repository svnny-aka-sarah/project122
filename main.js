x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() 
{
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas=createCanvas(screen_width, screen_height-150);
 create.position(0, 150)
}

function draw()
 {
  if(draw_apple == "set")
  {
    for(var i=1; i <= to_number; i++);
    {
        x= Math.floor(Math.ramdom() *700);
        y= Math.floor(Math.ramdom() *400);
        image(apple, x, y, 50, 50)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples Drawn";
    speak();
    draw_apple = "";
  }
}


function speak()
{
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


function Number()
{
    to_number = Number (content);
    if(Numberis.Integer)
    document.getElementById("status").innerHTML = to_number + "Started Drawing Apple";
    draw_apple="set";
    
}

