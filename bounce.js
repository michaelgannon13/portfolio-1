var	eraser=document.getElementById('eraser'),
    savePic=document.getElementById('save');


    eraser.addEventListener('click', function(){
     $( document ).click(function() {
          //bounce algorithm being applied to my eraser image       
          $( "#eraser" ).effect( "bounce", { times:3}, "slow" );
        });
	setColour(colour='#FFFFFF');
});


savePic.addEventListener('click', function(){
    $( document ).click(function() {
          $( "#save" ).effect( "bounce", { times:3}, "slow" );
        });
    //puts the canvas into the data variable
	var data = canvas.toDataURL();
	window.open(data, '_blank', 'location=0, menubar=0');
});