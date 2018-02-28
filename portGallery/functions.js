     
                $(document).ready(function() {
                        // rollover opacity
                        $("img").mouseenter(function(){
                            $(this).css("opacity", 0.3);
                        }).mouseout(function(){
                            $(this).css("opacity", 1.0);
                            });
                });

                $(function(){
                    // anchors and elem targetted
                    var pic = $('a');
                    var bigPic = $('#bigPic'); 
                    
                    pic.bind('click', function(){
     

                        // href of thumb set as src of bigPic
                        bigPic
                          .attr({ src: $(this).attr("href") })
                          .css({ opacity:0 })
                          .animate({opacity:1})
                        ;
                    // specifies only image and not what the image is wrapped in   
                    return false;
                    })
                });


                    
                $(function() {
                   // if searchbox contains text when clicked, clear text
	               $("#search").click(function() {
		                  if ($("#search").val() == "Search pictures"){
			                     $("#search").val(""); 
		                  }
	               });
                });

                function search() {
                    
                    var pic = $('a');
                    var bigPic = $('#bigPic'); 
                    
                    //stores search value
                    var img = document.getElementById("search").value;      
                    
                    bigPic
                          // href of thumb set as src of bigPic
                          .attr({src:  "img/lrg/" + img + ".jpg"})
                          .css({ opacity:0 })
                          .animate({opacity:1})
                          ;                    
                }


                          /*
                          resize width then height
                          newElement.animate({height:'300px',opacity:'0.4'},"slow");
                          newElement.animate({width:'300px',opacity:'0.8'},"slow");
                          newElement.animate({height:'100px',opacity:'0.4'},"slow");
                          newElement.animate({width:'100px',opacity:'0.8'},"slow");*/