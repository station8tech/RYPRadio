
$(document).ready(function(){
	
		
	
			
			var listHtml = "";
			
			var url = "http://www.zippod.net/RYP/jsonCurrent.php"
			$.post(url, function(response){
			var json = $.parseJSON(response);
			
			
			$.each(json, function(key, value){  
				
				
				listHtml += "<li><a href=" + "javascript:openBrowser(" + value.link +  ")" + "><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
				});//end each
			
			
		$("#history").html(listHtml); 
		$('ul').listview('refresh');

			});//end post podlist
			
			
			function openBrowser(link){ 
         
                var ref = cordova.InAppBrowser.open(link, '_blank', 'location=yes');
            }  
			
			
	});//end document ready
