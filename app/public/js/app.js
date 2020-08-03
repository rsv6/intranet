$.ajax({
	url: 'user.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data){
		$(data).each(function(index, value){
			$("p").append("Nome: "+value.nome+"<br>");
		});
	}

});