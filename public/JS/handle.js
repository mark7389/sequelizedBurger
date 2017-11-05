// on click to handle update request
$(".devour").on("click", function(){

	var id = $(this).attr("id");
	
	$.ajax({

		url: "/api/burger/"+id,
		type: "PUT",
		data: {devoured: true},
	}).done(function(){

		window.location.href="/burger";

	});	



});