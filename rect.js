function rect(ctx,strC,strW, fillC) {

  this.strokeCol = strC|| '#AAAAAA';
  this.fillCol =  fillC || '#CCCCCC';
  this.strokeWidth = strW || 5;
  this.context = ctx;
  this.points = [];
  this.test =[];
  this.init();

  //default coordinates of our rect
  this.x = 0;
  this.y = 0;
  this.w = 10;
  this.h = 10;
  //this.setPoints();

}

rect.prototype = {
  // initialization, sets this.context to point
  // to the context if the canvas object
  init: function () {
    if (this.context === undefined) {
      var canvas = document.getElementById('canvas');
      rect.prototype.context = canvas.getContext('2d');
  	  }
  },

  setPoints: function(mPos) {
  	this.points.push(mPos);
  },

   // method that calculates width and height from mouseclicks
  setCoords: function () {
  		if (this.points.length==2) {
			//console.log(this.points[0].x, this.points[0].y , this.points[1].x, this.points[1].y);
			this.w = Math.abs(this.points[0].x - this.points[1].x);
			this.h = Math.abs(this.points[0].y - this.points[1].y);
			this.x = this.points[0].x;
			this.y = this.points[0].y;
			console.log(this.x, this.y , this.w, this.h);
		}
  },

  // method that draws a rect
  draw: function () {
  	console.log("draw rect");
	console.log(this.points);
		//if (this.points.length==2) {
			//set width and height
			this.setCoords();
			this.context.strokeStyle = this.strokeCol;
	    	this.context.lineWidth = this.strokeWidth;
	    	this.context.beginPath();
	    	this.context.rect(this.x, this.y, this.h, this.w);
	    	this.context.stroke();
	    	this.context.fill();
	    	this.context.closePath();
	    	//reset the points array to length 0;
	    	this.points.splice(0,2);

	  	//}
  },

}










