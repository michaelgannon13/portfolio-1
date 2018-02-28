	var setColour = function(newColour) {
	colour=newColour;
    //creates a solid line illusion
	context.lineWidth=radius*2;
	context.strokeStyle=newColour;
	context.fillStyle=newColour;
	//displays current colour
	colChange.innerHTML=colour;
    }
//links div ids to variables
var redChange=document.getElementById('red'),
	blueChange=document.getElementById('blue'),
	greenChange=document.getElementById('green'),
    yellowChange=document.getElementById('yellow'),
	//stores name of the colour currently selected
	colChange=document.getElementById('colChange'),
	drawRect=document.getElementById('drawRect'),  
	bgColor=document.getElementById('bg'),
	newColour;

bgColor.addEventListener('click', function(context){
    //calls method stored in main.js
    createCanvas();
    });

redChange.addEventListener('click', function(){
    //sets colour to the colour specified
	setColour(colour='#FF0000');
});

blueChange.addEventListener('click', function(){
	setColour(colour='#0000FF');
});

greenChange.addEventListener('click', function(){
	setColour(colour='#30FF30');
});

yellowChange.addEventListener('click', function(){
	setColour(colour='#FFFF00');
});

setColour(newColour)

	
