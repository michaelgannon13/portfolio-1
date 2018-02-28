//stores canvas and context in variables
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    //array that stores everything drawn to canvas
    points = [],
    mouseX,
    mouseY,
    lastX,
    lastY,
    bgCol,
    offset = $("#canvas").offset(),
    offsetX = offset.left
    offsetY = offset.top,
    isMouseDown = false,
    key=false;    
    radius=10,
	drag=false,
    rect = {},    
    strokeColour=colour;

//sets canvas width and height
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function draw() {
context.fillRect(rect.startX, rect.startY, rect.w, rect.h);
}


document.onkeydown = function(e) {
    key=true;
    
    switch (window.event.keyCode) {
            
        //37 refers to the left arrow
        case 37:
            console.log('left');
            //equation allows for random positioning etc.
            var yPos = ((Math.random()*1000)+1);
            var xPos = ((Math.random()*1000)+1);
            var size = ((Math.random()*100)+1);
            //draws the arc
            context.beginPath();
            context.arc(xPos, yPos, size, 0, Math.PI, false);
            //context.closePath();
            context.strokeStyle = colour;
            context.stroke();
            break;
            
        //38 refers to the up arrow            
        case 38:
            console.log('up');
            var x = Math.floor((Math.random()*700)+1),
                y = Math.floor((Math.random()*1000)+1),
                radius = Math.floor((Math.random()*50)+1),
                startAngle = 0,
                endAngle = 2*Math.PI;
            counterClockwise = false;
            //circle drawn
            context.beginPath();
            context.arc(x, y, radius*2, startAngle, endAngle,counterClockwise);
            context.strokeStyle = colour;
            context.stroke();
            context.closePath();
            break;
            
        //39 refers to the right arrow    
        case 39:
            console.log('right');   
            context.clearRect(0, 0, canvas.width, canvas.height);
            break;
            
        //40 refers to the down arrow            
        case 40:
            console.log('down');
            var rectHeight =Math.floor((Math.random()*50)+1);
            var rectWidth = Math.floor((Math.random()*50)+1);
            var startX = Math.floor((Math.random()*1000)+1);
            var startY = Math.floor((Math.random()*1000)+1);
        
            context.beginPath();
            context.rect(startX, startY, rectWidth, rectHeight);
            context.strokeStyle = colour;
            context.stroke();
            context.closePath();
            break;
    }
};

    
	var mouseDown=function(e){
	drag=true;
    /*if (key=true){    
        
    rect.startX = e.pageX - this.offsetLeft;
    rect.startY = e.pageY - this.offsetTop;
    }*/
        
    //moves to mouse position stores in mouse x,y    
    context.moveTo(mouseX, mouseY);
    points.push({
        x: mouseX,
        y: mouseY,
        size: radius,
        mode: "begin"
        });
    isMouseDown = true;
}
    
    var mouseUp=function(e){    
	drag=false;
    points.push({
        x: mouseX,
        y: mouseY,
        size: radius,
        mode: "end"
    });  
}


	//e is a reference to event listener
	var mouseDrag = function(e){  
    //clientX/Y is coordinates of where mouse is pointing           
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
        
	if(drag){ 
        /*if(key=true){
            rect.w = (e.pageX - this.offsetLeft) - rect.startX;
            rect.h = (e.pageY - this.offsetTop) - rect.startY ;
            context.clearRect(0,0,canvas.width,canvas.height);
            draw();
            }*/
        
        context.lineTo(mouseX, mouseY);
		context.stroke();
		context.beginPath();
		//arc function makes circle shaped pointer
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		//comment below out for different effect
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
        context.stroke();

        points.push({
        x: mouseX,
        y: mouseY,
        size: radius,
        //color: brushColor,
        mode: "draw"
        });
		}
	}
          
      function createCanvas(ctx) {
      if (context === undefined) {
      	canvas = document.getElementById('canvas');
      	context = canvas.getContext('2d');
  	  }
		//giving bg col
    	context.beginPath();
          
	  	context.rect(0,0,canvas.width,canvas.height);
	  	context.fillStyle = bgCol;
	 	context.fill();
	  	context.closePath();
    }
    

	//canvas listens for a mouse events
	canvas.addEventListener('mousedown', mouseDown);
	canvas.addEventListener('mousemove', mouseDrag);
	canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('keydown', onkeydown);
    
    function redrawAll() {
        console.log(points);
        if (points.length == 0) {
            return;    
    }
    //clears canvas    
    context.clearRect(0,0, canvas.width, canvas.height);
    drawLine();    
}

//redraws previous objects in array
function drawLine() {
    context.moveTo(points[0].x, points[0].y); 
    for (var i=0;i< points.length-1; i++)  {
            //draws the line
            context.lineTo(points[i].x, points[i].y);
            context.stroke();
            //begins a path
		    context.beginPath();
		    //arc function makes circle shaped pointer
		    context.arc(points[i].x, points[i].y, points[i].size, 0, Math.PI*2);
		    context.fill();
		    context.beginPath();
            context.moveTo(points[i].x, points[i].y);
            context.stroke();
        }    
}


function prevPoint(){ 
    //splice removes items from array, and returns the removed item(s)
    points.splice(points.length-1, 1);
    console.log(points.length);
    redrawAll();
}

//jquery button enables mouse down function
var interval;
$("#undo").mousedown(function () {
    //10 makes the line undo quickly
    interval = setInterval(prevPoint, 5);
}).mouseup(function () {
    clearInterval(interval);
});



   

        
    