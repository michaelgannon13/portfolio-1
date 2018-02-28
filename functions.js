     
                $(document).ready(function() {
                        // rollover opacity
                        $("img").mouseenter(function(){
                            $(this).css("opacity", 0.3);
                        }).mouseout(function(){
                            $(this).css("opacity", 1.0); 
                            });
                    
                        // anchors and elem targetted
                        var pic = $('a');
                        var bigPic = $('#bigPic'); 

                        pic.bind('click', function(){
                            // href of thumb set as src of bigPic
                            bigPic
                              .attr({ src: $(this).attr("href") })
                            //bigPic scaled down and opacity set to 0
                              .css({ opacity:0 })
                              .animate({
                               opacity:0,
                               width: '50px',
                               height:'50px',     
                              })
                            //bigPic scaled up and made opaque for dynamic effect
                              .animate({
                               opacity: 1,  
                               width: '630px',
                               height: '630px'  
                              });
                            ;

                        // specifies only image is being selected
                        // not what the image is wrapped in   
                        return false;
                        })

                       // if searchbox contains text when clicked, clear text
                       $("#search").click(function() {
                              if ($("#search").val() == "Search pictures"){
                                     $("#search").val(""); 
                              }
                       });

            });
                // enabling return key
                function searchKeyPress(e)
                    {
                        if (e.keyCode == 13)
                        {
                            search();
                        }
                    }

                function search() {
                    
                    var bigPic = $('#bigPic'); 
                    // gets user input
                    var img = document.getElementById("search").value;      
                    
                    bigPic
                          // search value is concatonated with the folder url and animated
                          .attr({src:  "img/lrg/" + img + ".jpg"})
                          .css({ opacity:0 })
                          .animate({
                           opacity:0,
                           width: '300px',
                           height:'300px',     
                          })
                          .animate({
                           opacity: 1,  
                           width: '630px',
                           height: '630px'  
                          });
                          ;                    
                }

                // clones contents of bigPic
                function fav() {
                     var bigPic = $('#bigPic');                    
                        newElement= $(bigPic).clone(); 
                        
                        // resized
                        newElement.animate({
                           width: '265px',
                           height:'265px'     
                        })/*
                        .css( "border-style", "solid" );
                            ( "border-color", "yellow" );
                        */
                        //appended to div big
                        $("#big")
                        .append(newElement)
                };
