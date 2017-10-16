$(document).ready(function() {

	 $("#search").on("click", function(event) {
        event.preventDefault();

        $("#display").html(" ");

		var term = $("#searchterm").val();

		var number = $("#recordsretrieve").val();
		console.log(number);

		var start = $("#startyear").val().trim();

		var end = $("#endyear").val();

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({

			'api-key': "04f9720c85bb46ebb11cf2bc5398f238",
			'q': term,
			// 'fq': number,
			'begin_date': [start],
			'end_date': [end],
			'sort': "newest",
			// 'page': number
		});

		$.ajax({

		  url: url,

		  method: 'GET',

		}).done(function(result) {

		  console.log(result);

		  for (var i = 0; i < number; i++) { 

		  	var showdiv = $("<div class='work'>")

		  	var headline = result.response.docs[i].headline.main;

		  	var webpage = result.response.docs[i].web_url;

		    var author = result.response.docs[i].byline.orginal;

		    var p = $("<h3>").text(i+1 + ".   Headline: " + headline);

		    p.addClass("headline")

		    showdiv.append(p);

		  	$("#display").append(showdiv);

		  }
		 
		}).fail(function(err) {

		  throw err;

		});
	
});

$("#clearbtn").on("click", function(event){
	$(".formcontrol").empty();
	$("#display").empty();
})

});