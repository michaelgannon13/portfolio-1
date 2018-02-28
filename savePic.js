function saveImage(){
	var data = canvas.toDataURL();
	
	request=new XMLHttpRequest();
	
	request.onreadystatechange=function(){
		if (request.readyState == 4 && request.status == 200){
			//var response = request.responseText;
			//console.log('something worked');
			window.open(data, '_blank', 'location=0, menubar=0');
		}
	}
	
	request.open('POST', 'saveImage.php', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send('img='+data);

}

