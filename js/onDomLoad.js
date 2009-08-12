$(document).ready(function()
{		
	/*
	 * Adds some loader images and make the first JSON call
	 */
	$('#twitter').append('<img src="/images/content/twitter_loader.gif" alt="Loader image" />');		
	$('#lastfm').append('<img src="/images/content/lastfm_loader.gif" alt="Loader image" />');		
	$('#flickr').append('<img src="/images/content/flickr_loader.gif" alt="Loader image" class="loader" />');		
	getTwitter();
		
	/*
	 * Fetch Twitter JSON and write to DOM
	 * To do: implement some error handling and timeouts
	 */	
	function getTwitter()
	{		
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
	}
	
	/*
	 * Fetch LastFM and write to DOM
	 * To do: implement some error handling and timeouts
	 */	
	function getLastFm ()
	{
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
						html += '<a href="' + this.track.url + '"><img src="'+ this.track.image[2]['#text'] + '" alt="'+ this.track.name +'" class="album-image" /></a>';					
					}
					else
					{
						html += '<a href="' + this.track.url + '"><img src="/images/content/listening.png" alt="'+ this.track.name +'" class="album-image" /></a>';
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

	/*
	 * Fetch Flickr JSON and write to DOM
	 * To do: implement some error handling and timeouts
	 */	
	function getFlickr()
	{
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=88593837@N00&format=json&jsoncallback=?", 
		function(json, textStatus)
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
	 * Fetch Lighthouse JSON and write to DOM
	 */	
	function getLighthouse()
	{
		project = $('#tickets table').attr("class");
		$.getJSON("http://shapeshed.lighthouseapp.com/projects/" + project + "/tickets.json?_token=b7be0ea3f8655236d2e709d846ab31a9d8971f47&callback=?", 
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
	}

	/*
	 * Make the lighthouse call
	 */	
	$('#tickets').ready(function()
	{
		getLighthouse();
	});
		
	/*
	 * Hide and show on the post page
	 */		
	$('#tabs').ready(function()
	{	
		$('#tickets').hide();
		$('#comments').hide();
		$('#donations').hide();

		$('#documentation-tab').click(function() 
		{ 
			$('#tickets').fadeOut("fast");
			$('#comments').fadeOut("fast"); 
			$('#donations').fadeOut("fast"); 			
			$('#documentation').fadeIn("slow");		
			return false
		});
		
		$('#tickets-tab').click(function() 
		{ 
			$('#documentation').fadeOut("fast");
			$('#comments').fadeOut("fast"); 
			$('#donations').fadeOut("fast");
			$('#tickets').fadeIn("slow"); 			
			return false
		});
		
		$('#comments-tab').click(function() 
		{ 
			$('#tickets').fadeOut("fast");
			$('#documentation').fadeOut("fast"); 
			$('#donations').fadeOut("fast");
			$('#comments').fadeIn("slow"); 			
			return false
		});		
		
		$('#donations-tab').click(function() 
		{ 
			$('#tickets').fadeOut("fast");
			$('#comments').fadeOut("fast"); 
			$('#documentation').fadeOut("fast");
			$('#donations').fadeIn("slow");			
			return false
		});	
		
		$('#documentation aside ul').ready(function () 
		{ 
			$('#documentation aside ul').hide();
		});	
		
		$('#documentation aside a#older-versions').click(function () 
		{ 
			$('#documentation aside ul').slideToggle('slow');
		});	
	}
);	

});