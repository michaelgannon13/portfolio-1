
var setRadius=function(newRadius){
    
	if(newRadius<minRad)
		newRadius=minRad;
		
	else if(newRadius>maxRad)
		newRadius=maxRad;
		
		radius=newRadius;
        //this is what makes line size the same
        //as the pointer size
		context.lineWidth=radius*2;
		//sets radius figure to radius
		radSpan.innerHTML=radius;
}

var minRad=1,
	maxRad=100,
	defaultRad=20,
	interval=5,
	//calls span and divs in html
	radSpan=document.getElementById('radsize'),
	decRad=document.getElementById('decrease'),
	incRad=document.getElementById('increase');
		
decRad.addEventListener('click', function(){
    //reduces stroke size by interval
	setRadius(radius-interval);
});

incRad.addEventListener('click', function(){
    //increases stroke size by interval    
	setRadius(radius+interval);
});

setRadius(defaultRad)




	

