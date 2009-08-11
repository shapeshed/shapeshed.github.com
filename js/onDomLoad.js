var lighthouseToken = "b7be0ea3f8655236d2e709d846ab31a9d8971f47";

$(document).ready(function(){		

	/*
	 * Fetch Lighthouse JSON and write to DOM
	 */	
	$('#tickets').ready(function(){
		project = $('#tickets table').attr("class");
		$.getJSON("http://shapeshed.lighthouseapp.com/projects/" + project + "/tickets.json?_token=" + lighthouseToken + "&callback=?", 
		function(json)
			{
				$(json.tickets).each(function(ticket)
				{	
					html = '<tr><td><a href="' + this.ticket.url + '">' + this.ticket.number + '</a></td>';
					html += '<td><a href="' + this.ticket.url + '">' + this.ticket.title + '</a></td>';
					html += '<td><a href="' + this.ticket.url + '">' + this.ticket.milestone_title + '</a></td>';
					html += '<td><a href="' + this.ticket.url + '">' + jQuery.timeago(this.ticket.created_at) + '</a></td>';
					html += '<td><a href="' + this.ticket.url + '">' + jQuery.timeago(this.ticket.updated_at) + '</a></td>';				
					html += '<td class="' + this.ticket.state + '"><a href="' + this.ticket.url + '">' + this.ticket.state + '</a></td></tr>';
					$('#tickets table').append(html)
				});

			});
	});
	
	$('#twitter').ready(function(){
		$('#twitter').append('<img src="/images/content/twitter_loader.gif" alt="Loader image" />');		
	});
	$('#lastfm').ready(function(){
		$('#lastfm').append('<img src="/images/content/lastfm_loader.gif" alt="Loader image" />');		
	});
	$('#flickr').ready(function(){
		$('#flickr').append('<img src="/images/content/flickr_loader.gif" alt="Loader image" class="loader" />');		
	});
	

	
	/*
	 * Fetch Twitter JSON and write to DOM
	 */			
	$.getJSON("http://twitter.com/statuses/user_timeline/shapeshed.json?count=1&callback=?", 
	function(json)
		{
			$('#twitter img').remove();
			var html = "<ul>";
			$(json).each(function(tweet)
			{	
				html += '<li>' + this.text + '<br /><span>'+ jQuery.timeago(this.created_at) +'</span></li>';
			});

			$('#twitter').append(html + "</ul>");
			getLastFm();
		});	

	/*
	 * Fetch Flickr JSON and write to DOM
	 */		
	function getFlickr(){

		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=88593837@N00&format=json&jsoncallback=?", 
		function(json)
			{
				$('#flickr img.loader').remove();
				var html = "<ul>";
				$(json.items).each(function(i,photo)			
				{
					var smallImage = (photo.media.m).replace("_m.jpg", "_s.jpg");

					html += '<li><a href="' + photo.link + '">';
					html += '<img src="' + smallImage;
					html += '" alt="'; html += smallImage.title + '" />';
					html += '</a></li>';
					if ( i == 2 ) return false;
				});
				$('#flickr').append(html + "</ul>");
			});
	}
		
	
	/*
	 * Fetch LastFM and write to DOM
	 */		
	function getLastFm (){
	
		$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=dodinator&format=json&limit=1&api_key=b25b959554ed76058ac220b7b2e0a026&callback=?", 
		function(json)
			{
				$('#lastfm img').remove();
				html = "";
				$(json.recenttracks).each(function(track)
				{	
					html += '<h3><a href="' + this.track.url + '">' + this.track.artist['#text'] + '</a></h3>';
					if (this.track.image[2]['#text'] != "")
					{
						html += '<a href="' + this.track.url + '"><img src="'+ this.track.image[2]['#text'] + '" alt="'+ this.track.name +'" /></a>';					
					}
					else
					{
						html += '<a href="' + this.track.url + '"><img src="/images/content/listening.png" alt="'+ this.track.name +'" /></a>';
					}

					html += '<p><a href="' + this.track.url + '">' + this.track.name + '</a></p>';
					if(this.track.date['#text'] != undefined)

					{
						html += '<p class="time">' + jQuery.timeago(this.track.date['#text']) + '</p>';
					}
				});
				$('#lastfm').append(html);
				getFlickr();
			});
		}
		
	$('#tabs').ready(function(){	
		$('#documentation').hide();
		$('#tickets').hide();
		$('#comments').hide();
		$('#donations').hide();
				
		$('#downloads-tab').click(function () 
		{ 
			$('#documentation').fadeOut("fast");
			$('#tickets').fadeOut("fast");
			$('#comments').fadeOut("fast"); 
			$('#donations').fadeOut("fast"); 			
			$('#downloads').fadeIn("slow");		
			return false
		});

		$('#documentation-tab').click(function () 
		{ 
			$('#downloads').fadeOut("fast");
			$('#tickets').fadeOut("fast");
			$('#comments').fadeOut("fast"); 
			$('#donations').fadeOut("fast"); 			
			$('#documentation').fadeIn("slow");		
			return false
		});
		
		$('#tickets-tab').click(function () 
		{ 
			$('#downloads').fadeOut("fast");
			$('#documentation').fadeOut("fast");
			$('#comments').fadeOut("fast"); 
			$('#donations').fadeOut("fast");
			$('#tickets').fadeIn("slow"); 			
			return false
		});
		
		$('#comments-tab').click(function () 
		{ 
			$('#downloads').fadeOut("fast");
			$('#tickets').fadeOut("fast");
			$('#documentation').fadeOut("fast"); 
			$('#donations').fadeOut("fast");
			$('#comments').fadeIn("slow"); 			
			return false
		});		
		
		$('#donations-tab').click(function () 
		{ 
			$('#downloads').fadeOut("fast");
			$('#tickets').fadeOut("fast");
			$('#comments').fadeOut("fast"); 
			$('#documentation').fadeOut("fast");
			$('#donations').fadeIn("slow");			
			return false
		});		
		
		
		
		
		
		
	});	

});