	var ajax = {
		isSubmiting: false,
		send: function() {
			
			if(ajax.isSubmiting == false) {
				ajax.isSubmiting = true;
				
				var userName = $("input[name=name]").val();
				var userEmail = $("input[name=email]").val();
				var userComments = $("textarea").val();
				
				if(userName == "" || userEmail == "" || userComments == "")
					alert("Form not complete");
				else {
					
					ajax.SetText("Sending...");
					$.post("sendmail.php", {
						name: userName, email: userEmail, comments: userComments	
					}, function(data) {
						if(data == "true") {
							ajax.SetText("Sent!");	
						} else {
							ajax.SetText("Send mail");
							alert(data);	
						}
						
						ajax.isSubmiting = false;
					});
				}
			}
			else alert("You can only send 1 email at a time");
		},
		SetText: function(text) {
			$("input[type=button]").val(text);
		}
	}
