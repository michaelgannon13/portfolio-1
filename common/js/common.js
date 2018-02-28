        function getWordpressFeed(url){
            $.getFeed({
                url: '/common/proxy.php?url='+url,
                success: function(feed) {
                    jQuery('#id_wordpress-feed').append('<h3>'+'<a href="'+feed.link+'">Latest Blog Entries</a>'+'</h3>');
                    var html = '';                        
                    for(var i = 0; i < feed.items.length && i < 3; i++) {
                        var item = feed.items[i];
                        html += '<div class="item">'+'<a href="'+item.link+'">'+item.title+'</a></div>';
                    }
                    jQuery('#id_wordpress-feed').append(html);
                }    
            });
        }
        function getTwitterFeed(url, target){
            $.getFeed({
                url: '/common/proxy.php?url='+url,
                success: function(feed) {
                    jQuery('#id_twitter-feed').append('<h3>'+'<a href="'+feed.link+'">Latest Tweets</a>'+'</h3>');
                    var html = '';                        
                    for(var i = 0; i < feed.items.length && i < 3; i++) {
                        var item = feed.items[i];
                        html += '<div class="item"><a href="'+item.link+'">'+item.title.slice(0,80)+'...</a></div>';
                    }
                    jQuery('#id_twitter-feed').append(html);
                }    
            });
        }
        function getFlickrFeed(url, target){
            $.getFeed({
                url: '/common/proxy.php?url='+url,
                success: function(feed) {
                    jQuery('#id_flickr-feed').append('<h2>'+'<a href="'+feed.link+'">'+feed.title+'</a>'+'</h2>');
                    var html = '';                        
                    for(var i = 0; i < feed.items.length && i < 3; i++) {
                        var item = feed.items[i];
                        html += '<div class="description"><a href="'+item.link+'">'+item.title+'</a><br><span>'+item.updated+'</span></div>';
                    }
                    jQuery('#id_flickr-feed').append(html);
                }    
            });
        }

