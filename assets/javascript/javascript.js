$(document).ready(function() {

	 $("#search").on("click", function(event) {
        event.preventDefault();

		var term = $("#searchterm").val();

		var number = $("#recordsretrieve").val();

		var start = $("#startyear").val();

		var end = $("#endyear").val();

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({

			'api-key': "04f9720c85bb46ebb11cf2bc5398f238",
			'q': term,
			'begin_date': start,
			'end_date': end,
			'sort': "newest",
			'page': number
		});

		$.ajax({

		  url: url,

		  method: 'GET',

		}).done(function(result) {

		  console.log(result);

		  for (var i = 0; i < 5; i++) {

		  	var headline = result.response.docs[i].headline.main;

		  	var image = result.response.docs[i].multimedia[1].legacy.wide;

		    var author = result.response.docs[i].byline.orginal;

		  	$("#display").html("<img src=" + image + "/img>");

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